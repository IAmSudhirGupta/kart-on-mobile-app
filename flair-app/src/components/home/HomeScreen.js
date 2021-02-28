import React, {Component} from 'react';
// import {View, Text} from 'react-native';
// import {SafeAreaView, StyleSheet, ScrollView, StatusBar} from 'react-native';
// import {Container, Icon, Button, Content} from 'native-base';
// import LogoTitle from '../common/LogoTitle';
// import globalStyles from '../common/GlobalStyles';
// import VideoComponent from '../common/VideoComponent';
import Geolocation from '@react-native-community/geolocation';
import DeviceInfo from 'react-native-device-info';
import {registerDevice} from '../../services/User';

import styled from 'styled-components/native';
import {StatusBar} from 'react-native';
import Hero from './Hero';
import Tabs from './Tabs';
// import AppHeader from '../common/AppHeader';
import api from '../../services/api';
import {getPosts} from '../../services/Post';

const Container = styled.View`
  flex: 1;
  background: transparent;
`;
class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }
  componentDidMount() {
    let deviceId = DeviceInfo.getUniqueId();
    Geolocation.getCurrentPosition(info => {
      let payload = {
        deviceId: deviceId,
        location: info.coords,
      };
      registerDevice(payload)
        .then(resp => {
          // console.log('Register Device resp: ' + JSON.stringify(resp));
        })
        .catch(function(error) {
          console.log(error);
        });
    });
    getPosts()
      .then(resp => {
        this.setState({posts: resp.data.data});
        console.log('Posts:', resp.data.data);
      })
      .catch(error => {
        console.log('Post error: ', error);
      });
  }
  static navigationOptions = ({navigation}) => ({
    headerShown: false,
  });
  render() {
    return (
      <>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="light-content"
        />
        <Container>
          {/* <AppHeader /> */}
          <Hero videos={this.state.posts} {...this.props} />
          <Tabs {...this.props} />
        </Container>
      </>
    );
  }
}
export default HomeScreen;
