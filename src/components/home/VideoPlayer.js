import React from 'react';
import styled from 'styled-components';
import {Video} from 'expo-av';

const Poster = styled.ImageBackground`
  height: 100%;
`;

const Play = styled(Video)`
  height: 100%;
`;

const VideoPlayer = ({poster, video, isPlay}) => {
  return isPlay ? (
    <Play
      rate={1.0}
      volume={1.0}
      isMuted={false}
      shouldPlay
      useNativeControls={false}
      posterSource={{
        uri: poster,
      }}
      source={{uri: video}}
      resizeMode="cover"
    />
  ) : (
    <Poster
      source={{
        uri: poster,
      }}
    />
  );
};

export default VideoPlayer;
