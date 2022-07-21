/* eslint-disable import/no-unresolved */
import React from 'react';
// import { MainBear } from 'assets';
import { BearAvater } from 'components';
import TempReport from './TempReport';
import WeatherReport from './WeatherReport';
import { StyledRoot, BearSection, WeatherSection } from './style';
import { Title, ContentSection } from '../style';



function handleBearPng(){

  console.log("handleBearPng")

}
function Weather() {

 
  return (
    <StyledRoot>
      <Title>오늘의 이화 날씨</Title>
      <ContentSection>
        <BearSection>
          <BearAvater />
          <button  type="button" onClick={handleBearPng}>이미지 저장</button>
        </BearSection>

        <WeatherSection>
          <WeatherReport />
          <TempReport />
        </WeatherSection>
      </ContentSection>
    </StyledRoot>
  );
}

export default Weather;
