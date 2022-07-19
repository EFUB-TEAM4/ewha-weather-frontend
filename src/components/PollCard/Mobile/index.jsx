/* eslint-disable import/no-unresolved */
import React from 'react';
import { UpWhite, DownWhite } from 'assets';
import { StyledRoot, AskSection, PollBtnSection, PollBtn } from './style';
import { Text } from '../style';

function MobilePollCard() {
  return (
    <StyledRoot>
      <PollBtnSection>
        <PollBtn>
          <img src={DownWhite} alt="DownWhite" />
        </PollBtn>
      </PollBtnSection>
      <AskSection>
        <Text>
          오늘 <span>롱코트</span>
        </Text>
        <Text>
          <span>ECC</span>에서 허, 불허?
        </Text>
      </AskSection>
      <PollBtnSection>
        <PollBtn>
          {' '}
          <img src={UpWhite} alt="UpWhite" />
        </PollBtn>
      </PollBtnSection>
    </StyledRoot>
  );
}

export default MobilePollCard;
