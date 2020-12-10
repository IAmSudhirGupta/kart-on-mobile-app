import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {Video} from 'expo-av';

const Poster = styled.ImageBackground`
  height: 100%;
`;

const Play = styled(Video)`
  height: 100%;
`;

const VideoPlayer = props => {
  const [isPlaying, setIsPlaying] = useState(true);
  useEffect(() => {
    window.willBlurSubscription = props.navigation.addListener(
      'willBlur',
      willBlurAction,
    );
    window.willFocusSubscription = props.navigation.addListener(
      'willFocus',
      willFocusAction,
    );
    return () => {
      window.willBlurSubscription.remove();
      window.willFocusSubscription.remove();
    };
  });
  const {poster, video, isPlay} = props;
  const willBlurAction = () => {
    setIsPlaying(false);
  };
  const willFocusAction = () => {
    setIsPlaying(true);
  };
  return isPlay ? (
    <Play
      rate={1.0}
      volume={1.0}
      isMuted={false}
      shouldPlay={isPlaying}
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
