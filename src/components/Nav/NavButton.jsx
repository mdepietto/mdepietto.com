import React from 'react';
import { Button } from '@mui/material';

const navButtonStyles = {
  color: 'white',
  fontFamily: '"Anton", sans-serif',
  fontSize: '1.2vw',
  marginLeft: '1vw',

  '&:hover': {
    background: 'rgba(0, 0, 0, 0.5)',
  },

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