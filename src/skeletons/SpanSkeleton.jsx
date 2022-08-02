import React from 'react';
import styled from 'styled-components';

export const StyledSpan = styled.span`
  width: 100px;
  height: 20px;
  border-radius: 10px;
  background: linear-gradient(
    90deg,
    ${(props) => props.theme.borderColor},
    ${(props) => props.theme.background}
  );
  background-size: 400% 400%;
  animation: loadingAnimation 3s ease-in-out infinite;
  @keyframes loadingAnimation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

function SpanSkeleton(props) {
  return (
    <StyledSpan className={props.classN}>{props.children}</StyledSpan>
  );
}

export { SpanSkeleton };
