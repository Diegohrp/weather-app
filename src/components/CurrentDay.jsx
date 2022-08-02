import React from 'react';
import styled from 'styled-components';
import { HiOutlineLocationMarker } from 'react-icons/hi';

export const CardContainer = styled.section`
  margin-top: 30px;
  width: min(80%, 400px);
  height: 240px;
  border-radius: 20px;
  padding: 20px;
  background-color: ${(props) => props.theme.darkColor};
  -webkit-box-shadow: 6px 6px 6px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 6px 6px 6px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 6px 6px 6px 0px rgba(0, 0, 0, 0.75);
  div {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-size: 1.6rem;
    &:nth-child(1) {
      span:last-child {
        display: flex;
        text-align: center;
        width: 150px;
      }
    }
    &:nth-child(2) {
      h2 {
        font-size: 3rem;
        position: relative;
      }
      h2::after {
        content: '°C';
        color: ${(props) => props.theme.accentColor};
        font-size: 2rem;
        position: absolute;
        top: 3px;
        left: calc(100% + 5px);
      }
    }
    &:nth-child(3) {
      margin-bottom: 20px;
      span:first-child {
        font-size: 1.8rem;
        font-weight: bold;
        color: ${(props) => props.theme.accentColor};
      }
    }
    &:nth-child(4) {
      justify-content: center;
      font-size: 1.4rem;
      .location {
        font-size: 2rem;
        margin-right: 5px;
        color: ${(props) => props.theme.accentColor};
      }
    }
  }
  @media (min-width: 700px) {
    grid-row: 1 / 2;
    grid-column: 1 / 2;
  }
`;

function CurrentDay({ current: { temp, weather }, address }) {
  let date = new Date();
  date =
    date.toDateString() + ' ' + date.toLocaleTimeString().slice(0, 5);
  date = date.slice(0, 3) + ',' + date.slice(3);

  return (
    <CardContainer>
      <div>
        <div>
          <span>Today</span>
          <span>{date}</span>
        </div>
      </div>
      <div>
        <h2>{Math.round(temp)}</h2>
        <img
          src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
          alt='current-weather'
        />
      </div>
      <div>
        <span>{weather[0].main}</span>
        <span>{weather[0].description}</span>
      </div>

      <div>
        <HiOutlineLocationMarker className='location' />
        <span>{address}</span>
      </div>
    </CardContainer>
  );
}

export { CurrentDay };
