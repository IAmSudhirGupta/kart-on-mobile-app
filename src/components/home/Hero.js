import React, {useState} from 'react';
import {View, Dimensions} from 'react-native';
import styled from 'styled-components/native';
import ViewPager from '@react-native-community/viewpager';
import VideoPlayer from './VideoPlayer';
import {LinearGradient} from 'expo-linear-gradient';
import Info from './Info';
import SideBar from './SideBar';

const Container = styled(ViewPager)`
  height: 100%;
`;

const Gradient = styled(LinearGradient)`
  height: 100%;
  justify-content: space-between;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
`;

const Center = styled.View`
  flex: 1;
  flex-direction: row;
`;

const Hero = props => {
  const [selected, setSelected] = useState(0);
  const {videos} = props;
  return (
    <Container
      orientation="vertical"
      onPageSelected={e => setSelected(e.nativeEvent.position)}
      initialPage={0}>
      {videos.map((item, index) => (
        <View key={item.id}>
          <VideoPlayer
            {...props}
            poster={item.poster}
            video={item.video}
            isPlay={selected === index}
          />
          <Gradient
            Locations={[0, 0.26, 0.6, 1]}
            colors={[
              'rgba(26, 26, 26, 1)',
              'rgba(26, 26, 26, 0)',
              'rgba(26, 26, 26, 0)',
              'rgba(26, 26, 26, 1)',
            ]}>
            <Center>
              <Info user={item.user} />
              <SideBar item={item} />
            </Center>
          </Gradient>
        </View>
      ))}
    </Container>
  );
};

export default Hero;
