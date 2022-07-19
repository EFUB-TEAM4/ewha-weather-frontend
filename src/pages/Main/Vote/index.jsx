/* eslint-disable import/no-unresolved */
import React from 'react';
import { useWindowWidth } from 'hooks';
import { deviceBreakPoints } from 'constants/deviceInfo';
import { PCPollReport, MobilePollReport } from './PollReport';
import { StyledRoot, Button, VoteSection } from './style';
import { TitleSection, Title } from '../style';

function handleBtnClick() {
  console.log('Vote handleBtnclick');
}

function Vote() {
  const width = useWindowWidth();
  console.log(width);

  return (
    <StyledRoot>
      <TitleSection>
        <div>
          <Title>오늘의 옷차림이 고민될 때,</Title>
          <Title>벗들에게 물어봐!</Title>
        </div>
        <Button onClick={handleBtnClick}>+</Button>
      </TitleSection>
      <VoteSection>
        {width <= deviceBreakPoints.mobile ? (
          <MobilePollReport />
        ) : (
          <PCPollReport />
        )}
      </VoteSection>
    </StyledRoot>
  );
}

export default Vote;
