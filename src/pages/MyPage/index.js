/* eslint-disable import/no-unresolved */
import React from 'react';
import { RecSun } from 'assets';
import { PublicButton } from 'components';
import { StyledRoot, Text } from './style';

function MyPage() {
  return (
    <StyledRoot>
      <PublicButton text="투표 만들기" onClick={() => {}} isDisabled={0} />
      <Text>MyPage</Text>
      <img src={RecSun} alt="RecSunny" />
    </StyledRoot>
  );
}

export default MyPage;
