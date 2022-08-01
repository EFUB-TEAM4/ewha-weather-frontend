/* eslint-disable import/no-unresolved */
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { WhiteClose } from 'assets';
import { useRecoilValueLoadable } from 'recoil';
import { GetCurrent } from 'state/weather';
import { BearAvater } from 'components';
import {
  StyledRoot,
  MainText,
  ImgBox,
  HomeButton,
  Text,
  ExitButton,
  ButtonBox,
} from './style';

function SaveComplete() {
  const {
    state,
    contents: { AvaterState },
  } = useRecoilValueLoadable(GetCurrent);
  const navigate = useNavigate();
  return (
    <StyledRoot>
      <ButtonBox>
        <button
          type="button"
          onClick={() => {
            navigate(-1);
          }}
        >
          <ExitButton src={WhiteClose} alt="창 닫기 버튼" />
        </button>
      </ButtonBox>
      <MainText>날씨 기록이 저장되었어요</MainText>
      <ImgBox>
        {state === 'hasValue' ? (
          <BearAvater showOptions={false} avater={AvaterState} />
        ) : (
          <div />
        )}
      </ImgBox>
      <HomeButton
        onClick={() => {
          navigate('/');
        }}
      >
        <Link to="/">
          <Text>홈으로 돌아가기</Text>
        </Link>
      </HomeButton>
    </StyledRoot>
  );
}

export default SaveComplete;
