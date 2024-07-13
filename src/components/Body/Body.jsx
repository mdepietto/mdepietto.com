import React from 'react';
import Project from 'components/Project/Project';
import mediaShelf from 'images/media-shelf.jpg';
import mastermind from 'images/mastermind.jpg';
import movieSearch from 'images/movie-search.jpg';
import trombones from 'images/trombones.jpg';
import styled from 'styled-components';

const BodyWrapper = styled.div`
  align-items: center;
  background: rgba(25, 32, 34);
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 2rem;
`;

const Body = () => {
  return (
    <BodyWrapper id='body'>
      <h2>Projects</h2>
      <Project
        description='A note-taking app for books, movies, and shows that accesses data from a locally run SQL database'
        github='https://github.com/mdepietto/media-shelf'
        image={mediaShelf}
        live=''
        title='Media Shelf (currently being worked on)'
        tools='React Node Express SQL'
      />
      <Project
        description='An app to fetch basic information from a public api about your favorite movies'
        github='https://github.com/mdepietto/movie-search-app'
        image={movieSearch}
        live=''
        reverse
        title='Movie Search App'
        tools='React'
      />
      <Project
        description='A modern puzzle adaptation from the old game "Bulls and Cows"'
        github='https://mdepietto.itch.io/mastermind'
        image={mastermind}
        live=''
        title='Mastermind Game'
        tools='JavaScript'
      />
      <Project
        description='A mock website for selling quality trombones'
        github='https://github.com/mdepietto/landing-testsite'
        image={trombones}
        live=''
        reverse
        title='E-commerce Trombones'
        tools='HTML CSS'
      />
    </BodyWrapper>
  );
};

export default Body;