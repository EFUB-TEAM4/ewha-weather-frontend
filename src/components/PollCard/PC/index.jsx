/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import { UpGreen, DownGreen, UpWhite, DownWhite } from 'assets';
import { PostProCon } from 'apis/Vote.apis';
import ProgressBars from './bar';
import { StyledRoot, AskSection, PollBtnSection, PollBtn } from './style';
import { Text } from '../style';

function PollCard({
  data: { id, userId, building, clothes, approvedCount, disapprovedCount },
}) {
  const [isHovered, setIsHovered] = useState({ up: 0, down: 0 });
  const [isVoted, setIsVoted] = useState(false);

  const handleUpBtn = async () => {
    const response = await PostProCon(true, id);
    console.log('handleUpBtn', response);
    setIsVoted(true);
  };

  const handleDownBtn = async () => {
    const response = await PostProCon(false, id);
    console.log('handleDownBtn', response);
    setIsVoted(true);
  };

  return (
    <StyledRoot>
      <AskSection>
        <Text>
          오늘 <span>{clothes}</span>
        </Text>
        <Text>
          <span>{building}</span>에서
        </Text>
        <Text>허, 불허?</Text>
      </AskSection>

      <PollBtnSection>
        {!isVoted && (
          <>
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
          </>
        )}

        {isVoted && <ProgressBars />}
      </PollBtnSection>
    </StyledRoot>
  );
}

export default PollCard;
