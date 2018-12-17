import React from 'react';
import styled from 'styled-components';

import Sidebar from './Sidebar';
import Content from './Content';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #dcdde1;
`;

const Container = styled.main`
  max-width: 1100px;
  margin: 0 auto;
  background-color: #ffffff;
  display: grid;

  p {
    line-height: 1.5;
  }

  @media (min-width: 576px) {
    grid-template-columns: 230px 1fr;
  }
  @media (min-width: 992px) {
    grid-template-columns: 300px 1fr;
  }

  @media print {
    grid-template-columns: 230px 1fr;

    @page {
      margin: 0.3cm;
    }
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
