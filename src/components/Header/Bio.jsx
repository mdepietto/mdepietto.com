import React from 'react';
import LinkButton from 'components/shared/LinkButton';
import styled from 'styled-components';

const BioWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 8vw;
  transform: translateX(-100%);

  div {
    margin-top: 2vw;
    width: 100%;
  }

  animation: slideIn 0.5s forwards;
  @keyframes slideIn {
    to {
      transform: translateX(0);
    }
  }
`;

const Bio = () => (
  <BioWrapper id='bio'>
    <h1>Welcome to my site</h1>
    <div>
      <LinkButton href='resume-dev - overleaf (May 2024).pdf' text='Resume' />
      <LinkButton href='https://github.com/mdepietto' text='GitHub' />
    </div>
  </BioWrapper>
)

export default Bio;