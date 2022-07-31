import React from 'react';
import styled from 'styled-components';

const DetailsSection = styled.section`
  width: 80%;
  h2 {
    margin-top: 50px;
    font-size: 2.5rem;
    text-align: center;
  }
`;

const DetailsContainer = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  place-items: center;
  row-gap: 20px;
  margin-top: 20px;
  article {
    width: 95%;
    padding: 0 10px;
    height: 120px;
    background-color: ${(props) => props.theme.darkColor};
    border-radius: 20px;
    font-size: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    span {
      text-align: center;
    }
    span:first-child {
      font-weight: bold;
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

function Details({ details }) {
  let data = {
    Humidity: details.humidity + '%',
    Pressure: details.pressure + 'Pa',
    Wind_speed: details.wind_speed + 'm/s',
    Temperature_day: details.temp.day + '°C',
    Temperature_max: details.temp.max + '°C',
    Temperature_min: details.temp.min + '°C',
    Temperature_morning: details.temp.morn + '°C',
    Temperature_night: details.temp.night + '°C',
  };
  data = Object.entries(data);
  return (
    <DetailsSection>
      <h2>Today's highlights</h2>
      <DetailsContainer>
        {data.map((item) => (
          <article key={item[0]}>
            <span>{item[0].replace('_', ' ')}</span>
            <span>{item[1]}</span>
          </article>
        ))}
      </DetailsContainer>
    </DetailsSection>
  );
}

export { Details };
