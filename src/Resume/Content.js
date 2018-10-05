import React from 'react';
import styled from 'styled-components';

const Article = styled.article`
  padding: 0 20px;
  margin-top: 25px;
  color: #333;

  @media (min-width: 576px) {
    padding: 0 30px;
  }
`;

const Title = styled.p`
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  font-size: 19px;
  font-weight: 700;
  color: #2a3b99;
  padding: 5px;
  margin-top: 50px;
`;

const Info = styled.div`
  display: grid;
  grid-template-columns: auto;

  @media (min-width: 576px) {
    grid-template-columns: 100px auto;
  }

  @media (min-width: 992px) {
    grid-template-columns: 150px auto;
   }
`;

const Content = () => (
  <Article>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, aperiam
      provident molestiae quaerat qui sapiente, consequuntur quos architecto
      magnam placeat minima maxime illo nisi perferendis vel sunt, at quam!
      Eligendi.
    </p>

    <Title>Experience</Title>

    <Info>
      <p>
        2013-01 <br />
        Present
      </p>
      <div>
        <h3>Web Design / Development</h3>
        <p>
          <i>Freelancer</i>
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
          facilis maiores aliquid dolorem repudiandae accusamus deserunt illo
          quasi fuga quae suscipit accusantium odit, fugiat sit pariatur nemo
          asperiores? Accusantium, hic?
        </p>

        <ul>
          <li>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi nemo
            a, veniam recusandae earum sed voluptatem quasi laudantium, aut
            consequuntur perferendis, tempora similique. Voluptates
            voluptatibus, iste assumenda tenetur repellat unde.
          </li>
        </ul>
      </div>
    </Info>

    <Info>
      <p>
        2013-01 <br />
        Present
      </p>
      <div>
        <h3>Web Design / Development</h3>
        <p>
          <i>Freelancer</i>
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
          facilis maiores aliquid dolorem repudiandae accusamus deserunt illo
          quasi fuga quae suscipit accusantium odit, fugiat sit pariatur nemo
          asperiores? Accusantium, hic?
        </p>

        <ul>
          <li>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi nemo
            a, veniam recusandae earum sed voluptatem quasi laudantium, aut
            consequuntur perferendis, tempora similique. Voluptates
            voluptatibus, iste assumenda tenetur repellat unde.
          </li>
        </ul>
      </div>
    </Info>

    <Info>
      <p>
        2013-01 <br />
        Present
      </p>
      <div>
        <h3>Web Design / Development</h3>
        <p>
          <i>Freelancer</i>
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
          facilis maiores aliquid dolorem repudiandae accusamus deserunt illo
          quasi fuga quae suscipit accusantium odit, fugiat sit pariatur nemo
          asperiores? Accusantium, hic?
        </p>

        <ul>
          <li>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi nemo
            a, veniam recusandae earum sed voluptatem quasi laudantium, aut
            consequuntur perferendis, tempora similique. Voluptates
            voluptatibus, iste assumenda tenetur repellat unde.
          </li>
        </ul>
      </div>
    </Info>

    <Title>Education</Title>

    <Info>
      <p>
        2013-01 <br />
        Present
      </p>
      <div>
        <h3>Web Design / Development</h3>
        <p>
          <i>Freelancer</i>
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
          facilis maiores aliquid dolorem repudiandae accusamus deserunt illo
          quasi fuga quae suscipit accusantium odit, fugiat sit pariatur nemo
          asperiores? Accusantium, hic?
        </p>

        <ul>
          <li>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi nemo
            a, veniam recusandae earum sed voluptatem quasi laudantium, aut
            consequuntur perferendis, tempora similique. Voluptates
            voluptatibus, iste assumenda tenetur repellat unde.
          </li>
        </ul>
      </div>
    </Info>

    <Title>Projects</Title>

    <Info>
      <p>
        2013-01 <br />
        Present
      </p>
      <div>
        <h3>Web Design / Development</h3>
        <p>
          <i>Freelancer</i>
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
          facilis maiores aliquid dolorem repudiandae accusamus deserunt illo
          quasi fuga quae suscipit accusantium odit, fugiat sit pariatur nemo
          asperiores? Accusantium, hic?
        </p>

        <ul>
          <li>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi nemo
            a, veniam recusandae earum sed voluptatem quasi laudantium, aut
            consequuntur perferendis, tempora similique. Voluptates
            voluptatibus, iste assumenda tenetur repellat unde.
          </li>
        </ul>
      </div>
    </Info>
  </Article>
);

export default Content;
