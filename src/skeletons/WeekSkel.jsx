import React from 'react';
import styled from 'styled-components';
import { WeekContainer } from '../components/Week';
import { SpanSkeleton } from './SpanSkeleton';
const weeklyForecast = [1, 1, 1, 1, 1, 1, 1, 1];

const WeekSkelContainer = styled(WeekContainer)`
  span {
    width: 45px;
    height: 17px;
  }
  .img {
    height: 30px;
    width: 35px;
    margin: 10px 0;
  }
`;

function WeekSkel() {
  return (
    <WeekSkelContainer>
      <ul>
        {weeklyForecast.map((weekDay, index) => (
          <li key={index}>
            <SpanSkeleton classN='day'>{/* Today */}</SpanSkeleton>
            <SpanSkeleton classN='img'>{/* img */}</SpanSkeleton>
            <SpanSkeleton>{/* MinTemp */}</SpanSkeleton>
            <SpanSkeleton>{/* MaxTemp */}</SpanSkeleton>
          </li>
        ))}
      </ul>
    </WeekSkelContainer>
  );
}

export { WeekSkel };
