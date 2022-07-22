/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import { colors } from 'styles/styleOptions';
import BearOptions from 'pages/Main/BearOptions';
import { School, SkyDark, Snow, Bear, CancelBear } from 'assets';
import {
  StyledRoot,
  Options,
  SkyImg,
  SchoolImg,
  WeatherImg,
  BearImg,
  CancelBtn,
} from './style';

function BearAvater() {
  const [bearOption, setBearOption] = useState(false);

  console.log(bearOption);
  return (
    <StyledRoot id="BearAvater">
      <SkyImg src={SkyDark} alt="sky" />
      <SchoolImg src={School} alt="school" />

      <WeatherImg src={Snow} alt="snow" />
      <BearImg src={Bear} alt="bear" />

      {!bearOption && (
        <Options
          onClick={() => setBearOption(!bearOption)}
          color={colors.greenLighter}
        >
          · · ·
        </Options>
      )}
      {bearOption && (
        <>
          <CancelBtn onClick={() => setBearOption(!bearOption)}>
            <img src={CancelBear} alt="closeBearOption" />
          </CancelBtn>
          <BearOptions />
        </>
      )}
    </StyledRoot>
  );
}

export default BearAvater;
