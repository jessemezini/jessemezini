import React, { Component } from 'react';
import styled from 'styled-components';

const HomeWrapper = styled.div`
  display: grid;
`;

class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <h1>Hello, my name is Jesse Mezini and I work with Web Development.</h1>
        <div>
          <a href="">
            <i class="demo-icon icon-twitter">&#xf099;</i>
          </a>
          <a href="">
            <i class="demo-icon icon-github-circled">&#xf09b;</i>
          </a>
          <a href="">
            <i class="demo-icon icon-facebook-squared">&#xf308;</i>
          </a>
        </div>
      </HomeWrapper>
    );
  }
}

export default Home;
