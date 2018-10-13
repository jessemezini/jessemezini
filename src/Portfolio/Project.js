import React from 'react';
import styled from 'styled-components';

import { Icon } from '../styled';

const Container = styled.article`
  display: grid;
  grid-template-columns: 30px 1fr 30px 1fr 30px;

  @media (min-width: 992px) {
    grid-template-columns: 100px 1fr 60px 1fr 100px;
    grid-template-rows: 50px auto 20px auto auto 50px;
  }
`;

const Image = styled.img`
  grid-column: ${props => (props.isHighlight ? 'span 5' : '2 / 5')};
  grid-row: ${props => (props.isHighlight ? '1 / 3' : '1 / 3')};

  box-shadow: 0 10px 6px -6px #777;
`;

const Info = styled.div`
  grid-column: 2 / 5;

  @media (min-width: 576px) {
    grid-column: ${props => (props.isHighlight ? '2 / 3' : '2 / 3')};
    grid-row: ${props => (props.isHighlight ? '4 / 5' : '4 / 5')};
  }
`;

const Stack = styled.div`
  grid-column: 2 / 5;

  @media (min-width: 576px) {
    grid-column: ${props => (props.isHighlight ? '4 / 5' : '2 / 3')};
    grid-row: ${props => (props.isHighlight ? '4 / 5' : '5 / 6')};
  }
`;

const Phone = styled.img`
  grid-column: 2 / 5;
  grid-row: 2 / 3;
  justify-self: center;
  align-self: center;

  @media (min-width: 576px) {
    grid-column: 4 / 5;
    grid-row: 2 / 6;
  }
`;

const Default = props => (
  <div>
    {props.data.map(item => {
      return (
        <Container key={item.name}>
          <Image
            src={item.mainImg}
            alt={item.mainImgAlt}
            isHighlight={item.isHighlightProject}
          />
          <Info isHighlight={item.isHighlightProject}>
            <h3>
              <Icon>&#xe800;</Icon>
              <a href={item.projectUrl}>{item.projectUrl}</a>
            </h3>
            <p>{item.projectInfo}</p>
          </Info>
          <Stack isHighlight={item.isHighlightProject}>
            <h3>
              <Icon>&#xf121;</Icon> Stack
            </h3>
            <p>{item.projectStackInfo}</p>
          </Stack>
          {item.mobileImg ? (
            <Phone src={item.mobileImg} alt={item.mobileImgAlt} />
          ) : null}
        </Container>
      );
    })}
  </div>
);

export default Default;
