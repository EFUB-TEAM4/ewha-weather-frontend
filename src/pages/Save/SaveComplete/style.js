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

const ButtonBox = styled.div`
  ${applyMediaQuery('mobile')} {
    button {
      margin-bottom: 3rem;
      margin-left: 26.4rem;
    }
  }
`;

const ExitButton = styled.img`
  display: none;

  ${applyMediaQuery('mobile')} {
    display: block;
    width: 3rem;
    height: 3rem;
  }
`;

const MainText = styled.p`
  font-family: 'Cafe24Ssurround';
  font-size: ${({ theme: { font } }) => font.size.large};
  color: ${({ theme: { color } }) => color.white};

  margin-bottom: 5rem;

  ${applyMediaQuery('mobile')} {
    font-size: ${({ theme: { font } }) => font.size.semiMedium};
    margin-bottom: 4rem;
  }
`;

const ImgBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40rem;
  height: 40rem;
  background-color: ${({ theme: { color } }) => color.white};
  border-radius: 0.6rem;
  margin: 0rem;
  padding: 2.5rem 0rem 0rem 2.5rem;

  img {
    width: 93%;
    height: 93%;
  }

  ${applyMediaQuery('mobile')} {
    width: 27.8rem;
    height: 27.8rem;
    img {
      width: 93%;
      height: 93%;
    }
  }
`;

const HomeButton = styled.button`
  width: 20rem;
  height: 5rem;
  margin-top: 5rem;
  border-radius: 0.6rem;
  background-color: ${({ theme: { color } }) => color.white};

  ${applyMediaQuery('mobile')} {
    margin-top: 3rem;
    width: 27.8rem;
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
  ButtonBox,
  ExitButton,
  MainText,
  ImgBox,
  HomeButton,
  Text,
};
