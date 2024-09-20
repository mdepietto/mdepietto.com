import React from 'react';
import Avatar from 'components/Header/Avatar';
import Bio from 'components/Header/Bio';
import headerImage from 'images/header-background.png';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  align-items: center;
  background-image: url(${headerImage});
  background-repeat: no-repeat;
  background-size: 100vw 100vh;
  display: flex;
  height: 100vh;
  justify-content: space-evenly;

  @media screen and (max-width: 1007px) {
    flex-direction: column;
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Bio />
      <Avatar />
    </HeaderWrapper>
  )
}

export default Header;