import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet, Dimensions} from 'react-native';
import Video from 'react-native-video';

export default class VideoComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  renderVideo(video) {
    return (
      <Video
        source={{
          uri:
            'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4',
        }}
        style={styles.backgroundVideo}
        muted={false}
        repeat={true}
        resizeMode={'cover'}
        volume={1.0}
        controls={true}
        rate={1.0}
        ignoreSilentSwitch={'obey'}
      />
    );
  }

  render() {
    return <View>{this.renderVideo(this.props.video)}</View>;
  }
}

var styles = StyleSheet.create({
  backgroundVideo: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height - 150,
    // position: 'absolute',
    // top: 0,
    // left: 0,
    // bottom: 0,
    // right: 0,
  },
});
