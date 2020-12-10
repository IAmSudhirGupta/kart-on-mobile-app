import React from 'react';
import {TextInput, View} from 'react-native';
import globalStyles from './GlobalStyles';

const AppTextInput = props => {
  return (
    <View style={globalStyles.inputTextContainer}>
      <TextInput {...props} />
    </View>
  );
};

export default AppTextInput;
