import React from 'react';
import styled from 'styled-components/native';
import {StatusBar} from 'react-native';
import Hero from './Hero';
import Tabs from './Tabs';
import AppHeader from '../common/AppHeader';
import api from '../../services/api';

const Container = styled.View`
  flex: 1;
  background: transparent;
`;

const Home = props => {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Container>
        {/* <AppHeader /> */}
        <Hero videos={api} {...props} />
        <Tabs {...props} />
      </Container>
    </>
  );
};

export default Home;
