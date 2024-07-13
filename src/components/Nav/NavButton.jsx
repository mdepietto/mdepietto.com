import React from 'react';
import { Button } from '@mui/material';

const navButtonStyles = {
  color: 'white',
  display: 'flex',
  justifyContent: 'end',
  fontSize: '1.2vw',
  fontFamily: '"Anton", sans-serif',
  height: '1.5vw',
  position: 'relative',

  '&:hover': {
    background: 'none',
  },

  '&::before': {
    borderBottom: '2px solid white',
    borderBottomRightRadius: '3px',
    borderRight: '2px solid white',
    borderTop: '2px solid white',
    borderTopRightRadius: '3px',
    content: '""',
    height: '100%',
    right: '0',
    position: 'absolute',
    transition: 'width 0.5s ease-in-out',
    width: '33%',
  },

  '&:hover::before': {
    width: '66%',
  },
}

// add cool background thing?
const NavButton = ({ blank, href, text }) => {
  return (
    <Button
      color="inherit"
      href={href}
      target={blank && 'blank'}
      sx={navButtonStyles}
    >
      {text}
    </Button>
  );
};

export default NavButton;