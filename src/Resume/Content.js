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

  ul li {
    margin: 10px auto;
  }

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
      Web developer with over 5 years of experience building websites. I worked
      as a freelancer for several clients in my region. I'm always trying to
      improve and keep up with new technologies to build better and faster
      websites.
    </p>

    <Title>Experience</Title>

    <Info>
      <p>
        2013-01 <br />
        Present
      </p>
      <div>
        <h3>Web Developer</h3>
        <p>
          <i>Freelancer</i>
        </p>
        <ul>
          <li>
            Meet with clients to collect requirements, design sites and outline
            schedules.
          </li>
          <li>Design and develop websites with html5 and responsive design.</li>
          <li>
            Website optimization, using tools like lighthouse, chrome audits,
            and webpagetest.org.
          </li>
        </ul>
      </div>
    </Info>

    <Info>
      <p>
        2014-01 <br />
        2018-04
      </p>
      <div>
        <h3>Web Developer</h3>
        <p>Gazeta de Iracemápolis (Part-time)</p>
        <p>
          <i>
            Gazeta de Iracemápolis is the leading newspaper media company from
            Iracemápolis/São Paulo
          </i>
        </p>
        <ul>
          <li>Design, develop and maintenance of websites.</li>
          <li>Web content management.</li>
          <li>Social media content management.</li>
          <li>
            Experience in layout, artwork, and diagramming newspaper, and
            magazine.
          </li>
        </ul>
      </div>
    </Info>

    <Title>Education</Title>

    <Info>
      <p>
        2013 <br />
        2016
      </p>
      <div>
        <h3>
          Analysis and Systems Development, Integrated College Einstein de
          Limeira
        </h3>
        <ul>
          <li>
            Coursework in programming, data structures, and computer
            architecture.
          </li>
        </ul>
      </div>
    </Info>

    <Title>Projects</Title>

    <Info>
      <p>2015</p>
      <div>
        <h3>App Development</h3>
        <p>Ônibus Iracemápolis</p>
        <p>
          <i>
            Free app for users of public transportation in Iracemápolis / São
            Paulo.
          </i>
        </p>

        <ul>
          <li>
            Initially built with ionic and angular v1, now uses react native.
          </li>
          <li>
            With more than 2.4k downloads and 4.7 average rating on google play.
          </li>
        </ul>
      </div>
    </Info>
  </Article>
);

export default Content;
