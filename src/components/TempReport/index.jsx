/* eslint-disable import/no-unresolved */
import React from 'react';
import { BoxLeft, BoxRight } from 'assets';
import { StyledRoot, LeftArrow, TempSection, RightArrow } from './style';
import TimeTemp from './TimeTemp';

function TempReport() {
  return (
    <StyledRoot>
      <LeftArrow>
        <img src={BoxLeft} alt="BoxLeft" />
      </LeftArrow>
      <TempSection>
        <TimeTemp />
      </TempSection>
      <RightArrow>
        <img src={BoxRight} alt="BoxRight" />
      </RightArrow>
    </StyledRoot>
  );
}

export default TempReport;
