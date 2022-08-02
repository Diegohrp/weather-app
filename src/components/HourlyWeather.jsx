import React from 'react';
import styled from 'styled-components';

export const HourlyContainer = styled.section`
  width: min(80%, 400px);
  margin-top: 50px;
  h2 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 20px;
  }
  div {
    overflow-x: scroll;
    scroll-snap-type: proximity;
    overscroll-behavior-x: contain;
    &::-webkit-scrollbar {
      background-color: ${(props) => props.theme.borderColor};
      height: 5px;
      border-radius: 20px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${(props) => props.theme.accentColor};
      border-radius: 20px;
    }
  }
  ul {
    display: flex;
    padding: 10px 20px 20px 10px;
    border-radius: 20px;
    list-style: none;
    font-size: 1.6rem;
    margin-bottom: 10px;
  }
  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    scroll-snap-align: center;

    img {
      width: 80px;
    }
  }
  @media (min-width: 700px) {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    @media (min-width: 700px) {
      width: 80%;
    }
  }
`;

function HourlyWeather({ hourly }) {
  const formatHour = (hour) => {
    if (hour === 0) {
      return '12AM';
    } else if (hour > 12) {
      return hour - 12 + 'PM';
    } else {
      return hour + 'AM';
    }
  };

  let currentHour = new Date().getHours();

  const hours = hourly.slice(0, 24).map((hour) => {
    const data = {
      currentHour: formatHour(currentHour),
      icon: hour.weather[0].icon,
      temp: Math.round(hour.temp),
    };
    if (currentHour === 23) {
      currentHour = 0;
    } else {
      currentHour++;
    }
    return data;
  });

  return (
    <HourlyContainer>
      <h2>Hourly Forecast</h2>
      <div>
        <ul>
          {hours.map((item, index) => (
            <li key={index}>
              <span>{item.currentHour}</span>
              <img
                src={`http://openweathermap.org/img/wn/${item.icon}@2x.png`}
                alt='hourly icon'
              />
              <span>{item.temp}°C</span>
            </li>
          ))}
        </ul>
      </div>
    </HourlyContainer>
  );
}

export { HourlyWeather };
