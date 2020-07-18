import React, {Component} from 'react';
import {View, Text} from 'native-base';
import globalStyles from '../common/GlobalStyles';

export default class SearchScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={globalStyles.textCenter}>
        <Text>Search Screen</Text>
      </View>
    );
  }
}
