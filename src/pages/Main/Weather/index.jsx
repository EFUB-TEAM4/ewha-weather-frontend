/* eslint-disable no-plusplus */
/* eslint-disable import/no-unresolved */
import React, { useEffect } from 'react';
import { useRecoilStateLoadable } from 'recoil';
import { Spinner } from 'assets';
import { BearAvater } from 'components';
import { GetCurrent } from 'state/weather';
import TempReport from './TempReport';
import WeatherReport from './WeatherReport';
import { StyledRoot, BearSection, WeatherSection } from './style';
import { Title, ContentSection } from '../style';

function Weather() {
  // const [{AvaterState,CurrentWeather}, setcurrentState] = useRecoilValueLoadable(GetCurrent);
  /* const {
    getCurrent:{state,
    contents: { AvaterState, CurrentWeather }},refetchGetCurrent
  } = useRecoilValueLoadable(GetCurrent);
  // console.log(AvaterState, CurrentWeather); */
  const [
    {
      state,
      contents: { AvaterState, CurrentWeather },
    },
    refetchGetCurrent,
  ] = useRecoilStateLoadable(GetCurrent);

  // console.log(state, AvaterState, CurrentWeather, refetchGetCurrent)

  useEffect(() => {
    const interval = setInterval(() => {
      // console.log('running');
      refetchGetCurrent(new Date());
    }, 900000);
    return () => clearInterval(interval);
  }, [CurrentWeather, AvaterState]);

  return (
    <StyledRoot>
      <Title>오늘의 이화 날씨</Title>
      <ContentSection>
        {state === 'hasValue' ? (
          <>
            <BearSection>
              <BearAvater showOptions avater={AvaterState} />
            </BearSection>

            <WeatherSection>
              <WeatherReport weather={CurrentWeather} />
              <TempReport />
            </WeatherSection>
          </>
        ) : (
          <>
            <BearSection>
              <img src={Spinner} alt="Loading" />
            </BearSection>

            <WeatherSection>
              <img src={Spinner} alt="Loading" />
              <TempReport />
            </WeatherSection>
          </>
        )}
      </ContentSection>
    </StyledRoot>
  );
}

export default Weather;
