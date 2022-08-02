import React from 'react';
import styled from 'styled-components';
import { SpanSkeleton } from './SpanSkeleton';
import { CardContainer } from '../components/CurrentDay';

const CurrentDaySkeleton = styled(CardContainer)`
  .img {
    height: 80px;
    margin: 20px 5px;
  }
  div:nth-child(1) span.date:last-child {
    width: 100px;
    height: 30px;
  }
  .h2 {
    height: 50px;
  }
  .address {
    width: 200px;
  }
`;

function CurrentDaySkel() {
  return (
    <CurrentDaySkeleton>
      <div>
        <div>
          <SpanSkeleton>{/* Today */}</SpanSkeleton>
          <SpanSkeleton classN='date'>{/* {date} */}</SpanSkeleton>
        </div>
      </div>
      <div>
        <SpanSkeleton classN='h2'>
          {/* {Math.round(temp)} */}
        </SpanSkeleton>
        <SpanSkeleton classN='img'></SpanSkeleton>
      </div>
      <div>
        <SpanSkeleton>{/* {weather[0].main} */}</SpanSkeleton>
        <SpanSkeleton>{/* {weather[0].description} */}</SpanSkeleton>
      </div>

      <div>
        <SpanSkeleton classN='address'>
          {/* {address} */}
        </SpanSkeleton>
      </div>
    </CurrentDaySkeleton>
  );
}

export { CurrentDaySkel };
