import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

import { Icon } from './styled';

import img from './bg.jpg';

const BgImage = styled.img`
  position: fixed;
  top: 0;
  left: 0;

  /* Preserve aspet ratio */
  min-width: 100%;
  min-height: 100%;
`;

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.main`
  text-align: center;
  color: #ffffff;
  font-size: 30px;
  z-index: 1;

  a {
    color: #ffffff;
    text-decoration: none;
    padding: 5px;
  }
`;

class Home extends Component {
  render() {
    return (
      <Fragment>
        <BgImage src={img} alt="" />

        <Container>
          <Content>
            <h1>
              Hello, my name is Jesse Mezini
              <br /> and I work with Web Development.
            </h1>
            <a href="https://twitter.com/jessemezini">
              <Icon>&#xf099;</Icon>
            </a>
            <a href="https://github.com/jessemezini">
              <Icon>&#xf09b;</Icon>
            </a>
            <a href="https://www.facebook.com/jessemezini">
              <Icon>&#xf308;</Icon>
            </a>
          </Content>
        </Container>
      </Fragment>
    );
  }
}

export default Home;
