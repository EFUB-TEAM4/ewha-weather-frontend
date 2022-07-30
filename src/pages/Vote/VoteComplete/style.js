/* eslint-disable import/no-unresolved */
import styled from 'styled-components';
import { applyMediaQuery } from 'styles/mediaQuery';

const StyledRoot = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ theme: { color } }) => color.greenDarker};
`;

const MainText = styled.p`
  font-family: 'Cafe24Ssurround';
  font-size: ${({ theme: { font } }) => font.size.semiLarge};
  color: ${({ theme: { color } }) => color.white};
  margin-bottom: 10.2rem;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 56rem;
  height: 20rem;
  border-radius: 0.6rem;
  background-color: ${({ theme: { color } }) => color.greenLighter};

  ${applyMediaQuery('mobile')} {
    width: 40rem;
    height: 15rem;
  }
`;

const Clothes = styled.p`
  font-family: 'Noto';
  font-size: ${({ theme: { font } }) => font.size.semiMedium};
  color: ${({ theme: { color } }) => color.greenDarker};
  margin-bottom: 2rem;

  ${applyMediaQuery('mobile')} {
    font-size: ${({ theme: { font } }) => font.size.regular};
    margin-bottom: 1rem;
  }
`;

const Place = styled.p`
  font-family: 'Noto';
  font-size: ${({ theme: { font } }) => font.size.semiMedium};
  color: ${({ theme: { color } }) => color.greenDarker};

  ${applyMediaQuery('mobile')} {
    font-size: ${({ theme: { font } }) => font.size.regular};
  }
`;

const Params = styled.b`
  font-weight: ${({ theme: { font } }) => font.weight.bold};

  ${applyMediaQuery('mobile')} {
    font-weight: ${({ theme: { font } }) => font.weight.bold};
  }
`;

const HomeButton = styled.button`
  width: 20rem;
  height: 5rem;
  margin-top: 13.5rem;
  border-radius: 0.6rem;
  background-color: ${({ theme: { color } }) => color.white};

  ${applyMediaQuery('mobile')} {
    margin-top: 3rem;
    width: 40rem;
    height: 5rem;
  }
`;

const Text = styled.p`
  font-family: 'Cafe24Ssurround';
  font-size: ${({ theme: { font } }) => font.size.small};
  color: ${({ theme: { color } }) => color.greenDarker};

  ${applyMediaQuery('mobile')} {
    font-family: 'Noto';
    font-size: ${({ theme: { font } }) => font.size.small};
    font-weight: ${({ theme: { font } }) => font.weight.bold};
  }
`;

export {
  StyledRoot,
  MainText,
  ContentBox,
  Clothes,
  Place,
  Params,
  HomeButton,
  Text,
};
