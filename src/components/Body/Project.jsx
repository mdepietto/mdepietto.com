import React from 'react';
import styled from 'styled-components';

const chop = '10';
const chop2 = '15';
const chop3 = '20';

const Wrapper = styled.a`
  background: linear-gradient(135deg, transparent ${chop}vw, var(--dark-blue) 0);
  border-radius: 15px;
  color: white;
  cursor: pointer;
  height: 24vw;
  width: 33vw;
  margin: 3vw;
  position: relative;
  transition: all .2s ease-in-out;
  z-index: 0;

  @keyframes glitch {
    0%   {background: linear-gradient(135deg, transparent ${chop}vw, var(--dark-gray) 0)}
    25%  {background: linear-gradient(135deg, transparent ${chop}vw, var(--yellow) 0)}
    50%  {background: linear-gradient(135deg, transparent ${chop}vw, var(--dark-blue) 0)}
    100% {background: linear-gradient(135deg, transparent ${chop}vw, var(--light-green) 0)}
  }

  @keyframes glitch2 {
    0%   {background: linear-gradient(135deg, transparent ${chop2}vw, var(--dark-gray) 0)}
    25%  {background: linear-gradient(135deg, transparent ${chop2}vw, var(--yellow) 0)}
    50%  {background: linear-gradient(135deg, transparent ${chop2}vw, var(--dark-blue) 0)}
    100% {background: linear-gradient(135deg, transparent ${chop2}vw, var(--light-green) 0)}
  }

  @keyframes glitch3 {
    0%   {background: linear-gradient(135deg, transparent ${chop3}vw, var(--dark-gray) 0)}
    25%  {background: linear-gradient(135deg, transparent ${chop3}vw, var(--yellow) 0)}
    50%  {background: linear-gradient(135deg, transparent ${chop3}vw, var(--dark-blue) 0)}
    100% {background: linear-gradient(135deg, transparent ${chop3}vw, var(--light-green) 0)}
  }

  &:hover {
    animation: glitch .2s forwards;
    box-shadow: 0 20px 5px -5px black;
    transform: scale(1.05);
  }

  &:before {
    background: linear-gradient(
      135deg,
      transparent ${chop}vw,
      var(--blue-gray) ${chop}vw
    );
    border-radius: 15px;
    content: '';
    height: 22.8vw;
    width: 31.8vw;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    z-index: -1;
  }

  &:hover::before {
    background: linear-gradient(
      135deg,
      transparent ${chop}vw,
      var(--gray) ${chop}vw
    );
  }

  &:after {
    content: '${({ number }) => `0${number}` }';
    font-size: 11vw;
    position: absolute;
    text-shadow: -1px 1px 1px black, -2px 2px 1px black, -3px 3px 1px black, -4px 4px 1px black, -5px 5px 1px black, -6px 6px 1px black, -7px 6px 1px black;
    transform: translateY(-15%);
    -webkit-text-stroke: 1px black;
  }

  @media(max-width: 1280px) {
    height: 27vw;
    width: 36vw;

    &::before {
      height: 25.8vw;
      width: 34.8vw;
    }

    &::after {
      font-size: 12vw;
    }
  }

  @media(max-width: 1024px) {
    height: 30vw;
    width: 39vw;

    &::before {
      height: 28vw;
      width: 37vw;
    }

    &::after {
      font-size: 13vw;
    }
  }

  @media(max-width: 768px) {
    background: linear-gradient(135deg, transparent 15vw, var(--dark-blue) 0);
    height: 47vw;
    width: 60vw;

    &:hover {
      animation: glitch2 .2s forwards;
    }

    &::before {
      background: linear-gradient(
        135deg,
        transparent 15vw,
        var(--blue-gray) 15vw
      );
      height: 44vw;
      width: 57vw;
    }

    &:hover::before {
      background: linear-gradient(
        135deg,
        transparent 15vw,
        var(--gray) 15vw
      );
    }

    &::after {
      font-size: 17vw;
    }
  }

  @media(max-width: 500px) {
    background: linear-gradient(135deg, transparent 20vw, var(--dark-blue) 0);
    height: 90vw;
    width: 80vw;

    &:hover {
      animation: glitch3 .2s forwards;
    }

    &::before {
      background: linear-gradient(
        135deg,
        transparent 20vw,
        var(--blue-gray) 15vw
      );
      height: 85vw;
      width: 75vw;
    }

    &:hover::before {
      background: linear-gradient(
        135deg,
        transparent 20vw,
        var(--gray) 20vw
      );
    }

    &::after {
      font-size: 25vw;
    }
  }
`;

const StyledImage = styled.img`
  border-radius: 8px;
  position: absolute;
  right: 1.5vw;
  top: 1.5vw;
  width: 17vw;

  @media(max-width: 1280px) {
    width: 19vw;
  }

  @media(max-width: 1024px) {
    width: 21vw;
  }

  @media(max-width: 768px) {
    margin: 1vw;
    width: 35vw;
  }

  @media(max-width: 500px) {
    margin: 3vw;
    width: 47vw;
  }
`;

const ContentsWrapper = styled.div`
  align-items: end;
  bottom: 2vw;
  position: absolute;
  right: 1.5vw;
  text-align: right;
  max-width: 91%;
  min-height: 10vw;

  @media(max-width: 768px) {
    margin: 1vw;
  }

  @media(max-width: 500px) {
    margin: 3vw;
  }
`;

const TitleWrapper = styled.h2`
  display: inline-block;
  padding: .6vw;
  text-decoration: underline;
  text-shadow: -1px 1px 1px black, -2px 2px 1px black, -3px 3px 1px black, -4px 4px 1px black;
  text-underline-offset: .7vw;
`;

const Project = ({ description, image, link, number, title, tools }) => (
  <Wrapper href={link} number={number} target='blank'>
    <StyledImage alt={title} src={image} />
    <ContentsWrapper>
      <TitleWrapper>{title}</TitleWrapper>
      <h3>{description}</h3>
      <h3>- {tools}</h3>
    </ContentsWrapper>
  </Wrapper>
);

export default Project;