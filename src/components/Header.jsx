import React from 'react';
import styled from 'styled-components';
import { useGetData } from '../hooks/useGetData';
const StyledHeader = styled.header`
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0;
  z-index: 1;
  background-color: ${(props) => props.theme.darkColor};
  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.75);
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
          Search
        </button>
      </form>
    </StyledHeader>
  );
}

export { Header };
