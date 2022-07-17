/* eslint-disable import/no-unresolved */
import React from 'react';
import { HeaderIcon, WeatherReport, TempReport } from 'components';
import { MainBear } from 'assets';
import {
  StyledRoot,
  MainRoot,
  Title,
  MainContainer,
  TitleSection,
  WeatherArticle,
  VoteArticle,
  BearSection,
  WeatherSection,
  ContentSection,
} from './style';

function Main() {
  return (
    <StyledRoot>
      <HeaderIcon />
      <MainRoot>
        <MainContainer>
          <WeatherArticle>
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
          </WeatherArticle>
          <VoteArticle>
            <TitleSection>
              <Title>오늘의 옷차림이 고민될 때,</Title>
              <Title>벗들에게 물어봐!</Title>
            </TitleSection>
          </VoteArticle>
        </MainContainer>
      </MainRoot>
    </StyledRoot>
  );
}

export default Main;
