import React from 'react';
import ContactMe from 'components/ContactMe/ContactMe';
import styled from 'styled-components';

const FooterWrapper = styled.div`
  border: 2px solid pink;
  padding: 2rem;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <ContactMe />
    </FooterWrapper>
  )
}

export default Footer;