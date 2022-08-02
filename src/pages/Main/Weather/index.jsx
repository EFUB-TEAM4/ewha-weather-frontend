/* eslint-disable no-plusplus */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { useRecoilValueLoadable } from 'recoil';
import { BearAvater } from 'components';
import { MainBear } from 'assets';
import { GetCurrent } from 'state/weather';
import MetaTag from 'SEO/MetaTag';
import TempReport from './TempReport';
import WeatherReport from './WeatherReport';
import { StyledRoot, BearSection, WeatherSection } from './style';
import { Title, ContentSection } from '../style';

function Weather() {
  // const [{AvaterState,CurrentWeather}, setcurrentState] = useRecoilValueLoadable(GetCurrent);
  const {
    state,
    contents: { AvaterState, CurrentWeather },
  } = useRecoilValueLoadable(GetCurrent);
  // console.log(AvaterState, CurrentWeather);

  return (
    <StyledRoot>
      {CurrentWeather && (
        <MetaTag
          title="이상청"
          description={`지금 이화는 ${CurrentWeather.currentTemperature}도 강수확률은 ${CurrentWeather.rainfallPercentage}%입니다. 지금 이화인들의 추천 옷차림은?`}
          keywords="이화여대, 이화 곰돌이, 이화 날씨"
          url="/"
          imgsrc={MainBear}
        />
      )}
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
          <div />
        )}
      </ContentSection>
    </StyledRoot>
  );
}

export default Weather;
