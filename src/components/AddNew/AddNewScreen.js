import React, {Component} from 'react';
import {View, Text} from 'native-base';
import globalStyles from '../common/GlobalStyles';

export default class AddNewScreen extends Component {
  render() {
    return (
      <View style={globalStyles.textCenter}>
        <Text>Add New Screen</Text>
      </View>
    );
  }
}
