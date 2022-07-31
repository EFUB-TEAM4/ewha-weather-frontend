/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
import React from 'react';
import theme from 'styles/theme';
import { StyledRoot, Container, Filler, Inner } from './style';

function ProgressBar({ allowPercentage }) {
  const notAllowPercent = 100 - allowPercentage;

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
        {notAllowPercent && (
          <Inner color={IsAllowed.no.percent}>불허 {notAllowPercent}%</Inner>
        )}
        {allowPercentage && (
          <Filler voted={allowPercentage} barGround={IsAllowed.yes.barGround}>
            <Inner color={IsAllowed.yes.allow}>허 {allowPercentage}%</Inner>
          </Filler>
        )}
      </Container>
    </StyledRoot>
  );
}

export default ProgressBar;
