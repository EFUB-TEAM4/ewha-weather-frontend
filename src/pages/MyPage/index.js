/* eslint-disable import/no-unresolved */
import React from 'react';
import { HeaderIcon, PublicButton } from 'components';
import { StyledRoot, Text } from './style';

function MyPage() {
  return (
    <StyledRoot>
      <HeaderIcon />
      <Text>MyPage</Text>
      <PublicButton text="투표 만들기" onClick={() => {}} isDisabled={0} />
    </StyledRoot>
  );
}

export default MyPage;
