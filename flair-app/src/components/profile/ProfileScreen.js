import React, {Component} from 'react';
import styled from 'styled-components/native';
import {
  StatusBar,
  StyleSheet,
  Dimensions,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {connect} from 'react-redux';
// import LogInWithOtp from '../login/LoginWithOtp';
import Login from '../login/LoginScreen';

const Container = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
`;
const ImageContainer = styled.ImageBackground`
  resize-mode: cover;
  justify-content: center;
  height: 200px;
`;
const image = {
  uri: 'https://www.xda-developers.com/files/2019/11/URL-Radio.jpg',
};

const FirstRoute = () => <View style={styles.scene} />;
const SecondRoute = () => <View style={styles.scene} />;

const initialLayout = {width: Dimensions.get('window').width};

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      routes: [
        {key: 'first', title: 'First'},
        {key: 'second', title: 'Second'},
      ],
      isLoggedIn: this.props.isLoggedIn,
    };
  }
  componentDidMount() {
    // if (this.props.isLoggedIn) {
    //   this.setState({isLoggedIn: true});
    // } else {
    //   this.setState({isLoggedIn: false});
    // }
  }
  setIndex = index => {
    this.setState({index});
  };
  renderProfile() {
    return (
      <Container>
        <ImageContainer source={image}>
          {/* <Text style={styles.text}>Inside</Text> */}
        </ImageContainer>
        <Image
          style={styles.avatar}
          source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}
        />
        <View style={styles.body}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.editText}>Edit profile</Text>
          </TouchableOpacity>
          <View style={styles.profileSection}>
            <Text style={styles.nameText}>Sudhir Gupta</Text>
            <Text style={styles.idText}>@sudhir.g</Text>
            <Text style={styles.tagLineText}>Come, Join and Explore...</Text>
          </View>
        </View>
        <TabView
          navigationState={{
            index: this.state.index,
            routes: this.state.routes,
          }}
          renderScene={renderScene}
          onIndexChange={index => this.setIndex(index)}
          initialLayout={initialLayout}
          renderTabBar={renderTabBar}
        />
      </Container>
    );
  }
  render() {
    return (
      <>
        <StatusBar
          translucent
          backgroundColor="black"
          barStyle="light-content"
        />
        {this.state.isLoggedIn ? this.renderProfile() : <Login />}
      </>
    );
  }
}
const mapStateToProps = state => {
  console.log(' state : ', state);
  return {...state};
};

const mapDispatchToProps = () => {};

export default connect(
  mapStateToProps,
  null,
)(Profile);

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{backgroundColor: '#007bff'}}
    style={{backgroundColor: 'transparent', fontWeight: 'bold'}}
    activeColor="#007bff"
    inactiveColor="rgba(69, 68, 68, 0.7)"
  />
);
const styles = StyleSheet.create({
  btn: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderColor: 'rgba(69, 68, 68, 0.7)',
    borderWidth: 1,
    borderRadius: 50,
    alignSelf: 'flex-end',
  },
  profileSection: {
    marginTop: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 63,
    borderWidth: 2,
    marginLeft: 10,
    borderColor: 'white',
    position: 'absolute',
    marginTop: 150,
  },
  body: {
    padding: 10,
  },
  scene: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    height: 200,
  },
  editText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'rgba(69, 68, 68, 0.7)',
  },
  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'rgba(0, 0, 0, 1)',
  },
  idText: {
    fontSize: 15,
    color: 'rgba(0, 0, 0, 0.5)',
  },
  tagLineText: {
    fontSize: 16,
    color: 'rgba(0, 0, 0, 1)',
  },
});
