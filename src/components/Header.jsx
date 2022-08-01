import React from 'react';
import styled from 'styled-components';
import { GoSearch } from 'react-icons/go';
import { font } from '../GlobalStyles';
const StyledHeader = styled.header`
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0px;
  z-index: 1;
  background-color: ${(props) => props.theme.darkColor};
  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  h1 {
    font-size: 2rem;
    color: ${(props) => props.theme.textColor};
    text-align: center;
  }
  form {
    width: min(80%, 300px);
    display: flex;
    justify-content: space-between;
    input {
      width: 90%;
      height: 22px;
      outline: none;
      border: none;
      padding-left: 10px;
      font-family: ${font};
      font-size: 1.5rem;
      font-weight: 700;
      border-radius: 10px;
    }
    button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 30px;
      font-size: 1.8rem;
      font-weight: bold;
      background-color: transparent;
      border: none;
      color: ${(props) => props.theme.textColor};
      cursor: pointer;
      &:hover {
        color: ${(props) => props.theme.accentColor};
      }
    }
  }
`;
function Header({ search }) {
  const [value, setValue] = React.useState('');
  /* console.log(state);
   */
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    if (value) {
      search(value);
    }
  };
  return (
    <StyledHeader>
      <h1>Weather App</h1>
      <form>
        <input
          type='text'
          placeholder='Search City'
          onChange={(e) => handleChange(e)}
          value={value}
          required
        />
        <button type='input' onClick={(e) => handleSearch(e)}>
          <GoSearch />
        </button>
      </form>
    </StyledHeader>
  );
}

export { Header };
