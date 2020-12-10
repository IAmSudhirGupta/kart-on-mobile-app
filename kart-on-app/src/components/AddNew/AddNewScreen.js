import React, {Component} from 'react';
import {StatusBar} from 'react-native';
import CameraApp from './Camera';

export default class AddNewScreen extends Component {
  render() {
    return (
      <>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="light-content"
        />
        <CameraApp />
      </>
    );
  }
}
