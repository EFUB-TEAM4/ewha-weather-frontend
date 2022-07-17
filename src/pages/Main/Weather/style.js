/* eslint-disable import/no-unresolved */
import styled from 'styled-components';
import { applyMediaQuery } from 'styles/mediaQuery';

const StyledRoot = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${applyMediaQuery('mobile')} {
    flex-direction: column;
  }
`;
const BearSection = styled.section`
  img {
    width: 31.9rem;
    height: 31.9rem;
  }
  margin-right: 3rem;
  ${applyMediaQuery('mobile')} {
    margin-right: 0;
    margin-bottom: 3rem;
  }
`;

const WeatherSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 31.9rem;
`;

export { StyledRoot, BearSection, WeatherSection };
