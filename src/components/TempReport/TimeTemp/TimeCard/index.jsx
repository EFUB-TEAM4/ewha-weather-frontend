/* eslint-disable import/no-unresolved */
import React from 'react';
import { TSnow } from 'assets';
import { StyledRoot, Temp, Time } from './style';

function TimeCard() {
  return (
    <StyledRoot>
      <Time>지금</Time>
      <img src={TSnow} alt="TimeSnow" />
      <Temp>24°</Temp>
    </StyledRoot>
  );
}

export default TimeCard;
