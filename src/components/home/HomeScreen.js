import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {SafeAreaView, StyleSheet, ScrollView, StatusBar} from 'react-native';
import {Container, Icon, Button, Content} from 'native-base';
import LogoTitle from '../common/LogoTitle';
import globalStyles from '../common/GlobalStyles';
import VideoComponent from '../common/VideoComponent';
import Home from './Home';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = ({navigation}) => ({
    headerShown: false,
  });
  render() {
    return <Home {...this.props} />;
  }
}
export default HomeScreen;
