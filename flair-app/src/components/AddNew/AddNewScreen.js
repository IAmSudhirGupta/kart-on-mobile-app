import React, {Component} from 'react';
import {
  StatusBar,
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Image,
} from 'react-native';
// import CameraApp from './Camera';
import DocumentPicker from 'react-native-document-picker';
import VideoPlay from './VideoPlay';
import {Tile} from 'react-native-elements';

export default class AddNewScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      video: {},
      playVideo: false,
      description: '',
    };
  }
  componentDidMount() {
    // this.pickFiles();
  }
  async pickFiles() {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.video],
      });
      this.setState({video: res});
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
      } else {
        throw err;
      }
    }
  }
  handleClick = () => {
    console.log('handleClick');
    this.setState({playVideo: true});
  };
  onChangeText = text => {
    console.log('handleChangeText', text);
    this.setState({description: text});
  };
  render() {
    return (
      <>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="light-content"
        />
        <View style={styles.container}>
          {/* {this.state.playVideo ? (
            <VideoPlay video={this.state.video} />
          ) : (
            <View />
          )} */}
          {/* <Text>{this.state.video.uri}</Text> */}

          <View style={{flex: 1, flexDirection: 'row', width: 200, height: 200}}>
            <Tile
              onPress={this.handleClick}
              imageSrc={{
                uri:
                  'https://images.all-free-download.com/images/graphiclarge/christmas_snowflake_fantasy_background_hd_picture_169755.jpg',
              }}
              title="Lorem ipsum dolor sit amet, consectetur"
              icon={{name: 'play-circle', type: 'font-awesome'}} // optional
              contentContainerStyle={{height: 70}}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text>Caption</Text>
                <Text>Caption</Text>
              </View>
            </Tile>
          </View>
          <View style={{flex: 1}}>
            <Text>Add Description</Text>
            <View>
              <TextInput
                multiline
                numberOfLines={4}
                onChangeText={text => this.onChangeText(text)}
              />
            </View>
          </View>
          <View style={{height: 50}}>
            <Button title="SUBMIT" />
          </View>
        </View>
        {/* <CameraApp /> */}
      </>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  tinyLogo: {
    width: 50,
    marginTop: 100,
    height: 50,
  },
});
