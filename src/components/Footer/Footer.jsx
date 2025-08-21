import React from 'react';
import ContactMe from 'components/Footer/ContactMe';
import footerBackground from 'images/backgrounds/footer-background.png';
import venn from 'images/accents/venn.png';
import styled from 'styled-components';

const FooterWrapper = styled.div`
`;

const InfoWrapper = styled.div`
  background-image: url(${footerBackground});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-top-right-radius: 100px;
  border-top-left-radius: 100px;
  width: 90%;
  height: auto;
  margin: auto;
`;

const ComboWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledH3 = styled.h3`
  width: 40%;
  background: var(--dark-gray);
  border: .5vw solid white;
  border-radius: 15px;
  line-height: 2vw;
  padding: 2vw;
  text-align: center;
`;

const StyledVenn = styled.img`
  width: 60%;
`;

const Footer = () => (
  <FooterWrapper>

    <h1 id='with-border'>About Me</h1>

    <InfoWrapper>
      {/* <StyledH3>
        I was always tinkering with something: Taking things apart,
        figuring out how it all worked, and putting it back together.
        It started with pens in elementary school.
        Then, with the help of my father, to taking apart cable boxes and tv components.
        Finally, to coding. It was only natural to follow the self-taught,
        trial and error style learning for that as well. I find that programming has
        been a great direction to go to scratch the itch for problem solving,
        conceptualizing, and strategizing that I've had my whole life. I'm excited to
        continue sharpening my skillset and take that tinkering to new heights.
      </StyledH3> */}

      {/* <StyledH3>
        I'm Michael DePietto: a Software Developer base in New York, although,
        I use the word "y'all" and don't really like the pizza here, so
        maybe an outsider in disguise.
      </StyledH3> */}

      <ComboWrapper>
        <StyledH3>
          This profession seems to be the only one that completes my personal Venn diagram
          of interest:
        </StyledH3>

        <StyledVenn src={venn} alt='venn diagram of interests' />
      </ComboWrapper>

      <ContactMe />
    </InfoWrapper>
  </FooterWrapper>
);

export default Footer;