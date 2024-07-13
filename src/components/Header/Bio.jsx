import React from 'react';
import BioButton from 'components/Header/BioButton';
import styled from 'styled-components';

const BioWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transform: translateX(-100%);

  animation: slideIn 0.5s forwards;
  @keyframes slideIn {
    to {
      transform: translateX(0);
    }
  }
`;

const InfoWrapper = styled.div`
  align-items: start;
  margin-bottom: 2vw;
`;

const BioButtonsWrapper = styled.div`
  align-items: start;
  width: 100%;
`;

const Bio = () => {
  return (
    <BioWrapper id='bio'>
      <InfoWrapper>
        <h1>
          I'm Mike DePietto
        </h1>
        <h1>
          A Developer
        </h1>
        <h1>
          Welcome to my site
        </h1>
      </InfoWrapper>
      <BioButtonsWrapper>
        <BioButton href='resume-dev - overleaf (May 2024).pdf' text='Resume' />
        <BioButton href='https://github.com/mdepietto' text='GitHub' />
      </BioButtonsWrapper>
    </BioWrapper>
  )
}

export default Bio;