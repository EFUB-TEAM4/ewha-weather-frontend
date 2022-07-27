/* eslint-disable no-plusplus */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { useRecoilValueLoadable } from 'recoil';
import { BearAvater } from 'components';
import { GetCurrent } from 'state/weather';
import TempReport from './TempReport';
import WeatherReport from './WeatherReport';
import { StyledRoot, BearSection, WeatherSection } from './style';
import { Title, ContentSection } from '../style';



function Weather() {


  // const [{AvaterState,CurrentWeather}, setcurrentState] = useRecoilValueLoadable(GetCurrent);
  const {state, contents:{AvaterState, CurrentWeather}} = useRecoilValueLoadable(GetCurrent);
  console.log(AvaterState, CurrentWeather)


  return (
    <StyledRoot>
      <Title>오늘의 이화 날씨</Title>
      <ContentSection>
        {state === 'hasValue' ? (
          <>
            <BearSection>
              <BearAvater
                showOptions
                avater={AvaterState}
              />
            </BearSection>

            <WeatherSection>
              <WeatherReport
                weather={CurrentWeather}
              />
              <TempReport />
            </WeatherSection>
          </>
        ) : (
          <div />
        )}
      </ContentSection>
    </StyledRoot>
  );
}

export default Weather;
