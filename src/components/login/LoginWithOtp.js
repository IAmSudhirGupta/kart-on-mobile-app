import React, {Component} from 'react';
import AppButton from '../common/AppButton';
import globalStyles from '../common/GlobalStyles';
import {View, Text, StyleSheet, Image} from 'react-native';
import OTPTextInput from 'react-native-otp-textinput';
import {TouchableOpacity} from 'react-native-gesture-handler';
import profileIcon from '../../assets/icons/mobile.png';
export default class LogInWithOtp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      inputMode: '',
      inputMobileEmail: '',
    };
  }
  componentDidMount() {
    console.log('login props', this.props.navigation.state.params);
    this.setState({
      inputMode: this.props.navigation.state.params.inputMode,
      inputMobileEmail: this.props.navigation.state.params.inputValue,
    });
  }

  handleOtpChange = inputText => {
    console.log('inputText', inputText);
    this.setState({inputValue: inputText});
  };
  onPressProceed = () => {
    if (this.state.inputValue) {
      this.props.navigation.navigate('Home');
    }
  };

  render() {
    return (
      <View style={globalStyles.screenContainer}>
        <View>
          <Image source={profileIcon} style={styles.imageStyle} />
          <Text style={styles.textStyle}>{this.state.inputMobileEmail}</Text>
          <Text style={styles.textHeading}>
            OTP is sent to your{' '}
            {this.state.inputMode + ' ' + this.state.inputMobileEmail}{' '}
          </Text>
        </View>
        <OTPTextInput
          handleTextChange={text => this.handleOtpChange(text)}
          inputCount={4}
          keyboardType="numeric"
          tintColor="#000"
        />
        <AppButton title="Verify OTP" onPress={this.onPressProceed} />
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate(
              'LoginWithPassword',
              this.props.navigation.state.params,
            );
          }}>
          <Text style={styles.textStyle}>Login With password</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textHeading: {
    lineHeight: 22,
    letterSpacing: 0.17,
    textAlign: 'center',
    marginTop: 20,
  },
  textStyle: {
    lineHeight: 22,
    letterSpacing: 0.17,
    textAlign: 'center',
    marginTop: 20,
    textTransform: 'uppercase',
  },
  imageStyle: {width: 62, height: 62, alignSelf: 'center'},
});
