/* eslint-disable import/no-unresolved */
import React from 'react';
import { MainBear } from 'assets';
import TempReport from './TempReport';
import WeatherReport from './WeatherReport';
import { StyledRoot, BearSection, WeatherSection } from './style';
import { Title, ContentSection } from '../style';

function Weather() {
  return (
    <StyledRoot>
      <Title>오늘의 이화 날씨</Title>
      <ContentSection>
        <BearSection>
          <img src={MainBear} alt="MainBear" />
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
