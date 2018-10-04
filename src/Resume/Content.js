import React from 'react';
import styled from 'styled-components';

const Article = styled.article`
  padding-right: 20px;
  margin-top: 40px;
  color: #333;
`;

const Content = () => (
  <Article>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, aperiam
      provident molestiae quaerat qui sapiente, consequuntur quos architecto
      magnam placeat minima maxime illo nisi perferendis vel sunt, at quam!
      Eligendi.
    </p>
  </Article>
);

export default Content;
