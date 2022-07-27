/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
import React from 'react';
import {
  StyledRoot,
  Header,
  CurrentTemp,
  Section,
  TempInfo,
  RainInfo,
} from './style';

function WeatherReport({
  weather: {
    minTemperature,
    currentTemperature,
    maxTemperature,
    rainfallPercentage,
    iconResponseDto: { iconUrl, iconName },
  },
}) {
  return (
    <StyledRoot>
      <Header>
        <img src={iconUrl} alt={iconName} />
        <CurrentTemp>
          <span>{currentTemperature}</span>
          <span>°C</span>
        </CurrentTemp>
      </Header>
      <Section>
        <TempInfo>
          최고: {maxTemperature}° / 최저: {minTemperature}°
        </TempInfo>
        <RainInfo>강수확률: {rainfallPercentage}%</RainInfo>
      </Section>
    </StyledRoot>
  );
}

export default WeatherReport;
