import React from 'react';
import ProjectImage from 'components/Project/ProjectImage';
import styled from 'styled-components';

const ProjectWrapper = styled.div`
  align-items: center;
  background-color: rgba(121, 144, 132);
  border-radius: 1rem;
  display: flex;
  flex-direction: ${({ reverse }) => reverse && 'row-reverse' };
  max-width: 55vw;
  margin-bottom: 4vh;
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

// const Project = ({ description, github, image, live, reverse, title, tools }) => {
//   return (
//     <ProjectWrapper reverse={reverse}>
//       <ProjectImage alt={title} github={github} live={live} src={image} />
//       <DescriptionWrapper reverse={reverse}>
//         <h3>{title}</h3>
//         <p>{description}</p>
//         <p>{tools}</p>
//       </DescriptionWrapper>
//     </ProjectWrapper>
//   );
// };

const radius = '15px';
const height = '30';
const width = '45';
const afterHeight = (height - .5).toString();
const afterWidth = (width - .5).toString();
const chop = '12';

const Wrapper = styled.div`
  background: linear-gradient(135deg, transparent ${chop}vw, white 0);
  border-radius: ${radius};
  height: ${height}vw;
  margin: 5vw;
  position: relative;
  width: ${width}vw;
  z-index: 0;

  &:before {
    background: linear-gradient(135deg, transparent ${chop}vw, rgba(25, 32, 34) 0);
    border-radius: ${radius};
    content: '';
    font-size: 14vw;
    height: ${afterHeight}vw;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    width: ${afterWidth}vw;
    z-index: -1;
  }

  &:after {
    content: '02';
    font-size: 10vw;
    position: absolute;
    transform: translateY(-15%);
  }
`;

const Project = ({ description, github, image, live, reverse, title, tools }) => {
  return (
    <Wrapper />
  );
};

export default Project;