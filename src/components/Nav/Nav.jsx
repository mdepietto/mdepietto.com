import React from 'react';
import NavButton from 'components/Nav/NavButton';
import { AppBar, Toolbar, Typography } from '@mui/material';
import styled from 'styled-components';

const appBarStyles = {
  background: 'linear-gradient(to bottom, rgba(25, 32, 34, .6), 20%, rgba(0, 0, 0, 0))',
  backgroundColor: 'rgba(0, 0, 0, 0)',
  boxShadow: '0',
  transform: 'translateY(-100%)',

  animation: 'slideIn 0.5s forwards',
  '@keyframes slideIn': {
    'to': {
      transform: 'translateY(0)',
    }
  }
}

const typographyStyles = {
  flexGrow: 1,
  fontFamily: '"Anton", sans-serif',
  fontSize: '3.5rem',
  textShadow: '-1px 1px 1px black, -2px 2px 1px black, -3px 3px 1px black, -4px 4px 1px black, -5px 5px 1px black, -6px 6px 1px black, -7px 6px 1px black',
  '-webkit-text-stroke': '1px black',
}

const NavButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Nav = () => (
  <AppBar color='inherit' sx={appBarStyles}>
    <Toolbar>
      <Typography
        variant="h4"
        sx={typographyStyles}
      >
        MD
      </Typography>
      <NavButtonsWrapper>
        <NavButton blank={false} href='#' text='Home' />
        <NavButton blank={false} href='#body' text='Projects' />
        <NavButton blank={false} href='#contact-me' text='Contact' />
      </NavButtonsWrapper>
    </Toolbar>
  </AppBar>
);

export default Nav;