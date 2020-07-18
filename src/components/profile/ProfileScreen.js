import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Container, Content} from 'native-base';
import globalStyles from '../common/GlobalStyles';
export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
    this.props.navigation.navigate('Login');
  }
  static getDerivedStateFromProps(props, state) {
    // console.log(props);
    // console.log(state);
    return {...state};
  }
  componentDidUpdate(prevProps, prevState) {
    // console.log('componentDidUpdate', prevState, prevProps);
  }

  render() {
    return (
      <Container>
        <Content>
          <View style={globalStyles.textCenter}>
            {this.props.navigation.navigate('Login')}
          </View>
        </Content>
      </Container>
    );
  }
}
