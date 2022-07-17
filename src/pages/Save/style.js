/* eslint-disable import/no-unresolved */
import styled from 'styled-components';
import { applyMediaQuery } from 'styles/mediaQuery';

const StyledRoot = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    ${({ theme: { color } }) => color.greenDarker} 50%,
    ${({ theme: { color } }) => color.greenLightest} 50%
  );

  ${applyMediaQuery('mobile')} {
    .subText {
      display: none;
    }

    .mainbox {
      width: 85%;
      height: 90%;
    }
  }
`;

const Text = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 3rem;
`;

const SubText = styled.p`
  font-family: 'Noto Sans';
  font-size: ${({ theme: { font } }) => font.size.semiSmall};
  color: ${({ theme: { color } }) => color.white};
  padding-bottom: 3rem;
`;

const MainText = styled.p`
  font-family: 'Cafe24Ssurround';
  font-size: ${({ theme: { font } }) => font.size.semiLarge};
  color: ${({ theme: { color } }) => color.white};
`;

const MainBox = styled.div`
  width: 100rem;
  height: 54rem;
  background-color: ${({ theme: { color } }) => color.white};
  border-radius: 1.4rem;

  p {
    padding: 3.5rem 0rem 2.7rem 10rem;
    font-family: 'Cafe24Ssurround';
    font-size: ${({ theme: { font } }) => font.size.semiMedium};
    color: ${({ theme: { color } }) => color.greenDarker};
  }

  ${applyMediaQuery('mobile')} {
    p {
      font-family: 'Noto';
      font-size: ${({ theme: { font } }) => font.size.regular};
      font-weight: ${({ theme: { font } }) => font.weight.semiBold};
      padding: 2.6rem 0rem 2rem 2rem;
    }
  }
`;

const HorizonLine = styled.hr`
  width: ${props => props.width};
  border: solid 0.1rem ${({ theme: { color } }) => color.greenLighter};
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 7.8rem;

  .bear {
    width: 25rem;
    height: 25rem;
    display: block;
  }
`;

const RecordBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 5rem;

  .weather {
    width: 37rem;
    padding: 1rem;
  }

  textarea {
    padding: 2rem 0rem 0rem 1rem;
    width: 96%;
    height: 100%;
    outline: none;
    resize: none;
    overflow: visible;
    border: 0px solid ${({ theme: color }) => color.grey};
    word-wrap: break-word;
  }

  textarea::placeholder {
    font-family: 'Noto';
    font-weight: ${({ theme: font }) => font.light};
    color: ${({ theme: { color } }) => color.grey};
  }
`;

export {
  StyledRoot,
  Text,
  SubText,
  MainText,
  MainBox,
  HorizonLine,
  ContentBox,
  RecordBox,
};
