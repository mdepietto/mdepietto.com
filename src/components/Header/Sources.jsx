import React from 'react';
import { Button } from '@mui/material';
import styled from 'styled-components';

const SourcesWrapper = styled.div`
  display: flex;
  justify-content: start;
  width: 100%;
`;

const buttonStyles = {
  color: 'white',
  fontSize: '1.7vw',
  fontFamily: '"Anton", sans-serif',
  height: '3.3vw',
  marginRight: '2vw',
  padding: '0 1.7vw',
  position: 'relative',

  '&:hover': {
    background: 'none',
  },

  '&::after': {
    borderLeft: '3px solid white',
    borderTopRightRadius: '5px',
    borderBottomRightRadius: '5px',
    content: '""',
    height: '2.2vw',
    left: '0',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    transition: 'background 0.5s ease-in-out, height 0.5s ease-in-out, width 0.5s ease-in-out',
    width: '0',
    zIndex: -1,
  },

  '&:hover::after': {
    background: 'rgba(0, 0, 0, 0.5)',
    height: '100%',
    width: '100%',
  }
}

const Sources = () => {
  return (
    <SourcesWrapper>
      <Button
        href='resume-dev - overleaf (May 2024).pdf'
        sx={buttonStyles}
        target='blank'
      >
        Resume
      </Button>
      <Button
        href='https://github.com/mdepietto'
        sx={buttonStyles}
        target='blank'
      >
        GitHub
      </Button>
    </SourcesWrapper>
  );
};

export default Sources;