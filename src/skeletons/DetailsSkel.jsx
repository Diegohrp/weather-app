import React from 'react';
import styled from 'styled-components';
import {
  DetailsSection,
  DetailsContainer,
} from '../components/Details';
import { SpanSkeleton } from './SpanSkeleton';

const data = [1, 1, 1, 1, 1, 1, 1, 1];
const DetailsSec = styled(DetailsSection)``;
const DetailsCont = styled(DetailsContainer)``;

function DetailsSkel() {
  return (
    <DetailsSec>
      <DetailsCont>
        {data.map((item, index) => (
          <article key={index}>
            <SpanSkeleton></SpanSkeleton>
            <SpanSkeleton></SpanSkeleton>
          </article>
        ))}
      </DetailsCont>
    </DetailsSec>
  );
}

export { DetailsSkel };
