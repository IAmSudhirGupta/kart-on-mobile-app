import React from 'react';
import {Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import globalStyles from './GlobalStyles';

const AppButton = ({onPress, title}) => (
  <TouchableOpacity onPress={onPress} style={globalStyles.appButtonContainer}>
    <Text style={globalStyles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

export default AppButton;
