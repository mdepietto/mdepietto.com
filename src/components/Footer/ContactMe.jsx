import React from 'react';
import LinkButton from 'components/shared/LinkButton';
import styled from 'styled-components';

const ContactMeWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 5vw 6vw;
  width: 30%;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const ContactMe = () => (
  <ContactMeWrapper id='contact-me'>
    <h1>Let's make something together</h1>
    <ButtonsWrapper>
      <LinkButton
        href="mailto:depietto.dev@gmail.com?subject=You're Hired!"
        text='email'
      />
      <LinkButton
        href="tel:6313164713"
        text='phone'
      />
    </ButtonsWrapper>
  </ContactMeWrapper>
);

export default ContactMe;