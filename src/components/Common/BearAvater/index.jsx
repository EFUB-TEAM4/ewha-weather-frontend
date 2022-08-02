/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import { colors } from 'styles/styleOptions';
import BearOptions from 'pages/Main/BearOptions';
import { MoreBtn, CloseModal } from 'assets';
import { Pty, Season, Sky, NoneBear, RainBear } from 'constants/bearImg';
import {
  StyledRoot,
  Options,
  BearAvaterSection,
  SkyImg,
  SeasonImg,
  WeatherImg,
  BearImg,
  Cancel,
} from './style';

function BearAvater({
  showOptions,
  avater: {
    skyResponseDto,
    ptyResponseDto,
    seasonResponseDto,
    bearResponseDto,
  },
}) {
  const [bearOption, setBearOption] = useState(false);


  return (
    <StyledRoot>
      <BearAvaterSection id="BearAvater">
        <SkyImg src={Sky[skyResponseDto.skyName].img} alt="sky" />
        <SeasonImg
          src={Season[seasonResponseDto.seasonName].img}
          alt="season"
        />
        {ptyResponseDto.ptyName !== '없음' && (
          <WeatherImg src={Pty[ptyResponseDto.ptyName].img} alt="snow" />
        )}
        <BearImg
          src={
            bearResponseDto.clothName.split('_')[0] === '없음'
              ? NoneBear[
                  `${bearResponseDto.clothName.split('_')[1]}_${
                    bearResponseDto.clothName.split('_')[2]
                  }`
                ].img
              : RainBear[
                  `${bearResponseDto.clothName.split('_')[1]}_${
                    bearResponseDto.clothName.split('_')[2]
                  }`
                ].img
          }
          alt="bear"
        />
      </BearAvaterSection>

      {showOptions && (
        <>
          {!bearOption && (
            <Options
              onClick={() => setBearOption(!bearOption)}
              color={colors.white}
            >
              <img src={MoreBtn} alt="more Options" />
            </Options>
          )}
          {bearOption && (
            <>
              <Cancel onClick={() => setBearOption(!bearOption)}>
                <img src={CloseModal} alt="closeBearOption" />
              </Cancel>
              <BearOptions />
            </>
          )}
        </>
      )}
    </StyledRoot>
  );
}

export default BearAvater;
