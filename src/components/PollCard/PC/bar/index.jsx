/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */

import React from 'react';
import theme from 'styles/theme';
import { StyledRoot, Container, Filler, Inner } from './style';

function ProgressBars({ allowPercentage }) {
  const disAllowPercentage = 100 - allowPercentage;
  const IsAllowMax = allowPercentage >= disAllowPercentage;

  const barcolor = {
    max: {
      allow: `${theme.color.white}`,
      percent: `${theme.color.greenDarker}`,
      barGround: `${theme.color.greenDarker}`,
    },
    min: {
      allow: `${theme.color.greenDarker}`,
      percent: `${theme.color.greenDarker}`,
      barGround: `${theme.color.greenLightest}`,
    },
  };

  // console.log(theme.color.white);

  return (
    <StyledRoot>
      <Container>
        <Filler
          voted={allowPercentage}
          barGround={
            IsAllowMax ? barcolor.max.barGround : barcolor.min.barGround
          }
        >
          <Inner color={IsAllowMax ? barcolor.max.allow : barcolor.min.allow}>
            허
          </Inner>
        </Filler>
        <Inner color={IsAllowMax ? (allowPercentage===100?barcolor.max.allow:barcolor.max.barGround) : barcolor.min.allow}>
          {allowPercentage}%
        </Inner>
      </Container>
      <Container>
        <Filler
          voted={disAllowPercentage}
          barGround={
            !IsAllowMax ? barcolor.max.barGround : barcolor.min.barGround
          }
        >
          <Inner color={!IsAllowMax ? barcolor.max.allow : barcolor.min.allow}>
            불허
          </Inner>
        </Filler>
        <Inner color={!IsAllowMax ? (disAllowPercentage===100?barcolor.max.allow:barcolor.max.barGround ): barcolor.min.allow}>
          {disAllowPercentage}%
        </Inner>
      </Container>
    </StyledRoot>
  );
}

export default ProgressBars;
