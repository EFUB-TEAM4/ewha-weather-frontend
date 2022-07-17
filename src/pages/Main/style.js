/* eslint-disable import/no-unresolved */
import styled from 'styled-components';
import { applyMediaQuery } from 'styles/mediaQuery';

const StyledRoot = styled.div`
  height: 100vh;
  padding: 5rem;
  background-color: ${({ theme: { color } }) => color.greenLightest};
  ${applyMediaQuery('mobile')} {
    padding: 0.5rem 2.8rem;
    height: auto;
  }
`;

const MainRoot = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.span`
  color: ${({ theme: { color } }) => color.greenDarker};
  font-family: 'Cafe24Ssurround';
  font-size: ${({ theme: { font } }) => font.size.semiMedium};
  font-weight: ${({ theme: { font } }) => font.weight.bold};
`;

const MainContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 3.4rem 30rem;
  ${applyMediaQuery('mobile')} {
    padding: 5.6rem 2.8rem;
  }
`;

const TitleSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  ${applyMediaQuery('mobile')} {
    span:nth-child(1) {
      display: none;
    }
  }
`;

const ContentSection = styled.section`
  display: flex;
  flex-direction: row;
  padding: 3rem 0;
  ${applyMediaQuery('mobile')} {
    flex-direction: column;
  }
`;

export {
  StyledRoot,
  MainRoot,
  Title,
  MainContainer,
  TitleSection,
  ContentSection,
};
