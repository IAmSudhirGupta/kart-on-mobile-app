/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Dimensions} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import LoginScreen from '../components/login/LoginScreen';
import HomeScreen from '../components/home/HomeScreen';
import CustomDrawer from '../components/common/CustomDrawer';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Icon} from 'native-base';
import ProfileScreen from '../components/profile/ProfileScreen';
import SettingsScreen from '../components/common/SettingsScreen';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Login: {
      screen: LoginScreen,
    },
    Settings: SettingsScreen,
    Profile: ProfileScreen,
  },
  {
    initialRouteName: 'Home',
  },
);
const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: AppNavigator,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({focused, tintcolor}) => getIcons(focused, 'ios-home'),
      },
    },
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        tabBarLabel: 'Login',
        tabBarIcon: ({focused, tintcolor}) => getIcons(focused, 'ios-add'),
      },
    },
    Search: {
      screen: LoginScreen,
      navigationOptions: {
        tabBarLabel: 'Login',
        tabBarIcon: ({focused, tintcolor}) => getIcons(focused, 'ios-search'),
      },
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarLabel: 'Profile',
        tabBarIcon: ({focused, tintcolor}) => getIcons(focused, 'person'),
      },
    },
  },
  {
    initialRouteName: 'Home',
    tabBarOptions: {
      style: {height: 40},
      showLabel: false,
      //   showIcon: true,
      //   tintColor: '#333',
      //   activeTintColor: '#aaa',
    },
  },
);

const MainNavigator = createDrawerNavigator(
  {
    Home: {
      screen: TabNavigator,
    },
  },
  {
    contentComponent: CustomDrawer,
    drawerWidth: Dimensions.get('window').width - 130,
  },
);

export default createAppContainer(MainNavigator);

const getIcons = (isFocused, icons) => {
  return (
    <Icon
      name={icons}
      style={{fontSize: 20, color: isFocused ? '#68787d' : '#000'}}
    />
  );
};
