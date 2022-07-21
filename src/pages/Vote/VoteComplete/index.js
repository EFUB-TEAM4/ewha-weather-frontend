/* eslint-disable import/no-unresolved */
import React from 'react';
import {
  StyledRoot,
  MainText,
  ContentBox,
  Clothes,
  Place,
  HomeButton,
  Text,
} from './style';

function VoteComplete() {
  return (
    <StyledRoot>
      <MainText>투표가 등록되었어요</MainText>
      <ContentBox>
        <Clothes>오늘 주경바막</Clothes>
        <Place>조형예술관에서 허, 불허?</Place>
      </ContentBox>
      <HomeButton>
        <Text>홈으로 돌아가기</Text>
      </HomeButton>
    </StyledRoot>
  );
}

export default VoteComplete;
