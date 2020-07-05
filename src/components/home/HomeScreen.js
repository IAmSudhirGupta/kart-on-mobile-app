import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {SafeAreaView, StyleSheet, ScrollView, StatusBar} from 'react-native';
import {Container, Icon, Button, Content} from 'native-base';
import LogoTitle from '../common/LogoTitle';
import globalStyles from '../common/GlobalStyles';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = ({navigation}) => ({
    headerTitle: () => <LogoTitle />,
    headerRight: () => (
      <Button
        transparent
        onPress={() => console.log('Right Header Button Clicked...')}>
        <Icon name="ios-gift" />
      </Button>
    ),
    headerLeft: () => (
      <Button transparent onPress={() => navigation.toggleDrawer()}>
        <Icon name="menu" />
      </Button>
    ),
    headerStyle: {
      backgroundColor: '#fff',
      height: 50,
    },
  });
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <Container>
              <Content>
                <View style={globalStyles.textCenter}>
                  <Text>Home Screen</Text>
                </View>
              </Content>
            </Container>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}
export default HomeScreen;
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#ffffff',
  },
});
