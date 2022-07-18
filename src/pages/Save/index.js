/* eslint-disable import/no-unresolved */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { WhiteLeft, SaveBear, RecSun } from 'assets';
import { HeaderIcon, PublicButton } from 'components';
import {
  StyledRoot,
  HeaderIconBox,
  SubText,
  MainText,
  BackButton,
  Text,
  MainBox,
  DateText,
  HorizonLine,
  HorizonLineBottom,
  DeskTopWeatherBox,
  MobileWeatherBox,
  ContentBox,
  RecordBox,
  ButtonBox,
  TemBox,
  Temperature,
  VerticalLine,
} from './style';

function Save() {
  const navigate = useNavigate();
  return (
    <StyledRoot>
      <HeaderIconBox>
        <HeaderIcon />
      </HeaderIconBox>
      <Text>
        <button
          className="backbutton"
          type="button"
          onClick={() => {
            navigate(-1);
          }}
        >
          <BackButton src={WhiteLeft} alt="BackButton" />
        </button>
        <SubText className="subText">내년의 나를 위해 남기는</SubText>
        <MainText>하루 날씨 기록</MainText>
      </Text>
      <MainBox className="mainbox">
        <DateText>2022년 7월 16일</DateText>
        <HorizonLine width="100%" />
        <ContentBox>
          <MobileWeatherBox>
            <img src={RecSun} alt="WeatherIcon" />
            <TemBox>
              <Temperature isSmall={0}>20</Temperature>
              <Temperature isSmall={1}>°C</Temperature>
            </TemBox>
            <VerticalLine />
            <div className="div">
              <Temperature isSmall={1}>최고: 24° / 최저: 25°</Temperature>
              <Temperature isSmall={1}>강수확률: 0%</Temperature>
            </div>
          </MobileWeatherBox>
          <img className="bear" src={SaveBear} alt="SaveBear" />
          <RecordBox>
            <DeskTopWeatherBox>
              <img src={RecSun} alt="WeatherIcon" />
              <TemBox>
                <Temperature isSmall={0}>20</Temperature>
                <Temperature isSmall={1}>°C</Temperature>
              </TemBox>
              <VerticalLine />
              <Temperature isSmall={1}>최고: 24° / 최저: 25°</Temperature>
              <Temperature isSmall={1}>강수확률: 0%</Temperature>
            </DeskTopWeatherBox>
            <HorizonLine width="100%" isShorter={1} />
            <textarea placeholder="내년의 나를 위해, 오늘 하루의 날씨 기록을 남겨보세요." />
            <HorizonLineBottom width="100%" />
          </RecordBox>
        </ContentBox>
        <ButtonBox>
          <PublicButton text="저장하기" />
        </ButtonBox>
      </MainBox>
    </StyledRoot>
  );
}

export default Save;
