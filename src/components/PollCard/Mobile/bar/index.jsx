/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
import React from 'react';
import theme from 'styles/theme';
import { StyledRoot, Container, Filler, Inner } from './style';

function ProgressBar({ allowPercentage }) {
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

  return (
    <StyledRoot>
      <Container
        color={!IsAllowMax ? barcolor.max.barGround : barcolor.min.barGround}
      >
        {Boolean(disAllowPercentage) && (
          <Inner color={!IsAllowMax ? barcolor.max.allow : barcolor.min.allow}>
            불허 {disAllowPercentage}%
          </Inner>
        )}
        {Boolean(allowPercentage) && (
          <Filler
            voted={allowPercentage}
            barGround={
              IsAllowMax ? barcolor.max.barGround : barcolor.min.barGround
            }
          >
            <Inner color={IsAllowMax ? barcolor.max.allow : barcolor.min.allow}>
              허 {allowPercentage}%
            </Inner>
          </Filler>
        )}
      </Container>
    </StyledRoot>
  );
}

export default ProgressBar;
