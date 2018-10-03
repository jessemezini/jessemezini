import React, { Component } from 'react';
import styled, { injectGlobal } from 'styled-components';

import img from './bg.jpg';

injectGlobal`
  html {
    background: url(${img}) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
`;

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  text-align: center;
  color: #ffffff;

  font-family: 'Open Sans Condensed', sans-serif;
  font-size: 30px;

  a {
    color: #ffffff;
    text-decoration: none;
    padding: 5px;
  }
`;

const Icon = styled.i`
  font-family: 'fontello';
  font-style: normal;
  font-weight: normal;
  speak: none;
  display: inline-block;
  text-decoration: inherit;
  width: 1em;
  margin-right: 0.2em;
  text-align: center;
  font-variant: normal;
  text-transform: none;
  line-height: 1em;
  margin-left: 0.2em;
  font-size: 125%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-shadow: 1px 1px 1px rgba(127, 127, 127, 0.3);
`;

class Home extends Component {
  render() {
    return (
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
    );
  }
}

export default Home;
