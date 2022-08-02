import React from 'react';
import styled from 'styled-components';
const StyledFooter = styled.footer`
  width: 100%;
  background-color: ${(props) => props.theme.darkColor};
  height: 80px;
  color: ${(props) => props.theme.textColor};
  font-size: 1.6rem;

  ul {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    list-style: none;

    li {
      display: flex;
      align-items: center;
      p {
        margin-right: 10px;
      }
      a {
        color: ${(props) => props.theme.accentColor};
        font-weight: 700;
        text-decoration: none;
        &:hover {
          color: ${(props) => props.theme.borderColor};
        }
      }
    }
  }
`;
function Footer() {
  return (
    <StyledFooter>
      <ul>
        <li>
          <p>Made with 💜 by</p>
          <a href='https://github.com/Diegohrp'> @Diegohrp</a>
        </li>
        <li>
          <p>Maps</p>
          <a href='https://developers.google.com/maps/documentation'>
            {' '}
            API Google Maps
          </a>
        </li>
        <li>
          <p>Data from </p>
          <a href='https://openweathermap.org/api/one-call-3'>
            OpenWeather API
          </a>
        </li>
      </ul>
    </StyledFooter>
  );
}

export { Footer };
