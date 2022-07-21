/* eslint-disable import/no-unresolved */
import React from 'react';
import { CurSun } from 'assets';
import {
  StyledRoot,
  Header,
  CurrentTemp,
  Section,
  TempInfo,
  RainInfo,
} from './style';

function WeatherReport() {
  return (
    <StyledRoot>
      <Header>
        <img src={CurSun} alt="CurrentSun" />
        <CurrentTemp>
          <span>20</span>
          <span>°C</span>
        </CurrentTemp>
      </Header>
      <Section>
        <TempInfo>최고: 24° / 최저: 24°</TempInfo>
        <RainInfo>강수확률: 0%</RainInfo>
      </Section>
    </StyledRoot>
  );
}

export default WeatherReport;
