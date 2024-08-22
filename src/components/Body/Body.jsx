import React from 'react';
import Project from 'components/Project/Project';
import mediaShelf from 'images/media-shelf.jpg';
import mastermind from 'images/mastermind.jpg';
import movieSearch from 'images/movie-search.jpg';
import trombones from 'images/trombones.jpg';
import projectBackground2 from 'images/project-background2.png';
import styled from 'styled-components';

const BodyWrapper = styled.div`
  align-items: center;

  background-image: url(${projectBackground2});

  // dark blue
  // background: rgba(25, 32, 34);

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
  padding: 2vw 0;
`;

const TitleWrapper = styled.h1`
  margin-bottom: 3vw;
`;

const ProjectsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`;

const Body = () => {
  return (
    <BodyWrapper id='body'>
      <TitleWrapper>Projects</TitleWrapper>
      <ProjectsWrapper>
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
      </ProjectsWrapper>
    </BodyWrapper>
  );
};

export default Body;