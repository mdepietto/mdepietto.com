import React from 'react';
import styled from 'styled-components';

const radius = '15px';
const height = '30';
const width = '45';
const afterHeight = (height - 1.2).toString();
const afterWidth = (width - 1.2).toString();
const chop = '12';

const ProjectWrapper = styled.div`
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

  &:hover::before {
    // find a way to make it twitchy from color -> black -> white -> color
    background: linear-gradient(135deg, transparent ${chop}vw, green 0);
  }

  &:after {
    content: '${({ number }) => `0${number}` }';
    font-size: 12vw;
    position: absolute;
    transform: translateY(-15%);
  }
`;

const ContentsWrapper = styled.div`
  align-items: end;
  bottom: 2vw;
  position: absolute;
  right: 2vw;
  text-align: right;
  width: 90%;
`;

const ImageWrapper = styled.img`
  border: .3vw solid white;
  border-radius: 8px;
  margin-bottom: 2vw;
  position: absolute;
  right: 2vw;
  top: 2vw;
  width: 26vw;
`;

const Project = ({ description, github, image, live, number, title, tools }) => {
  return (
    <ProjectWrapper number={number}>
      <ImageWrapper alt={title} github={github} live={live} src={image} />
      <ContentsWrapper>
        <h2>{title}</h2>
        <h3>{description}</h3>
        <h3>{tools}</h3>
      </ContentsWrapper>
    </ProjectWrapper>
  );
};

export default Project;