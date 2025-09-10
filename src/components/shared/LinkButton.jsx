import React from 'react';
import { Button } from '@mui/material';

export const buttonStyles = {
  color: 'white',
  fontSize: '2rem',
  fontFamily: '"Anton", sans-serif',
  marginRight: '2rem',
  paddingLeft: '.8rem',
  position: 'relative',
  textShadow: '-1px 1px 1px black, -2px 2px 1px black, -3px 3px 1px black, -4px 4px 1px black, -5px 5px 1px black, -6px 6px 1px black, -7px 6px 1px black',
  '-webkit-text-stroke': '1px black',

  '&:hover': {
    background: 'none',
    color: 'var(--light-green)',
  },

  '&::before': {
    borderBottomLeftRadius: '5px',
    borderTopLeftRadius: '5px',
    borderBottom: '3px solid white',
    borderLeft: '3px solid white',
    borderTop: '3px solid white',
    content: '""',
    height: '2.5rem',
    left: '0',
    position: 'absolute',
    transition: 'all 0.5s ease-in-out',
    width: '33%',
  },

  '&:hover::before': {
    width: '66%',
  },
}

const LinkButton = ({ href, text }) => (
  <Button
    href={href}
    sx={buttonStyles}
    target='blank'
  >
    {text}
  </Button>
);

export default LinkButton;