import React from 'react';
import { Button } from '@mui/material';

const navButtonStyles = {
  color: 'white',
  fontFamily: '"Anton", sans-serif',
  fontSize: '1.2vw',
  height: '2vw',
  marginLeft: '1.5vw',
  padding: '0 1vw',
  position: 'relative',

  '&:hover': {
    background: 'none',
  },

  '&::after': {
    borderLeft: '3px solid white',
    borderTopRightRadius: '5px',
    borderBottomRightRadius: '5px',
    content: '""',
    height: '1.1vw',
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

  // '&::after': {
  //   content: '""',
  //   position: 'absolute',
  //   top: '0',
  //   left: '0',
  //   height: '90%',
  //   width: '0',
  //   borderLeft: '2px solid white',
  //   transition: 'background 0.5s ease-in-out, width 0.5s ease-in-out',
  //   zIndex: -1,
  // },

  // '&:hover::after': {
  //   background: 'rgba(0, 0, 0, 0.54)',
  //   borderBottom: '2px solid white',
  //   borderTop: '2px solid white',
  //   width: '100%',
  // }
}

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