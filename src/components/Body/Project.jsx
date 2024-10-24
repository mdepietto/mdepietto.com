import React from 'react';
import { baseColors } from 'data/styles';
import styled from 'styled-components';

const radius = '15px';
const height = '25';
const width = '35';
const afterHeight = (height - 1.2).toString();
const afterWidth = (width - 1.2).toString();
const chop = '10';

const Wrapper = styled.a`
  background: linear-gradient(135deg, transparent ${chop}vw, white 0);
  border-radius: ${radius};
  color: white;
  cursor: pointer;
  height: ${height}vw;
  margin: 4vw;
  position: relative;
  width: ${width}vw;
  transition: all .2s ease-in-out;
  z-index: 0;

  &:hover {
    animation: glitch .3s forwards;
    box-shadow: 0 20px 5px -5px black;
    transform: scale(1.05);
  }

  &:before {
    background: linear-gradient(
      135deg,
      transparent ${chop}vw,
      ${baseColors.gray} ${chop}vw
    );
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
    background: linear-gradient(
      135deg,
      transparent ${chop}vw,
      ${baseColors.blueGray} ${chop}vw
    );
  }

  @keyframes glitch {
    0%   {background: linear-gradient(135deg, transparent ${chop}vw, black 0)}
    25%  {background: linear-gradient(135deg, transparent ${chop}vw, ${baseColors.yellow} 0)}
    50%  {background: linear-gradient(135deg, transparent ${chop}vw, ${baseColors.gray} 0)}
    100% {background: linear-gradient(135deg, transparent ${chop}vw, ${baseColors.lightGreen} 0)}
  }

  &:after {
    content: '${({ number }) => `0${number}` }';
    font-size: 11vw;
    position: absolute;
    text-shadow: -1px 1px 1px black, -2px 2px 1px black, -3px 3px 1px black, -4px 4px 1px black, -5px 5px 1px black, -6px 6px 1px black, -7px 6px 1px black;
    transform: translateY(-15%);
  }
`;

const ImageWrapper = styled.img`
  border-radius: 8px;
  position: absolute;
  right: 1.5vw;
  top: 1.5vw;
  width: 18vw;
`;

const ContentsWrapper = styled.div`
  align-items: end;
  bottom: 2vw;
  position: absolute;
  right: 1.5vw;
  text-align: right;
  max-width: 91%;
  min-height: 10vw;

  > h3 {
    text-shadow: -1px 1px 1px black, -2px 2px 1px black, -3px 3px 1px black;
  }
`;

const TitleWrapper = styled.h2`
  display: inline-block;
  padding: .6vw;
  text-decoration: underline;
  text-shadow: -1px 1px 1px black, -2px 2px 1px black, -3px 3px 1px black, -4px 4px 1px black;
  text-underline-offset: .7vw;
`;

const Project = ({ description, image, link, number, title, tools }) => {
  return (
    <Wrapper href={link} number={number} target='blank'>
      <ImageWrapper alt={title} src={image} />
      <ContentsWrapper>
        <TitleWrapper>{title}</TitleWrapper>
        <h3>{description}</h3>
        <h3>- {tools}</h3>
      </ContentsWrapper>
    </Wrapper>
  );
};

export default Project;