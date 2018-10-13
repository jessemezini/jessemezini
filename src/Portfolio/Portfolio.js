import React, { Component } from 'react';
import styled from 'styled-components';

import Project from './Project';

import data from './data';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fafafa;
`;

const Container = styled.main`
  max-width: 1170px;
  margin: 0 auto;

  a {
    color: #000;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
`;

class PortfolioContainer extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    this.setState({ data });
  }

  render() {
    return (
      <Wrapper>
        <Container>
          <Project data={this.state.data} />
        </Container>
      </Wrapper>
    );
  }
}

export default PortfolioContainer;
