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
import SearchScreen from '../components/search/SearchScreen';
import AddNewScreen from '../components/AddNew/AddNewScreen';
import LogInWithOtp from '../components/login/LoginWithOtp';
import LogInWithPassword from '../components/login/LoginWithPassword';
import NotificationScreen from '../components/notification/NotificationScreen';
import LandingPage from '../components/common/LandingPage';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    LandingPage: {
      screen: LandingPage,
      navigationOptions: {
        headerTransparent: true,
        headerTitle: () => null,
      }
    },
    Login: {
      screen: LoginScreen,
    },
    Settings: SettingsScreen,
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        headerTransparent: true,
      },
    },
    AddNew: {
      screen: AddNewScreen,
      navigationOptions: {
        headerTransparent: true,
        headerTitle: () => null,
        headerTintColor: 'white',
      },
    },
    Search: SearchScreen,
    Notification: NotificationScreen,
  },
  {
    initialRouteName: 'Home',
  },
);

// const AddNewNavigator = createStackNavigator(
//   {
//     Home: {
//       screen: HomeScreen,
//     },
//     Login: {
//       screen: LoginScreen,
//     },
//     Settings: SettingsScreen,
//     Profile: ProfileScreen,
//     AddNew: AddNewScreen,
//   },
//   {
//     initialRouteName: 'AddNew',
//   },
// );

// const SearchNavigator = createStackNavigator(
//   {
//     Home: {
//       screen: HomeScreen,
//     },
//     Login: {
//       screen: LoginScreen,
//     },
//     Settings: SettingsScreen,
//     Profile: ProfileScreen,
//     AddNew: AddNewScreen,
//     Search: SearchScreen,
//   },
//   {
//     initialRouteName: 'Search',
//   },
// );

// const ProfileNavigator = createStackNavigator(
//   {
//     Home: {
//       screen: HomeScreen,
//     },
//     Login: {
//       screen: LoginScreen,
//     },
//     Settings: SettingsScreen,
//     Profile: ProfileScreen,
//     AddNew: AddNewScreen,
//     Search: SearchScreen,
//     LogInWithOtp: LogInWithOtp,
//     LogInWithPassword: LogInWithPassword,
//   },
//   {
//     initialRouteName: 'Profile',
//   },
// );

// const TabNavigator = createBottomTabNavigator(
//   {
//     Home: {
//       screen: AppNavigator,
//       navigationOptions: {
//         tabBarLabel: 'Home',
//         tabBarIcon: ({focused, tintcolor}) => getIcons(focused, 'ios-home'),
//       },
//     },
//     AddNew: {
//       screen: AddNewNavigator,
//       navigationOptions: {
//         tabBarLabel: 'Add',
//         tabBarIcon: ({focused, tintcolor}) => getIcons(focused, 'ios-add'),
//       },
//     },
//     Search: {
//       screen: SearchNavigator,
//       navigationOptions: {
//         tabBarLabel: 'Search',
//         tabBarIcon: ({focused, tintcolor}) => getIcons(focused, 'ios-search'),
//       },
//     },
//     Profile: {
//       screen: ProfileNavigator,
//       navigationOptions: {
//         tabBarLabel: 'Profile',
//         tabBarIcon: ({focused, tintcolor}) => getIcons(focused, 'person'),
//       },
//     },
//   },
//   {
//     initialRouteName: 'Home',
//     tabBarOptions: {
//       style: {height: 40},
//       showLabel: false,
//     },
//   },
// );

// const MainNavigator = createDrawerNavigator(
//   {
//     Home: {
//       screen: TabNavigator,
//     },
//   },
//   {
//     contentComponent: CustomDrawer,
//     drawerWidth: Dimensions.get('window').width - 130,
//   },
// );

export default createAppContainer(AppNavigator);

const getIcons = (isFocused, icons) => {
  return (
    <Icon
      name={icons}
      style={{fontSize: 20, color: isFocused ? '#68787d' : '#000'}}
    />
  );
};
