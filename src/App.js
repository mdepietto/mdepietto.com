import React from 'react';
import Nav from 'components/Nav/Nav';
import HomePage from 'components/Homepage/Homepage';
import Body from 'components/Body/Body';
import Footer from 'components/Footer/Footer';
import styled from 'styled-components';
import ScrollHOC from 'components/shared/ScrollHOC';
import background from 'images/backgrounds/striped-background.jpg';
import fillBlackZ from 'images/accents/fill-black-z.png';
import fillBlack from 'images/accents/fill-black.png';

const Wrapper = styled.div`
  background: url(${background});
  overflow: hidden;
`;

const BackgroundWrapper = styled.div`
  position: relative;
`;

const StyledFillBlackZ = styled.img`
  position: absolute;
  transform: scaleX(-1);
  inset: 0;
  width: 100%;
  objectFit: cover;
  opacity: 90%;
  top: 100px;
`;

const StyledFillBlack = styled.img`
  position: absolute;
  width: 38%;
  transform: rotate(5deg);
  objectFit: cover;
  opacity: 90%;
  top: -13vw;
  right: 0;
`;

const App = () => (
  <Wrapper>
    <Nav />

    <HomePage />

    <BackgroundWrapper>
      <StyledFillBlackZ src={fillBlackZ} alt='black zig zag accent' />
      <ScrollHOC Component={Body} />
    </BackgroundWrapper>

    <BackgroundWrapper>

      <StyledFillBlack src={fillBlack} alt='black stripe accent' />
      <ScrollHOC Component={Footer} />
    </BackgroundWrapper>
  </Wrapper>
);

export default App;