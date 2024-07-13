import React, { useState } from 'react';
import { Button } from '@mui/material';
import styled from 'styled-components';

const buttonStyles = {
  color: 'white',
  fontSize: '1.7vw',
  fontFamily: '"Anton", sans-serif',
  height: '3.3vw',
  marginRight: '2vw',
  position: 'relative',
  transition: 'padding-left 0.5s ease-in-out',

  '&:hover': {
    background: 'none',
    paddingLeft: '1vw',
  },

  '&::before': {
    borderBottom: '4px solid white',
    borderBottomLeftRadius: '5px',
    borderLeft: '4px solid white',
    borderTop: '4px solid white',
    borderTopLeftRadius: '5px',
    content: '""',
    height: '2.1vw',
    left: '0',
    position: 'absolute',
    transition: 'all 0.5s ease-in-out',
    width: '33%',
  },

  '&:hover::before': {
    height: '100%',
    width: '66%',
  },
}

const StyledBackground = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  height: ${({ isHovered }) => isHovered ? '100%' : '2.2vw'};
  left: 0;
  opacity: ${({ isHovered }) => isHovered ? '1' : '0'};
  position: absolute;
  transition: all 0.5s ease-in-out;
  width: ${({ isHovered }) => isHovered ? '66%' : '33%'};
  z-index: -1;
`;

const BioButton = ({ href, text }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Button
      href={href}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      sx={buttonStyles}
      target='blank'
    >
      {text}
      <StyledBackground isHovered={isHovered} />
    </Button>
  );
};

export default BioButton;