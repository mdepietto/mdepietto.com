import React from 'react';
import { Button } from '@mui/material';
import styled from 'styled-components';

const ContactMeWrapper = styled.div`
  align-items: center;
  border: 2px solid orange;
  display: flex;
  flex-direction: column;
  padding: 2rem;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const buttonStyle = {
  border: '3px solid violet',
  color: 'violet',
  fontSize: '1.5vw',
  height: '3vw',
  width: '14vw',

  ':hover': {
    backgroundColor: 'rgba(238, 117, 19, 0.84)',
    border: '2px solid white',
    color: 'white',
  }
}

const ContactMe = () => {
  return (
    <ContactMeWrapper id='contact-me'>
      <h3>Let's make something together</h3>
      <ButtonsWrapper>
        <Button
          href=''
          sx={buttonStyle}
        >email</Button>
        <Button
          href=''
          sx={buttonStyle}
        >phone</Button>
      </ButtonsWrapper>
    </ContactMeWrapper>
  );
}

export default ContactMe;