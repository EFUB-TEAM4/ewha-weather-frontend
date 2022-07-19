/* eslint-disable import/no-unresolved */
import React from 'react';
import theme from 'styles/theme';
import { StyledRoot, Container, Filler, Inner } from './style';

function ProgressBar() {
  const voted = 60;
  const IsAllowed = {
    yes: {
      allow: `${theme.color.white}`,
      percent: `${theme.color.greenDarker}`,
      barGround: `${theme.color.greenDarker}`,
    },
    no: {

      percent: `${theme.color.greenDarker}`,
      barGround: `${theme.color.greenLightest}`,
    },
  };

  return (
    <StyledRoot>
      <Container>
        <Inner color={IsAllowed.no.percent}>불허 {100-voted}%</Inner>

        <Filler voted={voted} barGround={IsAllowed.yes.barGround}>
          <Inner color={IsAllowed.yes.allow}>허 {voted}%</Inner>
        </Filler>
      </Container>
    </StyledRoot>
  );
}

export default ProgressBar;
