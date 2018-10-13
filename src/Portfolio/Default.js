import React from 'react';
import styled from 'styled-components';

import { Icon } from '../styled';

import jessemeziniPortfolio from './images/jessemezini-portfolio.jpg';
import phone from './images/phone.png';

const Container = styled.article`
  display: grid;
  grid-template-columns: 30px 1fr 30px 1fr 30px;

  @media (min-width: 992px) {
    grid-template-columns: 100px 1fr 60px 1fr 100px;
    grid-template-rows: 50px auto 20px auto 50px;
  }
`;

const Image = styled.img`
  grid-column: 2 / 5;
  grid-row: 2 / 3;

  box-shadow: 0 10px 6px -6px #777;
`;

const Info = styled.div`
  grid-column: 2 / 5;

  @media (min-width: 576px) {
    grid-column: 2 / 3;
    grid-row: 4 / 5;
  }
`;

const Phone = styled.img`
  grid-column: 2 / 5;
  grid-row: 2 / 3;
  justify-self: center;
  align-self: center;

  @media (min-width: 576px) {
    grid-column: 4 / 5;
    grid-row: 2 / 5;
  }
`;

const Default = () => (
  <Container>
    <Image src={jessemeziniPortfolio} alt="Age of Empires 2 - Tech Tree" />
    <Info>
      <h3>
        <a href="https://pizzadacasairacemapolis.com.br">
          <Icon>&#xe800;</Icon> pizzadacasairacemapolis.com.br
        </a>
      </h3>
      <p>
        Age of Empires II is a real-time strategy video game. The app was
        developed to help people that don't have the game installed and is
        watching a live stream, and want to check the civilizations bonuses
      </p>

      <h3>
        <Icon>&#xf121;</Icon> Stack
      </h3>
      <p>
        ReactJS, flow, styled-components, code-splitting, css flexbox, sprite
        image, border-image, progressive web app, continuous integration with
        Bitbucket and Netlify.
      </p>
    </Info>

    <Phone src={phone} alt="jessemezini.com mobile version" />
  </Container>
);

export default Default;
