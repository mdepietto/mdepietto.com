import React from 'react';
import { Button } from '@mui/material';

const buttonStyles = {
  color: 'white',
  fontSize: '1.7vw',
  fontFamily: '"Anton", sans-serif',
  marginRight: '2vw',
  position: 'relative',
  // textShadow: '-1px 1px 1px black, -2px 2px 1px black, -3px 3px 1px black, -4px 4px 1px black, -5px 5px 1px black, -6px 6px 1px black, -7px 6px 1px black',
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

  '&::after': {
    background: 'linear-gradient(to right, rgba(0, 0, 0, .6), rgba(0, 0, 0, 0))',
    content: '""',
    height: '2.1vw',
    left: '0',
    position: 'absolute',
    transition: 'all 0.5s ease-in-out',
    width: '0',
    zIndex: '-1',
  },

  '&:hover::after': {
    height: '100%',
    width: '66%',
  },
}

const BioButton = ({ href, text }) => {
  return (
    <Button
      href={href}
      sx={buttonStyles}
      target='blank'
    >
      {text}
    </Button>
  );
};

export default BioButton;