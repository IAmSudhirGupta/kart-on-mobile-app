import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Container, Content} from 'native-base';
import globalStyles from '../common/GlobalStyles';

export default class Login extends Component {
  render() {
    return (
      <Container>
        <Content>
          <View style={globalStyles.textCenter}>
            <Text>login Screen...</Text>
          </View>
        </Content>
      </Container>
    );
  }
}
