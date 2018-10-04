import React from 'react';
import styled from 'styled-components';

import Sidebar from './Sidebar';
import Content from './Content';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #dcdde1;
`;

const Container = styled.main`
  max-width: 1170px;
  margin: 0 auto;
  background-color: #ffffff;
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-column-gap: 25px;

  p {
    line-height: 1.5;
  }
`;

const Resume = () => (
  <Wrapper>
    <Container>
      <Sidebar />
      <Content />
    </Container>
  </Wrapper>
);

export default Resume;
