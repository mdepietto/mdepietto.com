import React from 'react';
import ContactMe from 'components/Footer/ContactMe';
import ScrollHOC from 'components/shared/ScrollHOC';
import footerBackground from 'images/backgrounds/footer-background.png';
import venn from 'images/accents/venn.png';
import spreadsheet from 'images/accents/spreadsheet.png';
import puzzle from 'images/accents/puzzle.png';
import console from 'images/accents/console.png';
import styled from 'styled-components';

const InfoWrapper = styled.div`
  background-image: url(${footerBackground});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-top-right-radius: 100px;
  border-top-left-radius: 100px;
  width: 90%;
  height: auto;
  margin: 3vw auto 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  & > div:first-of-type {
    margin-top: 4vw;
  }

  @media(max-width: 500px) {
    margin-top: 10vw;

    > div: first-of-type {
      margin-top: 10vw;
    }
  }
`;

const ComboWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;

  @media(max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
`;

const StyledH2 = styled.h2`
  text-align: center;
  flex: 1 1 50%;
  height: auto;
  max-width: 50%;
  align-self: center;
  z-index: 1;
  background-color: rgba(0, 0, 0, .7);
  padding: 2vw;
  border-radius: 10px;
  line-height: 50px;

  @media(max-width: 768px) {
    font-size: 3.5vw;
    line-height: 4vw;
  }

  @media(max-width: 500px) {
    font-size: 6vw;
    line-height: 7vw;
    max-width: 80%;
  }
`;

const StyledAccent = styled.img`
  flex: 1 1 50%;
  height: auto;
  object-fit: contain;
  display: block;
  max-width: 30%;
  z-index: 1;

  @media(max-width: 500px) {
    max-width: 80%;
  }
`;

const AccentWords = styled.span`
  color: var(--light-green);
`;

const WideLayout = () => (
  <>
    <ScrollHOC Component={ComboWrapper}>
      <StyledH2>
        This profession seems to be the only one that completes my personal Venn diagram
        of <AccentWords>interests</AccentWords>
      </StyledH2>
      <StyledAccent src={venn} alt='venn diagram of interests' />
    </ScrollHOC>

    <ScrollHOC Component={ComboWrapper}>
      <StyledAccent src={spreadsheet} alt='spreadsheet question marks' />
      <StyledH2>
        I’m a <AccentWords>Frontend Engineer</AccentWords> from New York who
        found my way into software development after a long
        <AccentWords> (spreadsheet-filled and borderline OCD) </AccentWords>
        conversation with some engineering friends about aligning my
        interests with a career.
      </StyledH2>
    </ScrollHOC>

    <ScrollHOC Component={ComboWrapper}>
      <StyledH2>
        These days, I specialize in <AccentWords>React, JavaScript, & Node </AccentWords>,
        where I get to combine my <AccentWords>detail-oriented, user-focused approach </AccentWords>
        with my love of <AccentWords>problem-solving</AccentWords>. Whether it’s
        designing intuitive interfaces or strategizing through complex challenges,
        I treat coding like solving a puzzle: <AccentWords>creative and engaging</AccentWords>.
      </StyledH2>
      <StyledAccent src={puzzle} alt='puzzle' />
    </ScrollHOC>

    <ScrollHOC Component={ComboWrapper}>
      <StyledAccent src={console} alt='game console' />
      <StyledH2>
        Outside of building software, you’ll usually find me
        <AccentWords> playing video games</AccentWords> or
        <AccentWords> working out</AccentWords>, so I'm basically a monk
        training mind and body.
      </StyledH2>
    </ScrollHOC>
  </>
);

const NarrowLayout = () => (
  <>
    <ScrollHOC Component={ComboWrapper}>
      <StyledH2>
        This profession seems to be the only one that completes my personal Venn diagram
        of <AccentWords>interests</AccentWords>
      </StyledH2>
      <StyledAccent src={venn} alt='venn diagram of interests' />
    </ScrollHOC>

    <ScrollHOC Component={ComboWrapper}>
      <StyledH2>
        I’m a <AccentWords>Frontend Engineer</AccentWords> from New York who
        found my way into software development after a long
        <AccentWords> (spreadsheet-filled and borderline OCD) </AccentWords>
        conversation with some engineering friends about aligning my
        interests with a career.
      </StyledH2>
      <StyledAccent src={spreadsheet} alt='spreadsheet question marks' />
    </ScrollHOC>

    <ScrollHOC Component={ComboWrapper}>
      <StyledH2>
        These days, I specialize in <AccentWords>React, JavaScript, & Node </AccentWords>,
        where I get to combine my <AccentWords>detail-oriented, user-focused approach </AccentWords>
        with my love of <AccentWords>problem-solving</AccentWords>. Whether it’s
        designing intuitive interfaces or strategizing through complex challenges,
        I treat coding like solving a puzzle: <AccentWords>creative and engaging</AccentWords>.
      </StyledH2>
      <StyledAccent src={puzzle} alt='puzzle' />
    </ScrollHOC>

    <ScrollHOC Component={ComboWrapper}>
      <StyledH2>
        Outside of building software, you’ll usually find me
        <AccentWords> playing video games</AccentWords> or
        <AccentWords> working out</AccentWords>, so I'm basically a monk
        training mind and body.
      </StyledH2>
      <StyledAccent src={console} alt='game console' />
    </ScrollHOC>
  </>
);

const Footer = () => (
  <div>
    <h1 id='with-border'>About Me</h1>

    <InfoWrapper>
      {
        window.innerWidth > 500 ? (
          <WideLayout />
        ) : (
          <NarrowLayout />
        )
      }
      <ContactMe />
    </InfoWrapper>
  </div>
);

export default Footer;