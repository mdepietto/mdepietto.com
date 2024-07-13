import React from 'react'
import avatar from 'images/avatar.jpg';
import styled from 'styled-components';

const AvatarWrapper = styled.img`
  @keyframes avatar-blob {
    0%, 100% {
      border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    }
    50% {
      border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
    }
  }

  animation: avatar-blob 8s ease-in-out infinite;
  box-shadow: -5px 5px 10px 3px rgba(56, 56, 56, 0.5);
  
  max-height: 400px;

  @media screen and (max-width: 1007px) {
    max-width: 100%;
  }
`;

const Avatar = () => {
  return (
    <AvatarWrapper alt='avatar' src={avatar} />
  )
}

export default Avatar;