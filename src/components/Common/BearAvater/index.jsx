/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import { colors } from 'styles/styleOptions';
import BearOptions from 'pages/Main/BearOptions';
// import { School, SkyDark, Snow, Bear, CancelBear } from 'assets';
import {  Snow,CancelBear} from 'assets';
import {
  StyledRoot,
  Options,
  SkyImg,
  SchoolImg,
  WeatherImg,
  BearImg,
  CancelBtn,
} from './style';

function BearAvater({showOptions}) {
  const [bearOption, setBearOption] = useState(false);

  console.log(bearOption);
  return (
    <StyledRoot >
      <div id="BearAvater">

      <SkyImg src="https://eweather-bucket.s3.ap-northeast-2.amazonaws.com/bear/sky/3night.png" alt="sky" />
      <SchoolImg src="https://eweather-bucket.s3.ap-northeast-2.amazonaws.com/bear/season/summer.png" alt="school" />

      <WeatherImg src={Snow} alt="snow" />
      <BearImg src="https://eweather-bucket.s3.ap-northeast-2.amazonaws.com/bear/tmp/23.png" alt="bear" />


      </div>

      {
        showOptions && <>
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
        </>
      }

 
    </StyledRoot>
  );
}

export default BearAvater;
