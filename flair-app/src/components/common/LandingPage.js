import React from 'react';
import {StyleSheet, Text, View, Button, StatusBar, TouchableOpacity} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
// import {TouchableOpacity} from 'react-native-gesture-handler';

// import Logo from './assets/chef.png';

export default class LandingPage extends React.Component {
  render() {
    return (
      <>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="light-content"
        />
        <View style={styles.container}>
          <LinearGradient
            colors={['rgba(0,0,0,0.8)', 'transparent']}
            style={styles.background}
          />
          <TouchableOpacity style = {{width: 20, height: 5}}>
            <LinearGradient
              colors={['#4c669f', '#3b5998', '#192f6a']}
              style={styles.button}>
              <Text style={styles.text}>Let's Start</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#414E59',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },
  button: {
    top: 350,
    paddingVertical: 15,
    paddingHorizontal: 100,
    alignItems: 'baseline',
    borderRadius: 5,
  },
  text: {
    backgroundColor: 'transparent',
    fontSize: 15,
    color: '#fff',
  },
});
