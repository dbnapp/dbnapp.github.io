import React from 'react';
import styled from 'styled-components';

const Shrink = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.accentSecondary};
`;

const AboutSection = styled.section`
  padding: 0 10%;
`;

const H1 = styled.h1`
  margin-block-start: 1em;
`;
const H2 = styled.h2`
  margin-block-start: 2em;
`;

const AboutPage = () => (
  <AboutSection>
    <H1>So here&apos;s a little about me</H1>
    <p>
      <Shrink>&ldquo;about me&rdquo;.</Shrink>
    </p>

    <H2>Now that that&apos;s out of the way, let me introduce myself</H2>

    <p>
      I&apos;m a New Jersey based web developer. My preferred languages are the usual affair:
      JavaScript, CSS, HTML, English. I have experience with React and Redux as well as various
      other React libraries.
    </p>

    <p>
      I also have experience with other frameworks and libraries like jQuery and KnockoutJS, and how
      to integrate them into existing code bases. I&apos;m no stranger to writing unit tests with
      Mocha or configuring bundlers like webpack as well.
    </p>

    <H2>When I&apos;m not coding</H2>

    <p>
      I spend my free time playing various video games and sometimes the occasional board game with
      friends. Lately I&apos;ve been playing Civilization and various fighting games like Dragonball
      FighterZ and Tekken 7.
    </p>
  </AboutSection>
);

AboutPage.propTypes = {};

export default AboutPage;
