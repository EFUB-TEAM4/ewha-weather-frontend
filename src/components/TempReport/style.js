/* eslint-disable import/no-unresolved */
import styled from 'styled-components';
import { applyMediaQuery } from 'styles/mediaQuery';

const StyledRoot = styled.section`
  border-radius: 0.6rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1.2rem 0;
  width: 100%;

  ${applyMediaQuery('mobile')} {
    padding: 3rem 0;
  }
`;

const LeftArrow = styled.button`
  padding-right: 1.3rem;
`;
const TempSection = styled.section`
  background-color: ${({ theme: { color } }) => color.white};
  overflow: hidden;
  height: 90%;
  border-radius: 0.6rem;
`;
const RightArrow = styled.button`
  padding-left: 1.3rem;
`;

export { StyledRoot, LeftArrow, TempSection, RightArrow };
