import React from 'react';
import styled from 'styled-components';

const WeekContainer = styled.section`
  width: min(80%, 400px);
  margin-top: 40px;
  h2 {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 20px;
  }
  ul {
    width: 100%;
    border-radius: 10px;
    background-color: ${(props) => props.theme.darkColor};
    list-style: none;
  }
  li {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    font-size: 1.5rem;
    border-bottom: 1px solid ${(props) => props.theme.borderColor};
    span:first-child {
      width: 45px;
    }
    span:nth-child(3) {
      color: #50a4c3;
      font-weight: bold;
    }
    span:nth-child(4) {
      color: #d8922f;
      font-weight: bold;
    }
    img {
      width: 50px;
    }
  }
  li:last-child {
    border: none;
  }
`;

function Week({ days }) {
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const currentDay = new Date();
  let day = currentDay.getDay() - 1;
  const weeklyForecast = days.map((item) => {
    day === 6 ? (day = 0) : day++;
    return {
      day: weekDays[day],
      icon: item.weather[0].icon,
      min: item.temp.min,
      max: item.temp.max,
    };
  });

  return (
    <WeekContainer>
      <h2>Weekly Forecast</h2>
      <ul>
        {weeklyForecast.map((weekDay, index) => (
          <li key={index}>
            <span>{index > 0 ? weekDay.day : 'Today'}</span>
            <img
              src={`http://openweathermap.org/img/wn/${weekDay.icon}@2x.png`}
              alt='weather'
            />
            <span>{Math.round(weekDay.min)}°C</span>
            <span>{Math.round(weekDay.max)}°C</span>
          </li>
        ))}
      </ul>
    </WeekContainer>
  );
}

export { Week };
