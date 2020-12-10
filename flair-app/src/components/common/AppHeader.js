import React from 'react';
import {Header, Left, Body, Right, Button, Icon, Title} from 'native-base';
import styled from 'styled-components';

const Container = styled.View`
  top: 22px;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  position: absolute;
  z-index: 1;
`;

const Menu = styled.Text`
  color: #fff;
  letter-spacing: 0.8px;
  margin: 11px 12px;
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  opacity: ${props => (props.bold ? 1 : 0.8)};
  font-size: ${props => (props.bold ? '16px' : '15px')};
`;

const Separator = styled.View`
  width: 1px;
  height: 13px;
  background-color: #d8d8d8;
  opacity: 0.6;
`;

const AppHeader = () => {
  return (
    <Container>
      <Menu>Menu</Menu>
      <Separator />
      <Menu bold={true}>New</Menu>
    </Container>
  );
};

export default AppHeader;
