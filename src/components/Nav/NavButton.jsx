import React from 'react';
import { Button } from '@mui/material';

const buttonStyles = {
  display: 'flex',
  justifyContent: 'end',
  fontSize: '1.2vw',
  fontFamily: '"Anton", sans-serif',
  paddingRight: '.4vw',
  position: 'relative',
  textShadow: '-1px 1px 1px black, -2px 2px 1px black, -3px 3px 1px black, -4px 4px 1px black',

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