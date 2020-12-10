import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Container, Content} from 'native-base';

export default class SettingsScreen extends Component {
  render() {
    return (
      <Container>
        <Content>
          <View>
            <Text>Settings Screen...</Text>
          </View>
        </Content>
      </Container>
    );
  }
}
