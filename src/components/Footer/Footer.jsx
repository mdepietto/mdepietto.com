import React from 'react';
import ContactMe from 'components/ContactMe/ContactMe';
import { baseColors } from 'data/styles';
import styled from 'styled-components';

const FooterWrapper = styled.div`
  background: ${baseColors.yellow};
  padding: 2vw 0;

  > h1 {
    margin-left: 4vw;
  }

  > h3 {
    background: ${baseColors.royalBlue};
    border: .5vw solid white;
    border-radius: 15px;
    line-height: 2vw;
    margin: 0 20vw;
    padding: 2vw;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <h1>Contact</h1>
      <h3>
        I was always tinkering with something: Taking things apart,
        figuring out how it all worked, and putting it back together.
        It started with pens in elementary school.
        Then, with the help of my father, to taking apart cable boxes and tv components.
        Finally, to coding. It was only natural to follow the self-taught,
        trial and error style learning for that as well. I find that programming has
        been a great direction to go to scratch the itch for problem solving, 
        conceptualizing, and strategizing that I've had my whole life. I'm excited to
        continue sharpening my skillset and take that tinkering to new heights.
      </h3>
      <ContactMe />
    </FooterWrapper>
  )
}

export default Footer;