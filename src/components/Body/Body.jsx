import React from 'react';
import Project from 'components/Body/Project';
import headerImage from 'images/header-background.png';
import mediaShelf from 'images/media-shelf.jpg';
import mastermind from 'images/mastermind.jpg';
import movieSearch from 'images/movie-search.jpg';
import trombones from 'images/trombones.jpg';
import styled from 'styled-components';

const Wrapper = styled.div`
  // background:  linear-gradient( rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1) ), url(${headerImage});
  background-size: auto 100vw;
  display: flex;
  flex-direction: column;
  padding: 2vw 0;

  > h1 {
    margin-left: 4vw;
  }

  > div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
  }
`;

const Body = () => {
  return (
    <Wrapper id='body'>
      <h1>Projects</h1>
      <div>
        <Project
          description='A note-taking app for books, movies, and shows that accesses data from a locally run SQL database'
          image={mediaShelf}
          link='https://github.com/mdepietto/media-shelf'
          number={1}
          title='Media Shelf (in progress)'
          tools='React Node Express SQL'
        />
        <Project
          description='An app to fetch basic information from a public api about your favorite movies'
          image={movieSearch}
          link='https://github.com/mdepietto/movie-search-app'
          number={2}
          title='Movie Search App'
          tools='React'
        />
        <Project
          description='A modern puzzle adaptation from the old game "Bulls and Cows"'
          image={mastermind}
          link='https://mdepietto.itch.io/mastermind'
          number={3}
          title='Mastermind Game'
          tools='JavaScript'
        />
        <Project
          description='A mock website for selling quality trombones'
          image={trombones}
          link='https://github.com/mdepietto/landing-testsite'
          number={4}
          title='E-commerce Trombones'
          tools='HTML CSS'
        />
      </div>
    </Wrapper>
  );
};

export default Body;