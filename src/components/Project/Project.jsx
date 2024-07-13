import React from 'react';
import ProjectImage from 'components/Project/ProjectImage';
import styled from 'styled-components';

const ProjectWrapper = styled.div`
  align-items: center;
  background-color: rgb(211, 207, 227);
  border: 2px solid aquamarine;
  border-radius: 1rem;
  display: flex;
  flex-direction: ${({ reverse }) => reverse && 'row-reverse' };
  max-width: 55vw;
  margin-bottom: 2vh;
  padding: 2rem;
  justify-content: center;
`;

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: ${({ reverse }) => reverse ? 'right' : 'left' };
  padding: 2rem;
`;

const Project = ({ description, github, image, live, reverse, title, tools }) => {
  return (
    <ProjectWrapper reverse={reverse}>
      <ProjectImage alt={title} github={github} live={live} src={image} />
      <DescriptionWrapper reverse={reverse}>
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{tools}</p>
      </DescriptionWrapper>
    </ProjectWrapper>
  );
};

export default Project;