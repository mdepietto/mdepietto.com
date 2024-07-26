import React from 'react';
import { Button } from '@mui/material';
import styled from 'styled-components';

const ContactMeWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const buttonStyles = {
  color: 'white',
  fontSize: '1.7vw',
  fontFamily: '"Anton", sans-serif',
  marginRight: '2vw',
  position: 'relative',
  // textShadow: '-1px 1px 1px black, -2px 2px 1px black, -3px 3px 1px black, -4px 4px 1px black, -5px 5px 1px black',
  transition: 'padding-left 0.5s ease-in-out',
  zIndex: '1',

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
    background: 'linear-gradient(to right, rgba(0, 0, 0, .9), rgba(0, 0, 0, 0))',
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

const ContactMe = () => {
  return (
    <ContactMeWrapper id='contact-me'>
      <h1>Let's make something together</h1>
      <ButtonsWrapper>
        <Button
          href="mailto:depietto.dev@gmail.com?subject=You're Hired!"
          sx={buttonStyles}
        >
          email
        </Button>
        <Button
          href='tel:6313164713'
          sx={buttonStyles}
        >
          phone
        </Button>
      </ButtonsWrapper>
    </ContactMeWrapper>
  );
}

export default ContactMe;