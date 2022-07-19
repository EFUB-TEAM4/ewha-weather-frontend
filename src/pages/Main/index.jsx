/* eslint-disable import/no-unresolved */
import React from 'react';
import { HeaderIcon as UserIcon } from 'components';
import { useWindowWidth } from 'hooks';
import Weather from './Weather';
import Vote from './Vote';

import { StyledRoot, MainRoot, MainContainer } from './style';

function Main() {
  const width = useWindowWidth();

  return (
    <StyledRoot>
      <UserIcon />
      <MainRoot>
        <MainContainer>
          <Weather />
          <Vote width={width} />
        </MainContainer>
      </MainRoot>
    </StyledRoot>
  );
}

export default Main;
