/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { UpGreen, DownGreen, UpWhite, DownWhite } from 'assets';
import { usePrivateAxios } from 'hooks';
import { PostProCon, GetUserVote } from 'apis/Vote.apis';
import { GetUser } from 'state/user';
import ProgressBars from './bar';
import { StyledRoot, AskSection, PollBtnSection, PollBtn } from './style';
import { Text } from '../style';

function PollCard({ data: { id, building, clothes } }) {
  const [isHovered, setIsHovered] = useState({ up: 0, down: 0 });
  const [isVoted, setIsVoted] = useState(false);
  const [allowPercentage, setAllowPercentage] = useState(0);
  const privateAxios = usePrivateAxios();
  const CurrentUser = useRecoilValue(GetUser);

  const getUserData = async () => {
    const response = await GetUserVote(CurrentUser.id, id);
    setIsVoted(Boolean(response.length));
    if (isVoted) {
      const {
        voteResponseDto: { approvedCount, disapprovedCount },
      } = response[0];
      const allowRatio = approvedCount / (approvedCount + disapprovedCount);
      setAllowPercentage(allowRatio * 100);
    }
  };

  useEffect(() => {
    if (CurrentUser.id) {
      getUserData();
    }
  }, [isVoted]);

  const handleUpBtn = async () => {
    if (CurrentUser.id) {
      // console.log(CurrentUser);
      const data = { approved: true, votePostsId: id };
      const response = await PostProCon(privateAxios, data);
      // console.log('handleUpBtn', response);
      setIsVoted(true);
    }
  };

  const handleDownBtn = async () => {
    if (CurrentUser.id) {
      const data = { approved: false, votePostsId: id };
      const response = await PostProCon(privateAxios, data);
      // console.log('handleUpBtn', response);
      setIsVoted(true);
    }
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
          </>
        )}

        {CurrentUser.id && isVoted && (
          <ProgressBars allowPercentage={allowPercentage} />
        )}
      </PollBtnSection>
    </StyledRoot>
  );
}

export default PollCard;
