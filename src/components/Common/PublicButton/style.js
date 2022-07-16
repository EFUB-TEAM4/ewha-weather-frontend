/* eslint-disable import/no-unresolved */
import styled from 'styled-components';
import { applyMediaQuery } from 'styles/mediaQuery';

const StyledRoot = styled.button`
  background-color: ${props =>
    props.disabled
      ? ({ theme: { color } }) => color.greenLighter
      : ({ theme: { color } }) => color.greenDarker};
  padding: 0 2rem;
  ${applyMediaQuery('mobile')} {
    width: 75vw;
  }
  height: 4rem;
  border-radius: 0.5rem;
`;

const Text = styled.p`
  color: ${({ theme: { color } }) => color.white};
  font-family: 'Noto Sans';
  font-size: ${({ theme: { font } }) => font.size.micro};
  font-weight: ${({ theme: { font } }) => font.weight.bold};
`;

export { StyledRoot, Text };
