/* eslint-disable import/no-unresolved */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SaveBear, WhiteClose } from 'assets';
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
        <img src={SaveBear} alt="저장하는 곰돌이 이미지" />
      </ImgBox>
      <HomeButton
        onClick={() => {
          navigate('/');
        }}
      >
        <Text>홈으로 돌아가기</Text>
      </HomeButton>
    </StyledRoot>
  );
}

export default SaveComplete;
