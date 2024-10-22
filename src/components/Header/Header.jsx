import React from 'react';
import Bio from 'components/Header/Bio';
import headerImage from 'images/city-landscape.jpg';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  background-image: url(${headerImage});
  background-repeat: no-repeat;
  background-size: 100vw 100vh;
  display: flex;
  height: 100vh;

  @media screen and (max-width: 1007px) {
    flex-direction: column;
  }
`;

const HomePage = () => {
  return (
    <HeaderWrapper>
      <Bio />
    </HeaderWrapper>
  )
}

export default HomePage;