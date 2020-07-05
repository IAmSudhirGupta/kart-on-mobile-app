import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Container, Content} from 'native-base';
import globalStyles from '../common/GlobalStyles';

export default class Profile extends Component {
  render() {
    return (
      <Container>
        <Content>
          <View style={globalStyles.textCenter}>
            <Text>Profile Screen...</Text>
          </View>
        </Content>
      </Container>
    );
  }
}
