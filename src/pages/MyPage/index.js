/* eslint-disable import/no-unresolved */
import React from 'react';
import { RecSun } from 'assets';
import { StyledRoot, Text } from './style';

function MyPage() {
  return (
    <StyledRoot>
      <Text>MyPage</Text>
      <img src={RecSun} alt="RecSunny" />
    </StyledRoot>
  );
}

export default MyPage;
