import React from 'react';
import Sources from 'components/Header/Sources';
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
      <Sources />
    </BioWrapper>
  )
}

export default Bio;