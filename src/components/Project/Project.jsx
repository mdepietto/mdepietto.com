import React from 'react';
import styled from 'styled-components';

const radius = '15px';
const height = '30';
const width = '45';
const afterHeight = (height - 1.2).toString();
const afterWidth = (width - 1.2).toString();
const chop = '12';

const ProjectWrapper = styled.a`
  @keyframes bigger {
    100% {
      transform: scale(1.05) translate(3%, -3%);
    }
  }

  @keyframes glitch {
    0%   {background: linear-gradient(135deg, transparent ${chop}vw, yellow 0)}
    25%  {background: linear-gradient(135deg, transparent ${chop}vw, black 0)}
    50%  {background: linear-gradient(135deg, transparent ${chop}vw, white 0)}
    100% {background: linear-gradient(135deg, transparent ${chop}vw, yellow 0)}
  }

  background: linear-gradient(135deg, transparent ${chop}vw, white 0);
  border-radius: ${radius};

  // figure out box-shadow business
  box-shadow: 0px 10px 2px black;
  
  color: white;
  cursor: pointer;
  height: ${height}vw;
  margin: 5vw;
  position: relative;
  width: ${width}vw;
  z-index: 0;

  &:hover {
    animation: bigger .2s forwards;
  }

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
    animation: glitch .2s forwards;
  }

  &:after {
    content: '${({ number }) => `0${number}` }';
    font-size: 12vw;
    position: absolute;
    text-shadow: -1px 1px 1px black, -2px 2px 1px black, -3px 3px 1px black, -4px 4px 1px black, -5px 5px 1px black, -6px 6px 1px black, -7px 6px 1px black;
    transform: translateY(-15%);
  }
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

const ContentsWrapper = styled.div`
  align-items: end;
  bottom: 2vw;
  position: absolute;
  right: 2vw;
  text-align: right;
  width: 90%;
`;

const Project = ({ description, image, link, number, title, tools }) => {
  return (
    <ProjectWrapper href={link} number={number} target='blank'>
      <ImageWrapper alt={title} src={image} />
      <ContentsWrapper>
        <h2>{title}</h2>
        <h3>{description}</h3>
        <h3>{tools}</h3>
      </ContentsWrapper>
    </ProjectWrapper>
  );
};

export default Project;