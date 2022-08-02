import React from 'react';
import styled from 'styled-components';
import { HourlyContainer } from '../components/HourlyWeather';
import { SpanSkeleton } from './SpanSkeleton';

const hours = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
const HourlySkel = styled(HourlyContainer)`
  .s {
    width: 70px;
  }
  .img {
    width: 90px;
    height: 50px;
    margin: 20px 5px;
  }
`;

function HourlyWeatherSkel() {
  return (
    <HourlySkel>
      <div>
        <ul>
          {hours.map((item, index) => (
            <li key={index + 's'}>
              <SpanSkeleton classN='s'></SpanSkeleton>
              <SpanSkeleton classN='img'></SpanSkeleton>
              <SpanSkeleton classN='s'></SpanSkeleton>
            </li>
          ))}
        </ul>
      </div>
    </HourlySkel>
  );
}

export { HourlyWeatherSkel };
