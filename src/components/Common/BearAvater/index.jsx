/* eslint-disable import/no-unresolved */
import React from 'react';
import { School, SkyDark, Snow, Bear } from 'assets';
import { StyledRoot, SkyImg, SchoolImg, WeatherImg, BearImg } from './style';

function BearAvater() {
  return (
    <StyledRoot>
      <SkyImg src={SkyDark} alt="sky" />
      <SchoolImg src={School} alt="school" />

      <WeatherImg src={Snow} alt="snow" />
      <BearImg src={Bear} alt="bear" />
    </StyledRoot>
  );
}

export default BearAvater;
