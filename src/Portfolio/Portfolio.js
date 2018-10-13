import React from 'react';
import styled from 'styled-components';

import Spotlight from './Spotlight';
import Default from './Default';

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
`;

const Portfolio = () => (
  <Wrapper>
    <Container>
      <Spotlight />
      <Default />
      <Default />
    </Container>
  </Wrapper>
);

export default Portfolio;
