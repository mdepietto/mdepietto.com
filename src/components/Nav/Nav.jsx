import React from 'react';
import NavButton from 'components/Nav/NavButton';
import { AppBar, Toolbar, Typography } from '@mui/material';
import styled from 'styled-components';

const appBarStyles = {
  background: 'linear-gradient(to bottom, rgba(25, 32, 34, .6), 20%, rgba(0, 0, 0, 0))',
  backgroundColor: 'rgba(0, 0, 0, 0)',
  boxShadow: '0',
  color: 'white',
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
  fontSize: '3vw',
}

const NavButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 18%;
`;

const Nav = () => {
  return (
    <AppBar color='inherit' sx={appBarStyles}>
      <Toolbar>
        <Typography
          variant="h4"
          sx={typographyStyles}
        >
          MD
        </Typography>
        <NavButtonsWrapper>
          <NavButton blank={false} href='#bio' text='Home' />
          <NavButton blank={false} href='#body' text='Projects' />
          <NavButton blank={false} href='#contact-me' text='Contact' />
        </NavButtonsWrapper>

        {/* <NavButton href='resume-dev - overleaf (May 2024).pdf' text='Resume' />
        <NavButton href='https://github.com/mdepietto' text='GitHub' />
        <NavButton href="mailto:depietto.dev@gmail.com?subject=You're Hired!" text='Email' />
        <NavButton href='tel:6313164713' text='Phone' /> */}
      </Toolbar>
    </AppBar>
  )
}

export default Nav;