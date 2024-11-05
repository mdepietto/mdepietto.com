import React from 'react';
import { Button } from '@mui/material';
import { baseColors } from 'data/styles';

export const buttonStyles = {
  color: 'white',
  fontSize: '1.7vw',
  fontFamily: '"Anton", sans-serif',
  marginRight: '2vw',
  paddingLeft: '.8vw',
  position: 'relative',
  textShadow: '-1px 1px 1px black, -2px 2px 1px black, -3px 3px 1px black, -4px 4px 1px black, -5px 5px 1px black, -6px 6px 1px black, -7px 6px 1px black',
  '-webkit-text-stroke': '1px black',

  '&:hover': {
    background: 'none',
    color: baseColors.lightGreen,
  },

  '&::before': {
    borderBottom: '4px solid white',
    borderBottomLeftRadius: '5px',
    borderLeft: '4px solid white',
    borderTop: '4px solid white',
    borderTopLeftRadius: '5px',
    content: '""',
    height: '2.5vw',
    left: '0',
    position: 'absolute',
    transition: 'all 0.5s ease-in-out',
    width: '33%',
  },

  '&:hover::before': {
    width: '66%',
  },
}

const LinkButton = ({ href, text }) => {
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

export default LinkButton;