/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-unresolved */
import React, { useEffect, useState } from 'react';
import Draggable from 'react-draggable';
import { UpWhite, DownWhite, DownGreen, UpGreen } from 'assets';
import { StyledRoot, AskSection, PollBtnSection, PollBtn } from './style';
import { Text } from '../style';

function MobilePollCard() {
  const [isDragged, setIsDragged] = useState({ up: false, down: false });
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
  const onStop = () => {
    const { activeDrags } = state;
    setState({ ...state, activeDrags: activeDrags - 1 });
  };

  const DownDragged = () => {
    console.log('down');
    setIsDragged({ up: false, down: true });
  };
  const UpDragged = () => {
    console.log('up');
    setIsDragged({ up: true, down: false });
  };

  const onControlledDrag = (e, position) => {
    const { x, y } = position;
    console.log(position)
    setState({ ...state, controlledPosition: { x, y } });
    if (x < -10) DownDragged();
    else if (x > 10) UpDragged();
  };
  const onControlledDragStop = (e, position) => {
    onControlledDrag(e, position);
    onStop();
  };

  /* const onStart = () => {
    const { activeDrags } = state;
    console.log("start",state)
    setState({ ...state, activeDrags: activeDrags + 5 });
    setIsDragged({ ...isDragged, down: !isDragged.down });
  };
  /* const onStop = () => {
    // const { activeDrags } = state;
    console.log("stop",state)
    setState({ ...state, activeDrags:0 });
  };
  // const dragHandlers = { onStart, onStop };
  /* const handleDownBtnDrag = () => {
    console.log('handleDownBtn Dragged', isDragged.down);
    setIsDragged({ ...isDragged, down: !isDragged.down });
  }; */
  return (
    <Draggable
      axis="x"
      position={state.controlledPosition}
      onStop={onControlledDragStop}
    >
      <div className="box cursor-x">
        <StyledRoot>
          <PollBtnSection>
            <PollBtn>
              {isDragged.down ? (
                <img src={DownGreen} alt="DownGreen" />
              ) : (
                <img src={DownWhite} alt="DownWhite" />
              )}
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
              {isDragged.up ? (
                <img src={UpGreen} alt="UpGreen" />
              ) : (
                <img src={UpWhite} alt="UpWhite" />
              )}
            </PollBtn>
          </PollBtnSection>
        </StyledRoot>
      </div>
    </Draggable>
  );
}

export default MobilePollCard;
