/* eslint-disable import/no-unresolved */
import React from 'react';
import { HeaderIcon as UserIcon } from 'components';
import Weather from './Weather';
import Vote from './Vote';
import { StyledRoot, MainRoot, MainContainer } from './style';

function Main() {
  return (
    <StyledRoot>
      <UserIcon />
      <MainRoot>
        <MainContainer>
          <Weather />
          <Vote />
        </MainContainer>
      </MainRoot>
    </StyledRoot>
  );
}

export default Main;
