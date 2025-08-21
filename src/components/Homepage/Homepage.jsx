import React from 'react';
import homePage from 'videos/homepage.mov';
import LinkButton from 'components/shared/LinkButton';
import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: center;
  position: relative;

  > * {
    animation: slideIn 0.5s forwards;
    transform: translateY(-100%);
  }

  @keyframes slideIn {
    to {
      transform: translateY(0);
    }
  }
`;

const StyledVideo = styled.video`
  border-bottom-right-radius: 100px;
  border-bottom-left-radius: 100px;
  width: 90%;
  height: auto;
`;

const InfoWrapper = styled.div`
  flex-direction: column;
  padding-left: 8vw;
  position: absolute;
  display: flex;
  justify-content: center;
  top: 0;
  height: 100%;
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