import React from 'react';
import Project from 'components/Project/Project';
import mediaShelf from 'images/media-shelf.jpg';
import mastermind from 'images/mastermind.jpg';
import movieSearch from 'images/movie-search.jpg';
import trombones from 'images/trombones.jpg';
import styled from 'styled-components';

const BodyWrapper = styled.div`
  align-items: center;

  // dark blue
  background: rgba(25, 32, 34);

  // light blue
  // background: rgba(121, 144, 132);

  // yellow
  // background: rgba(195, 163, 77);

  // red
  // background: rgba(158, 64, 50);

  // cream
  // background: rgba(197, 185, 151);

  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2vw 0;
`;

const TitleWrapper = styled.h1`
  margin-bottom: 3vw;
`;

const Body = () => {
  return (
    <BodyWrapper id='body'>
      <TitleWrapper>Projects</TitleWrapper>
      <Project
        description='A note-taking app for books, movies, and shows that accesses data from a locally run SQL database'
        github='https://github.com/mdepietto/media-shelf'
        image={mediaShelf}
        live=''
        number={1}
        title='Media Shelf (in progress)'
        tools='React Node Express SQL'
      />
      <Project
        description='An app to fetch basic information from a public api about your favorite movies'
        github='https://github.com/mdepietto/movie-search-app'
        image={movieSearch}
        live=''
        number={2}
        reverse
        title='Movie Search App'
        tools='React'
      />
      <Project
        description='A modern puzzle adaptation from the old game "Bulls and Cows"'
        github='https://mdepietto.itch.io/mastermind'
        image={mastermind}
        live=''
        number={3}
        title='Mastermind Game'
        tools='JavaScript'
      />
      <Project
        description='A mock website for selling quality trombones'
        github='https://github.com/mdepietto/landing-testsite'
        image={trombones}
        live=''
        number={4}
        reverse
        title='E-commerce Trombones'
        tools='HTML CSS'
      />
    </BodyWrapper>
  );
};

export default Body;