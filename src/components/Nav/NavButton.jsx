import React from 'react';
import { Button } from '@mui/material';

const buttonStyles = {
  display: 'flex',
  justifyContent: 'end',
  fontSize: '1.2vw',
  fontFamily: '"Anton", sans-serif',
  paddingRight: '.4vw',
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
    height: '1.6vw',
    marginBottom: '2px',
    right: '0',
    position: 'absolute',
    transition: 'width 0.5s ease-in-out',
    width: '33%',
  },

  '&:hover::before': {
    width: '66%',
  },

  '&::after': {
    // background: 'linear-gradient(to left, rgba(0, 0, 0, .5), rgba(0, 0, 0, 0))',
    content: '""',
    height: '1.6vw',
    right: '0',
    position: 'absolute',
    transition: 'all 0.5s ease-in-out',
    width: '0',
    zIndex: '-1',
  },

  '&:hover::after': {
    width: '66%',
  },
}

const NavButton = ({ blank, href, text }) => {
  return (
    <Button
      color="inherit"
      href={href}
      target={blank ? 'blank' : null}
      sx={buttonStyles}
    >
      {text}
    </Button>
  );
};

export default NavButton;