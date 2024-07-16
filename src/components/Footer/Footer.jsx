import React from 'react';
import ContactMe from 'components/ContactMe/ContactMe';
import footerImage from 'images/footer-background.png';
import styled from 'styled-components';

const FooterWrapper = styled.div`
  background-image: url(${footerImage});
  background-repeat: no-repeat;
  background-size: 100%;
  padding: 2vw 0;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <ContactMe />
    </FooterWrapper>
  )
}

export default Footer;