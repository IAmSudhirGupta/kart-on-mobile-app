import React from 'react';
import styled from 'styled-components';
import HomeIcon from '../../assets/icons/home.png';
import SearchIcon from '../../assets/icons/discover.png';
import MessageIcon from '../../assets/icons/message.png';
import ProfileIcon from '../../assets/icons/profile_ic.png';
import {LinearGradient} from 'expo-linear-gradient';
import {Icon} from 'native-base';

const Container = styled.View`
  width: 100%;
  height: 50px;
  position: absolute;
  bottom: 0;
  z-index: 1;
  border-top-width: 1px;
  border-top-color: rgba(255, 255, 255, 0.2);
  flex-direction: row;
  background-color: transparent;
`;

const Menu = styled.TouchableOpacity`
  width: 20%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const MenuText = styled.Text`
  font-size: 9px;
  margin-top: -3px;
  color: ${props => (props.active ? '#fff' : 'rgba(255, 255, 255, 0.6)')};
`;

const CustomIcon = styled.Image.attrs({resizeMode: 'contain'})`
  height: 32px;
`;

const Border = styled(LinearGradient)`
  width: 44px;
  height: 28px;
  background-color: #fff;
  border-radius: 8px;
  align-items: center;
`;

const Button = styled.TouchableOpacity`
  width: 36px;
  height: 28px;
  background-color: #fff;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

const Tabs = () => {
  return (
    <Container>
      <Menu>
        <CustomIcon source={HomeIcon} />
        <MenuText active={true}>Home</MenuText>
      </Menu>
      <Menu>
        <CustomIcon source={SearchIcon} />
        <MenuText>Discover</MenuText>
      </Menu>
      <Menu>
        <Border
          start={{x: 1, y: 0}}
          Locations={[0, 0.5, 0.5, 1]}
          colors={['#f42365', '#f42365', '#37d7cf', '#37d7cf']}>
          <Button>
            <Icon name="ios-add" size={20} color="#808080" />
          </Button>
        </Border>
      </Menu>
      <Menu>
        <CustomIcon source={MessageIcon} />
        <MenuText>Message</MenuText>
      </Menu>
      <Menu>
        <CustomIcon source={ProfileIcon} />
        <MenuText>Profile</MenuText>
      </Menu>
    </Container>
  );
};

export default Tabs;
