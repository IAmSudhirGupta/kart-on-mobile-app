import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components';

const Container = styled.View`
  width: 60px;
  height: 100%;
  padding-bottom: 50px;
  justify-content: flex-end;
`;
const Menu = styled.View`
  margin: 9px 0;
  align-items: center;
`;

const User = styled.View`
  width: 48px;
  height: 48px;
  margin-bottom: 13px;
`;
const Avatar = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 48px;
  border-width: 2px;
  border-color: 2px;
`;

const CustomIcon = styled.Image`
  height: 40px;
`;

const Count = styled.Text`
  color: #fff;
  font-size: 12px;
  letter-spacing: -0.1px;
`;

const SideBar = ({item}) => {
  return (
    <Container>
      <Menu>
        <User>
          <Avatar resizeMode="cover" source={{uri: item.user.avatar}} />
        </User>
      </Menu>
      <Menu>
        <CustomIcon
          resizeMode="contain"
          source={require('../../assets/icons/like.png')}
        />
        <Count>{item.count.like}</Count>
      </Menu>
      <Menu>
        <CustomIcon
          resizeMode="contain"
          source={require('../../assets/icons/comment.png')}
        />
        <Count>{item.count.comment}</Count>
      </Menu>
      <Menu>
        <CustomIcon
          resizeMode="contain"
          source={require('../../assets/icons/share.png')}
        />
        <Count>{item.count.share}</Count>
      </Menu>
    </Container>
  );
};

export default SideBar;
