import React from 'react';
import { Button } from '@mui/material';
import styled from 'styled-components';

const ProjectImageWrapper = styled.div`
  position: relative;

  img {
    display: flex;
    border-radius: 1rem;
    width: 25vw;
  }

  &:hover div {
    opacity: 1;
  }
`;

const HoveredWrapper = styled.div`
  align-items: center;
  background-color: rgba(46, 46, 46, .8);
  border-radius: 1rem;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  transition: opacity .2s ease-in-out;
  width: 100%;

  & > :second-child {
    margin-left: 15px;
  }
`;

const buttonStyles = {
  border: '2px solid rgba(238, 117, 19, 0.84)',
  color: 'rgba(238, 117, 19, 0.84)',
  
  ':hover': {
    backgroundColor: 'rgba(238, 117, 19, 0.84)',
    border: '2px solid white',
    color: 'white',
  }
}

// COMPONENT MAY BE UNNEEDED
const ProjectImage = ({ alt, github, live, src }) => {
  return (
    <ProjectImageWrapper>
      <img
        alt={alt}
        src={src}
      />
      <HoveredWrapper>
        {live && (
          <Button
            href={live}
            sx={buttonStyles}
            target='blank'
            variant="outlined"
          >
            Live
          </Button>
        )}
        {github && (
          <Button
            href={github}
            sx={buttonStyles}
            target='blank'
            variant="outlined"
          >
            GitHub
          </Button>
        )}
      </HoveredWrapper>
    </ProjectImageWrapper>
  );
};

export default ProjectImage;