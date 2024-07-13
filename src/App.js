import React from 'react';
import Nav from 'components/Nav/Nav';
import Header from 'components/Header/Header';
import Body from 'components/Body/Body';
import Footer from 'components/Footer/Footer';
import styled from 'styled-components';

const Wrapper = styled.div`
  overflow: auto;
`;

const App = () => {
  return (
    <Wrapper>
      <Nav />
      <Header />
      <Body />
      <Footer />
    </Wrapper>
  );
}

export default App;