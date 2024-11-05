import React from 'react';
import Nav from 'components/Nav/Nav';
import HomePage from 'components/Homepage/Homepage';
import Body from 'components/Body/Body';
import Footer from 'components/Footer/Footer';
import styled from 'styled-components';
import background from 'images/striped-back.jpg';

const Wrapper = styled.div`
  background: url(${background});
  overflow: auto;
`;

const App = () => {
  return (
    <Wrapper>
      <Nav />
      <HomePage />
      <Body />
      <Footer />
    </Wrapper>
  );
}

export default App;