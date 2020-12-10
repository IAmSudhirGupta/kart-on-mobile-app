/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {Icon} from 'native-base';
import UserProfile from '../../assets/icons/icon-user-large.png';
export default class CustomDrawer extends Component {
  constructor() {
    super();
    this.items = [
      {
        navOptionThumb: 'home',
        navOptionName: 'Home',
        screenToNavigate: 'Home',
      },
      {
        navOptionThumb: 'ios-male',
        navOptionName: 'Login',
        screenToNavigate: 'Login',
      },
      {
        navOptionThumb: 'build',
        navOptionName: 'Settings',
        screenToNavigate: 'Settings',
      },
    ];
  }
  render() {
    return (
      <View style={styles.sideMenuContainer}>
        <View>
          <Image source={UserProfile} style={styles.sideMenuProfileIcon} />
          <View>
            <Text>Sudhir Kumar Gupta</Text>
          </View>
        </View>
        <View style={styles.divider} />
        <View style={{width: '100%'}}>
          {this.items.map((item, key) => (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingTop: 10,
                paddingBottom: 10,
                backgroundColor:
                  global.currentScreenIndex === key ? '#e0dbdb' : '#ffffff',
              }}
              key={key}>
              <View style={{marginRight: 10, marginLeft: 20}}>
                <Icon name={item.navOptionThumb} size={25} color="#808080" />
              </View>
              <Text
                style={{
                  fontSize: 15,
                  color: global.currentScreenIndex === key ? 'red' : 'black',
                }}
                onPress={() => {
                  global.currentScreenIndex = key;
                  this.props.navigation.navigate(item.screenToNavigate);
                }}>
                {item.navOptionName}
              </Text>
            </View>
          ))}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  sideMenuContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 20,
  },
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 150,
    height: 150,
    marginTop: 10,
    borderRadius: 150 / 2,
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#e2e2e2',
    marginTop: 15,
  },
});
