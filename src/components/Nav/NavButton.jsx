import React from 'react';
import { Button } from '@mui/material';
import { buttonStyles } from 'components/shared/LinkButton';

const navButtonStyles = {
  ...buttonStyles,
  display: 'flex',
  justifyContent: 'end',
  fontSize: '1.2vw',
  marginRight: '0',
  paddingRight: '.4vw',
  textShadow: '-1px 1px 1px black, -2px 2px 1px black, -3px 3px 1px black, -4px 4px 1px black',
  '-webkit-text-stroke': '.5px black',

  '&::before': {
    borderBottom: '2px solid white',
    borderBottomRightRadius: '3px',
    borderRight: '2px solid white',
    borderTop: '2px solid white',
    borderTopRightRadius: '3px',
    content: '""',
    height: '1.7vw',
    right: '0',
    position: 'absolute',
    transition: 'all 0.5s ease-in-out',
    width: '33%',
  },
}

const NavButton = ({ blank, href, text }) => (
  <Button
    color="inherit"
    href={href}
    target={blank ? 'blank' : null}
    sx={navButtonStyles}
  >
    {text}
  </Button>
);

export default NavButton;