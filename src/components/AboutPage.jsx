import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  opacity: 0;
  padding: 0 10%;
  transition: all 1s;

  &.appear {
    opacity: 0;
    transform: translateY(10%);
  }

  &.enter {
    opacity: 0;
    transform: translateY(10%);
  }

  &.enter-done {
    opacity: 1;
    transform: translateY(0%);
  }

  &.exit {
    opacity: 0;
    transform: translateY(10%);
  }

  &.exit-done {
    opacity: 0;
    transform: translateY(10%);
  }
`;

const Shrink = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.accentSecondary};
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

AboutPage.defaultProps = {};

export default AboutPage;
