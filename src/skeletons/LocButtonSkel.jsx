import React from 'react';
import styled from 'styled-components';
import { StyledSpan } from './SpanSkeleton';

const SkeletonButton = styled(StyledSpan)`
  margin-top: 30px;
  height: 30px;
  width: 140px;
  display: flex;
  @media (min-width: 700px) {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    align-self: end;
  }
`;

function LocButtonSkel() {
  return <SkeletonButton />;
}

export { LocButtonSkel };
