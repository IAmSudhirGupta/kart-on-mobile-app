import React from 'react';
import {View, Text} from 'native-base';
import {StyleSheet} from 'react-native';

const LogoTitle = () => {
  return (
    <View style={styles.title}>
      <Text>App Title</Text>
    </View>
  );
};

export default LogoTitle;

const styles = StyleSheet.create({
  title: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});
