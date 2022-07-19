/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import { UpGreen, DownGreen, UpWhite, DownWhite } from 'assets';
import { StyledRoot, AskSection, Text, PollBtnSection, PollBtn } from './style';

function PollCard() {
  const [isUpHovered, setIsUpHovered] = useState(0);
  const [isDownHovered, setIsDownHovered] = useState(0);

  const handleUpBtn = () => {
    console.log('handleUpBtn');
  };

  const handleDownBtn = () => {
    console.log('handleDownBtn');
  };

  return (
    <StyledRoot>
      <AskSection>
        <Text>
          오늘 <span>롱코트</span>
        </Text>
        <Text>
          <span>ECC</span>에서
        </Text>
        <Text>허, 불허?</Text>
      </AskSection>

      <PollBtnSection>
        <PollBtn
          onMouseOver={() => setIsUpHovered(1)}
          onMouseOut={() => setIsUpHovered(0)}
          onClick={handleUpBtn}
        >
          {isUpHovered ? (
            <img src={UpWhite} alt="UpWhite" />
          ) : (
            <img src={UpGreen} alt="UpGreen" />
          )}
        </PollBtn>
        <PollBtn
          onMouseOver={() => setIsDownHovered(1)}
          onMouseOut={() => setIsDownHovered(0)}
          onClick={handleDownBtn}
        >
          {isDownHovered ? (
            <img src={DownWhite} alt="DownWhite" />
          ) : (
            <img src={DownGreen} alt="DownGreen" />
          )}
        </PollBtn>
      </PollBtnSection>
    </StyledRoot>
  );
}

export default PollCard;
