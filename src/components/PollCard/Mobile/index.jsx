/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-unresolved */
import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import Draggable from 'react-draggable';
import { usePrivateAxios } from 'hooks';
import { UpWhite, DownWhite, DownGreen, UpGreen } from 'assets';
import { GetUser } from 'state/user';
import { PostProCon, GetUserVote } from 'apis/Vote.apis';
import { StyledRoot, AskSection, PollBtnSection, PollBtn } from './style';
import { Text } from '../style';
import ProgressBar from './bar';

function MobilePollCard({ data: { id, building, clothes } }) {
  const [isDragged, setIsDragged] = useState({ up: false, down: false });
  const [isVoted, setIsVoted] = useState(false);
  const [state, setState] = useState({
    activeDrags: 0,
    deltaPosition: {
      x: 0,
      y: 0,
    },
    controlledPosition: {
      x: 0,
      y: 0,
    },
  });
  const [allowPercentage, setAllowPercentage] = useState(0);
  const privateAxios = usePrivateAxios();
  const CurrentUser = useRecoilValue(GetUser);
  const onStop = async voteState => {
    // 가장 마지막으로 실행되는 함수임
    const { activeDrags } = state;
    setState({ ...state, activeDrags: activeDrags - 1 });
  };

  const postVote = async voteState => {
    if (CurrentUser.id) {
      const data = { approved: voteState, votePostsId: id };
      // console.log(data);
      const response = await PostProCon(privateAxios, data);
      // console.log('onStop', response);
      setIsVoted(true);
    }
  };

  const DownDragged = () => {
    if (CurrentUser.id) {
      // console.log('down');
      setIsDragged({ up: false, down: true });
    }
  };
  const UpDragged = () => {
    if (CurrentUser.id) {
      // console.log('up');
      setIsDragged({ up: true, down: false });
    }
  };

  const onControlledDrag = (e, position) => {
    const { x, y } = position;
    // console.log(position);
    setState({ ...state, controlledPosition: { x, y } });
    if (x < -10) {
      DownDragged();
      postVote(true);
    } else if (x > 10) {
      UpDragged();
      postVote(false);
    }
  };
  const onControlledDragStop = (e, position) => {
    onControlledDrag(e, position);
    onStop();
  };

  const getUserData = async () => {
    const response = await GetUserVote(CurrentUser.id, id);
    // console.log('getUserData', response);
    setIsVoted(Boolean(response.length));
    if (isVoted) {
      const {
        voteResponseDto: { disapprovedCount, approvedCount },
      } = response[0];
      // console.log(disapprovedCount, approvedCount);

      const allowRatio =(
        approvedCount / (approvedCount + disapprovedCount)
      ).toFixed(1);
      setAllowPercentage(allowRatio * 100);
    }
  };

  useEffect(() => {
    // console.log(CurrentUser);
    if (CurrentUser.id) {
      getUserData();
    }
  }, [isVoted]);
  return (
    <Draggable
      axis="x"
      position={state.controlledPosition}
      onStop={onControlledDragStop}
    >
      <div className="box cursor-x">
        <StyledRoot isVoted={isVoted}>
          {!isVoted && (
            <PollBtnSection>
              <PollBtn>
                {isDragged.down ? (
                  <img src={DownGreen} alt="DownGreen" />
                ) : (
                  <img src={DownWhite} alt="DownWhite" />
                )}
              </PollBtn>
            </PollBtnSection>
          )}

          <AskSection>
            <Text>
              오늘 <span>{clothes}</span>
            </Text>
            <Text>
              <span>{building}</span>에서 허, 불허?
            </Text>
          </AskSection>

          {!isVoted && (
            <PollBtnSection>
              <PollBtn>
                {isDragged.up ? (
                  <img src={UpGreen} alt="UpGreen" />
                ) : (
                  <img src={UpWhite} alt="UpWhite" />
                )}
              </PollBtn>
            </PollBtnSection>
          )}
          {CurrentUser.id && isVoted && (
            <ProgressBar allowPercentage={allowPercentage} />
          )}
        </StyledRoot>
      </div>
    </Draggable>
  );
}

export default MobilePollCard;
