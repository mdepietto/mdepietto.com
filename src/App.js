import React, { useEffect } from 'react';
import Nav from 'components/Nav/Nav';
import NavMenu from 'components/Nav/NavMenu';
import HomePage from 'components/Homepage/Homepage';
import Body from 'components/Body/Body';
import Footer from 'components/Footer/Footer';
import styled from 'styled-components';
import background from 'images/backgrounds/striped-background.jpg';
import fillBlackZ from 'images/accents/fill-black-z.png';
import fillBlack from 'images/accents/fill-black.png';

const Wrapper = styled.div`
  background: url(${background});
  overflow: hidden;
  position: relative;
`;

const BackgroundWrapper = styled.div`
  position: relative;
  width: 100%;
  height: auto;
`;

const StyledFillBlackZ = styled.img`
  position: absolute;
  transform: scaleX(-1);
  inset: 0;
  width: 100%;
  objectFit: cover;
  opacity: 90%;
  top: 100px;
  z-index: 0;

  @media(max-width: 768px) {
    height: 75%;
  }

  @media(max-width: 500px) {
    top: 25vw;
    height: 60%;
  }
`;

const StyledFillBlack = styled.img`
  position: absolute;
  width: 38%;
  transform: rotate(5deg);
  objectFit: cover;
  opacity: 90%;
  bottom: -40vw;
  right: 0;

  @media(max-width: 768px) {
    width: 70%;
    bottom: -45vw;
  }

  @media(max-width: 500px) {
    width: 130%;
    bottom: -50vw;
  }
`;

const App = () => {
  useEffect(() => {
    const actual = window.innerWidth;
    const screen = window.screen.width;

    if (actual > 900 && screen < 600) {
      alert("Looks like Desktop mode is enabled in your browser. Disable for full mobile experience 🫡");
      // Optionally show a UI hint to disable desktop mode
    }
  }, []);

  return (
    <Wrapper>
      {
        window.innerWidth > 768 ? (
          <Nav />
        ) : (
          <NavMenu />
        )
      }

      <HomePage />

      <BackgroundWrapper>
        <StyledFillBlackZ src={fillBlackZ} alt='black zig zag accent' />
        <StyledFillBlack src={fillBlack} alt='black stripe accent' />
        <Body />
      </BackgroundWrapper>

      <Footer />
    </Wrapper>
  )
};

export default App;