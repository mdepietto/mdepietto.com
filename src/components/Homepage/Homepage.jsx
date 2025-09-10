import React from 'react';
import homePage from 'videos/homepage.mov';
import LinkButton from 'components/shared/LinkButton';
import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: center;
  position: relative;

  @media(max-width: 768px) {
    display: flex;
    justify-content: center;
    height: 100vh;
    overflow: hidden;
  }
`;

// TODO: mess around with the height of the Wrapper

const StyledVideo = styled.video`
  border-bottom-right-radius: 100px;
  border-bottom-left-radius: 100px;
  width: 90%;
  
  @media(max-width: 768px) {
    border-radius: 0;
    display: block;
    object-fill: cover;
    transform: scale(3.9) translate(-15vw, -3vw);
  }
`;

const InfoWrapper = styled.div`
  flex-direction: column;
  padding-left: 8vw;
  position: absolute;
  display: flex;
  height: 100%;
  justify-content: center;
  bottom: 0;
  width: 25%;

  @media(max-width: 1280px) {
    width: 29%;
  }

  @media(max-width: 1024px) {
    width: 40%;
  }

  @media(max-width: 768px) {
    padding-left: 0;
    width: 75%;
    bottom: -38vw;
  }
`;

const ButtonsWrapper = styled.div`
  margin-top: 2vw;
`;

const HomePage = () => (
  <Wrapper>
    <StyledVideo
      autoPlay
      loop
      src={homePage}
      alt='city-scape-background'
      type='video/mov'
    />

    <InfoWrapper>
      <h1>Welcome to my site</h1>
      <ButtonsWrapper>
        <LinkButton href='resume-dev.pdf' text='Resume' />
        <LinkButton href='https://github.com/mdepietto' text='GitHub' />
      </ButtonsWrapper>
    </InfoWrapper>
  </Wrapper>
);

export default HomePage;