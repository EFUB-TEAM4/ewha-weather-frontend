/* eslint-disable import/no-unresolved */
import React from 'react';
import { RecSun } from 'assets';
import { StyledRoot, Text } from './style';

function Vote() {
  return (
    <StyledRoot>
      <Text>Vote</Text>
      <img src={RecSun} alt="RecSunny" />
    </StyledRoot>
  );
}

export default Vote;
