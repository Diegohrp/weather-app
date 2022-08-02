import React from 'react';
import styled from 'styled-components';
import { font } from '../GlobalStyles';
import { MdMyLocation } from 'react-icons/md';

export const StyledButton = styled.button`
  margin-top: 30px;
  height: 30px;
  width: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.accentColor};
  color: ${(props) => props.theme.textColor};
  border: none;
  outline: none;
  border-radius: 5px;
  font-family: ${font};
  font-size: 1.6rem;
  cursor: pointer;

  .icon {
    color: rgb(189, 14, 1);
    font-size: 2rem;
    margin-right: 4px;
  }
  @media (min-width: 700px) {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    align-self: end;
  }
`;

function LocButton({ onGetLocation }) {
  return (
    <StyledButton onClick={onGetLocation}>
      <MdMyLocation className='icon' /> Get Location
    </StyledButton>
  );
}

export { LocButton };
