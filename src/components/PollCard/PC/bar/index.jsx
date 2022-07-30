/* eslint-disable import/no-unresolved */

import React from 'react';
import theme from 'styles/theme';
import { StyledRoot, Container, Filler, Inner } from './style';

function ProgressBars({ allowPercentage }) {
  const IsAllowed = {
    yes: {
      allow: `${theme.color.white}`,
      percent: `${theme.color.greenDarker}`,
      barGround: `${theme.color.greenDarker}`,
    },
    no: {
      allow: `${theme.color.greenDarker}`,
      percent: `${theme.color.greenDarker}`,
      barGround: `${theme.color.greenLightest}`,
    },
  };

  // console.log(theme.color.white);

  return (
    <StyledRoot>
      <Container>
        <Filler voted={allowPercentage} barGround={IsAllowed.yes.barGround}>
          <Inner
            color={
              allowPercentage ? IsAllowed.yes.allow : IsAllowed.yes.percent
            }
          >
            허
          </Inner>
        </Filler>
        <Inner color={IsAllowed.yes.percent}>{allowPercentage}%</Inner>
      </Container>
      <Container>
        <Filler
          voted={100 - allowPercentage}
          barGround={IsAllowed.no.barGround}
        >
          <Inner color={IsAllowed.no.allow}>불허</Inner>
        </Filler>
        <Inner color={IsAllowed.no.percent}>{100 - allowPercentage}%</Inner>
      </Container>
    </StyledRoot>
  );
}

export default ProgressBars;
