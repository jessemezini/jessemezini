import React from 'react';
import styled from 'styled-components';

const Container = styled.aside`
  background-color: #3f51b5;
  color: #ffffff;

  h1 {
    font-size: 50px;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 30px;
    font-weight: 300;
    margin-top: 0;
  }

  h1,
  h3,
  p {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

const AsideHeader = styled.p`
  font-size: 19px;
  font-weight: 700;
  background-color: #2a3b99;
  padding: 7px 20px;
`;

const AsideInfo = styled.p`
  font-weight: 700;

  span {
    font-weight: 300;
  }

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

const Sidebar = () => (
  <Container>
    <h1>Jesse Mezini</h1>
    <h3>Web Developer</h3>

    <AsideHeader>Personal Info</AsideHeader>
    <AsideInfo>
      Address <br />
      <span>
        Salvador de Oliveira, 111 <br /> Iracemápolis / São Paulo
      </span>
    </AsideInfo>

    <AsideInfo>
      Phone <br />
      <span>+55 19 98260-4543</span>
    </AsideInfo>

    <AsideInfo>
      Email <br />
      <span>
        jessemezini
        <code>@</code>
        gmail.com
      </span>
    </AsideInfo>

    <AsideInfo>
      Github <br />
      <span>
        <a href="https://github.com/jessemezini">
          <Icon>&#xf09b;</Icon>
          github.com/jessemezini
        </a>
      </span>
    </AsideInfo>

    <AsideHeader>Skills</AsideHeader>
    <AsideInfo>
      <span>HTML</span>
    </AsideInfo>

    <AsideInfo>
      <span>CSS</span>
    </AsideInfo>

    <AsideInfo>
      <span>Javascript</span>
    </AsideInfo>

    <AsideInfo>
      <span>Wordpress</span>
    </AsideInfo>

    <AsideInfo>
      <span>Photoshop</span>
    </AsideInfo>

    <AsideInfo>
      <span>Git</span>
    </AsideInfo>

    <AsideHeader>Language</AsideHeader>
    <AsideInfo>
      Português <br />
      <span>Native</span>
    </AsideInfo>

    <AsideInfo>
      English <br />
      <span>Fluent</span>
    </AsideInfo>

    <AsideHeader>Courses</AsideHeader>
    <AsideInfo>
      <span>ES6 es6.io</span>
    </AsideInfo>

    <AsideInfo>
      <span>React for Beginners reactforbeginners.com</span>
    </AsideInfo>

    <AsideInfo>
      <span>Modern React with Redux udemy.com/react-redux</span>
    </AsideInfo>

    <AsideInfo>
      <span>Advanced React and Redux udemy.com/react-redux-tutorial</span>
    </AsideInfo>

    <AsideInfo>
      <span>
        React Testing with Jest and Enzyme
        udemy.com/react-testing-with-jest-and-enzyme/
      </span>
    </AsideInfo>

    <AsideInfo>
      <span>
        Others from codecademy.com, egghead.io, coursera.org and more.
      </span>
    </AsideInfo>
  </Container>
);

export default Sidebar;
