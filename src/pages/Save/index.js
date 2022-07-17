/* eslint-disable import/no-unresolved */
import React from 'react';
import { SaveBear, WeatherInfo } from 'assets';
import { HeaderIcon } from 'components';
import {
  StyledRoot,
  SubText,
  MainText,
  Text,
  MainBox,
  HorizonLine,
  ContentBox,
  RecordBox,
} from './style';

function Save() {
  return (
    <StyledRoot>
      <HeaderIcon />
      <Text>
        <SubText className="subText">내년의 나를 위해 남기는</SubText>
        <MainText>하루 날씨 기록</MainText>
      </Text>
      <MainBox className="mainbox">
        <p>2022년 7월 16일</p>
        <HorizonLine width="100%" />

        <ContentBox>
          <img className="bear" src={SaveBear} alt="SaveBear" />
          <RecordBox>
            <img className="weather" src={WeatherInfo} alt="WeatherInfo" />
            <HorizonLine width="96%" />
            <textarea placeholder="내년의 나를 위해, 오늘 하루의 날씨 기록을 남겨보세요." />
            <HorizonLine width="96%" />
          </RecordBox>
        </ContentBox>
        {/* <PublicButton text="저장하기" /> */}
      </MainBox>
    </StyledRoot>
  );
}

export default Save;
