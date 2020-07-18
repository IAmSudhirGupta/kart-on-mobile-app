import React, {Component} from 'react';
import AppButton from '../common/AppButton';
import globalStyles from '../common/GlobalStyles';
import {View, Text, Image, StyleSheet} from 'react-native';
import AppTextInput from '../common/AppTextInput';
import profileIcon from '../../assets/icons/profile.png';
import {isValueEmail, isValidMobileNumber} from '../../Utils/Utils';
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      isInvalidInput: false,
      inputValueErrorMsg: false,
      inputMode: '',
    };
  }

  onChangeText = inputText => {
    this.setState({inputValue: inputText});
    if (inputText.length < 2) {
      this.setState({
        isInvalidInput: false,
        inputValueErrorMsg: 'Please enter correct mobile number',
      });
      return false;
    }
    if (!isNaN(inputText)) {
      if (!isValidMobileNumber(inputText)) {
        this.setState({
          isInvalidInput: true,
          inputValueErrorMsg: 'Please enter correct mobile number',
        });
      } else {
        this.setState({
          inputMode: 'mobile',
          isInvalidInput: false,
        });
      }
    } else if (!isValueEmail(inputText)) {
      this.setState({
        isInvalidInput: true,
        inputValueErrorMsg: 'Please enter correct email or mobile',
      });
    } else {
      this.setState({
        isInvalidInput: false,
        inputMode: 'email',
      });
    }
  };
  onPressProceed = () => {
    if (!this.state.inputValue) {
      return false;
    }
    this.props.navigation.navigate('LogInWithOtp', {
      inputMode: this.state.inputMode,
      inputValue: this.state.inputValue,
    });
  };

  render() {
    return (
      <View style={globalStyles.screenContainer}>
        <View style={globalStyles.screenContainer}>
          <Image source={profileIcon} style={styles.imageStyle} />
          <Text style={styles.textStyle}>welcome Guest</Text>
        </View>
        <AppTextInput
          placeholder="Enter your email/mobile"
          onChangeText={this.onChangeText}
          value={this.state.inputValue}
          style={styles.inputStyle}
        />
        {this.state.isInvalidInput ? (
          <View>
            <Text style={globalStyles.errorTextContainer}>
              {this.state.inputValueErrorMsg}
            </Text>
          </View>
        ) : (
          <View />
        )}
        <AppButton title="Login / Register" onPress={this.onPressProceed} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textStyle: {
    lineHeight: 22,
    letterSpacing: 0.17,
    textAlign: 'center',
    marginTop: 20,
    textTransform: 'uppercase',
  },
  inputStyle: {padding: 8},
  imageStyle: {width: 62, height: 62, alignSelf: 'center'},
});
