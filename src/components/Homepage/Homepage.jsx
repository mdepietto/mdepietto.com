import React from 'react';
import headerImage from 'images/city-landscape-border.jpg';
import LinkButton from 'components/shared/LinkButton';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-image: url(${headerImage});
  background-repeat: no-repeat;
  background-size: 100vw 100vh;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  padding-left: 8vw;

  > * {
    animation: slideIn 0.5s forwards;
    transform: translateX(-100%);
  }

  > div {
    margin-top: 2vw;
  }

  @keyframes slideIn {
    to {
      transform: translateX(0);
    }
  }

  @media screen and (max-width: 1007px) {
    flex-direction: column;
  }
`;

const HomePage = () => {
  return (
    <Wrapper id='bio'>
      <h1>Welcome to my site</h1>
      <div>
        <LinkButton href='resume-dev - overleaf (May 2024).pdf' text='Resume' />
        <LinkButton href='https://github.com/mdepietto' text='GitHub' />
      </div>
    </Wrapper>
  )
}

export default HomePage;