/* eslint-disable import/no-unresolved */

import React from 'react';
import theme from 'styles/theme';
import { StyledRoot, Container, Filler, Inner } from './style';

function ProgressBars() {
  const voted = 60;

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

  console.log(theme.color.white);

  return (
    <StyledRoot>
      <Container>
        <Filler voted={voted} barGround={IsAllowed.yes.barGround}>
          <Inner color={IsAllowed.yes.allow}>허</Inner>
        </Filler>
        <Inner color={IsAllowed.yes.percent}>{voted}%</Inner>
      </Container>
      <Container>
        <Filler voted={voted} barGround={IsAllowed.no.barGround}>
          <Inner color={IsAllowed.no.allow}>불허</Inner>
        </Filler>
        <Inner color={IsAllowed.no.percent}>{voted}%</Inner>
      </Container>
    </StyledRoot>
  );
}

export default ProgressBars;
