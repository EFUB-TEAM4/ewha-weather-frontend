/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import { UpGreen, DownGreen, UpWhite, DownWhite } from 'assets';
import { StyledRoot, AskSection, PollBtnSection, PollBtn } from './style';
import { Text } from '../style';

function PollCard() {
  const [isHovered, setIsHovered] = useState({ up: 0, down: 0 });
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
          onMouseOver={() => setIsHovered({ ...isHovered, down: 1 })}
          onMouseOut={() => setIsHovered({ ...isHovered, down: 0 })}
          onClick={handleDownBtn}
        >
          {isHovered.down ? (
            <img src={DownWhite} alt="DownWhite" />
          ) : (
            <img src={DownGreen} alt="DownGreen" />
          )}
        </PollBtn>
        <PollBtn
          onMouseOver={() => setIsHovered({ ...isHovered, up: 1 })}
          onMouseOut={() => setIsHovered({ ...isHovered, up: 0 })}
          onClick={handleUpBtn}
        >
          {isHovered.up ? (
            <img src={UpWhite} alt="UpWhite" />
          ) : (
            <img src={UpGreen} alt="UpGreen" />
          )}
        </PollBtn>
      </PollBtnSection>
    </StyledRoot>
  );
}

export default PollCard;
