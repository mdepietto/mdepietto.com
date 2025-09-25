import { useState } from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const boxStyles = {
  position: 'fixed',
  top: '50%',
  right: 0,
  backgroundColor: 'var(--dark-blue)',
  transform: 'rotate(90deg) translate(-2rem, -9rem)',
  zIndex: 1000,
  clipPath: 'polygon(0 50%, 500px 0, 20px 100%, 0 50%, 20px 0, calc(100% - 20px) 0, calc(100% - 20px) 100%, 20px 100%, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%)',

  '& > div': {
    margin: '0 2rem',
  },

  'a': {
    fontFamily: '"Anton", sans-serif',
    fontSize: '1.1rem',
    padding: '0',
  },

  'a .MuiSelected': {
    border: 'none',
  },
}

const NavMenu = () => (
  <Box sx={boxStyles}>
    <Tabs
      centered
      textColor='white'
      TabIndicatorProps={{
        style: {
          display: 'none'
        }
      }}
    >
      <Tab label='Home' href='#' />
      <Tab label='Projects' href='#body' />
      <Tab label='Contact' href='#contact-me' />
    </Tabs>
  </Box>
);

export default NavMenu;