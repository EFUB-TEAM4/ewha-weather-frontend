/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import { PostCalendars } from 'apis/Calendar.apis';
import { usePrivateAxios } from 'hooks';
import { useRecoilValueLoadable } from 'recoil';
import { GetCurrent } from 'state/weather';
import { WhiteLeft } from 'assets';
import { HeaderIcon, PublicButton, BearAvater } from 'components';
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
  Bear,
} from './style';

function Save() {
  const {
    state,
    contents: { AvaterState, CurrentWeather },
  } = useRecoilValueLoadable(GetCurrent);
  const navigate = useNavigate();
  const [text, setText] = useState('');
  const privateAxios = usePrivateAxios();
  const changeHandler = e => {
    setText(e.target.value);
  };

  /*
  const handleSubmit = async () => {
    const record = await axios({
      url: 'http://ewhaweather.com/api/v1/eweathers/current',
      method: 'get',
      headers: { 'Access-Control-Allow-Origin': '*' },
      withCredentials: false,
    });
    console.log(record);
  }; */

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
        <DateText>{moment().format('YYYY년 MM월 DD일')}</DateText>
        <HorizonLine width="100%" />
        {state === 'hasValue' ? (
          <ContentBox>
            <MobileWeatherBox>
              <img
                className="iconimg"
                src={CurrentWeather.iconResponseDto.iconUrl}
                alt="WeatherIcon"
              />
              <TemBox>
                <Temperature isSmall={0}>
                  {CurrentWeather.currentTemperature}
                </Temperature>
                <Temperature isSmall={1}>°C</Temperature>
              </TemBox>
              <VerticalLine />
              <div className="div">
                <Temperature isSmall={1}>
                  최고: {CurrentWeather.maxTemperature}° / 최저:{' '}
                  {CurrentWeather.minTemperature}°
                </Temperature>
                <Temperature isSmall={1}>
                  강수확률: {CurrentWeather.rainfallPercentage}%
                </Temperature>
              </div>
            </MobileWeatherBox>
            <Bear>
              <BearAvater showOptions={false} avater={AvaterState} />
            </Bear>
            <RecordBox>
              <DeskTopWeatherBox>
                <img
                  className="iconimg"
                  src={CurrentWeather.iconResponseDto.iconUrl}
                  alt="WeatherIcon"
                />
                <TemBox>
                  <Temperature isSmall={0}>
                    {CurrentWeather.currentTemperature}
                  </Temperature>
                  <Temperature isSmall={1}>°C</Temperature>
                </TemBox>
                <VerticalLine />
                <Temperature isSmall={1}>
                  최고: {CurrentWeather.maxTemperature}° / 최저:
                  {CurrentWeather.minTemperature}°
                </Temperature>
                <Temperature isSmall={1}>
                  강수확률: {CurrentWeather.rainfallPercentage}%
                </Temperature>
              </DeskTopWeatherBox>
              <HorizonLine width="100%" isShorter={1} />
              <textarea
                onChange={changeHandler}
                placeholder="내년의 나를 위해, 오늘 하루의 날씨 기록을 남겨보세요."
              />
              <HorizonLineBottom width="100%" />
            </RecordBox>
          </ContentBox>
        ) : (
          <ContentBox />
        )}
        <ButtonBox>
          <PublicButton
            onClick={() => {
              PostCalendars(privateAxios, AvaterState, CurrentWeather, text);
              navigate('/savecomplete');
            }}
            text="저장하기"
            isDisabled={text.length > 0 ? 0 : 1}
          />
        </ButtonBox>
      </MainBox>
    </StyledRoot>
  );
}

export default Save;
