/* eslint-disable import/no-unresolved */
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  StyledRoot,
  MainText,
  ContentBox,
  Clothes,
  Place,
  Params,
  HomeButton,
  Text,
} from './style';

function VoteComplete() {
  const navigate = useNavigate();
  const { clothes } = useParams();
  const { place } = useParams();

  return (
    <StyledRoot>
      <MainText>투표가 등록되었어요</MainText>
      <ContentBox>
        <Clothes>
          오늘 <Params>{clothes}</Params>
        </Clothes>
        <Place>
          <Params>{place}</Params>에서 허, 불허?
        </Place>
      </ContentBox>
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

export default VoteComplete;
