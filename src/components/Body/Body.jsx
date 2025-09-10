import React from 'react';
import Project from 'components/Body/Project';
import ScrollHOC from 'components/shared/ScrollHOC';
import chic from 'images/thumbnails/chic.png';
import mediaShelf from 'images/thumbnails/media-shelf.jpg';
import mastermind from 'images/thumbnails/mastermind.jpg';
import movieSearch from 'images/thumbnails/movie-search.jpg';
// import trombones from 'images/thumbnails/trombones.jpg';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 4vw;

  > div > div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
  }

  @media(max-width: 500px) {
    > div > div {
      margin: 5vw 0;
    }
  }
`;

const Body = () => (
  <Wrapper id='body'>
    <h1 id='with-border'>Projects</h1>
    <ScrollHOC Component="div">
      <Project
        description='A landing page for a fresh hair/lash salon in NYC with pseudo scheduling functionality'
        image={chic}
        link='https://mdepietto.github.io/chic-salon/'
        number={1}
        title='Chic Salon'
        tools='React MaterialUI Emotion'
      />
      <Project
        description='A note-taking app for books, movies, and shows that accesses data from a locally run SQL database'
        image={mediaShelf}
        link='https://github.com/mdepietto/media-shelf'
        number={2}
        title='Media Shelf'
        tools='React Node Express SQL'
      />
      <Project
        description='An app to fetch basic information from a public api about your favorite movies'
        image={movieSearch}
        link='https://github.com/mdepietto/movie-search-app'
        number={3}
        title='Movie Search App'
        tools='React'
      />
      <Project
        description='A modern puzzle adaptation from the old game "Bulls and Cows"'
        image={mastermind}
        link='https://mdepietto.itch.io/mastermind'
        number={4}
        title='Mastermind Game'
        tools='JavaScript'
      />
      {/* <Project
        description='A mock website for selling quality trombones'
        image={trombones}
        link='https://github.com/mdepietto/landing-testsite'
        number={5}
        title='E-commerce Trombones'
        tools='HTML CSS'
      /> */}
    </ScrollHOC>
  </Wrapper>
);

export default Body;