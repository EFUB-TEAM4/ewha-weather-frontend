/* eslint-disable import/no-unresolved */
import React from 'react';
import { RecSun } from 'assets';
import { StyledRoot, Text } from './style';

function Save() {
  return (
    <StyledRoot>
      <Text>Save</Text>
      <img src={RecSun} alt="RecSunny" />
    </StyledRoot>
  );
}

export default Save;
