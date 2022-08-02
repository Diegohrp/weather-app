import React from 'react';
import styled from 'styled-components';
import { SpanSkeleton } from './SpanSkeleton';
import { MapSection } from '../components/Map';

const Section = styled(MapSection)`
  span {
    height: 40vh;
    width: 100%;
    display: flex;
  }
`;

function MapSkel() {
  return (
    <Section>
      <SpanSkeleton></SpanSkeleton>
    </Section>
  );
}

export { MapSkel };
