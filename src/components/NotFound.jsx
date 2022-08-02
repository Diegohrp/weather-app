import React from 'react';
import styled from 'styled-components';
import notFoumdimg from '../assets/not-found.svg';

const Container = styled.section`
  width: 100vw;
  height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  font-size: 2rem;
  text-align: center;
  h1 {
    font-size: 4rem;
  }
  img {
    width: min(80%, 400px);
  }
  @media (min-width: 700px) {
    height: calc(100vh - 120px);
    grid-column: 1 / 3;
    grid-row: 1 / 3;
  }
`;

function NotFound() {
  return (
    <Container>
      <h1>404 Not Found</h1>
      <img src={notFoumdimg} alt='404' />
      <p>
        An unexpecter error happened! Please try again or refresh the
        page.
      </p>
    </Container>
  );
}

export { NotFound };
