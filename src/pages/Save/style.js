/* eslint-disable import/no-unresolved */
import styled from 'styled-components';
import { applyMediaQuery } from 'styles/mediaQuery';

const StyledRoot = styled.div`
  padding: 5rem;
  width: 100vw;
  min-height: 100vh;
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
      width: 80vw;
      height: 90%;
    }
  }
`;

const HeaderIconBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  ${applyMediaQuery('mobile')} {
    display: none;
  }
`;

const BackButton = styled.img`
  width: 3rem;
  height: 3rem;
`;

const Text = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 3rem;
  background-color: ${({ theme: { color } }) => color.greenDarker};
  .backbutton {
    display: none;
  }
  ${applyMediaQuery('mobile')} {
    top: 0;
    padding-top: 4rem;
    padding-bottom: 2rem;
    position: fixed;
    flex-direction: row;
    .backbutton {
      display: flex;
      position: absolute;
      left: 10vw;
    }
  }
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
  height: 55rem;
  background-color: ${({ theme: { color } }) => color.white};
  border-radius: 1.4rem;
  ${applyMediaQuery('mobile')} {
    margin-top: 4rem;
  }
`;

const DateText = styled.p`
  padding: 3.5rem 0rem 2.7rem 10rem;
  font-family: 'Cafe24Ssurround';
  font-size: ${({ theme: { font } }) => font.size.semiMedium};
  color: ${({ theme: { color } }) => color.greenDarker};
  ${applyMediaQuery('mobile')} {
    font-family: 'Noto';
    font-size: ${({ theme: { font } }) => font.size.regular};
    font-weight: ${({ theme: { font } }) => font.weight.semiBold};
    padding: 2.6rem 0rem 2rem 2rem;
  }
`;

const HorizonLine = styled.hr`
  width: ${props => props.width};
  height: 0.2rem;
  border: 0;
  background: ${({ theme: { color } }) => color.greenLighter};
  ${applyMediaQuery('mobile')} {
    width: ${props => (props.isShorter ? '75vw' : props.width)};
  }
`;

const HorizonLineBottom = styled.hr`
  width: ${props => props.width};
  height: 0.2rem;
  border: 0;
  background: ${({ theme: { color } }) => color.greenLighter};
  ${applyMediaQuery('mobile')} {
    display: none;
  }
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
  ${applyMediaQuery('mobile')} {
    padding: 1rem;
    align-items: center;
    flex-direction: column;
    .bear {
      margin-bottom: 2rem;
    }
  }
`;

const RecordBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  ${applyMediaQuery('mobile')} {
    padding-left: 0;
    textarea {
      width: 75vw;
      height: 30rem;
    }
  }
`;

const DeskTopWeatherBox = styled.div`
  width: 42rem;
  height: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${applyMediaQuery('mobile')} {
    display: none;
  }
`;

const MobileWeatherBox = styled.div`
  width: 70vw;
  height: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  .div {
    height: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  ${applyMediaQuery('desktop')} {
    display: none;
  }
`;

const TemBox = styled.div`
  display: flex;
`;

const Temperature = styled.p`
  font-size: ${props =>
    props.isSmall
      ? ({ theme: { font } }) => font.size.small
      : ({ theme: { font } }) => font.size.large};
  font-weight: ${({ theme: font }) => font.bold};
  font-family: 'Noto Sans';
  color: ${({ theme: { color } }) => color.greenDarker};
  margin: 0;
  ${applyMediaQuery('mobile')} {
    font-size: ${props =>
      props.isSmall
        ? ({ theme: { font } }) => font.size.micro
        : ({ theme: { font } }) => font.size.large};
  }
`;

const VerticalLine = styled.hr`
  border: 0;
  border-left: 0.2rem solid ${({ theme: { color } }) => color.greenLighter};
  height: 70%;
  width: 0.05rem;
  margin: 0;
  background: ${({ theme: { color } }) => color.greenLighter};
`;

const ButtonBox = styled.div`
  width: 100rem;
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  ${applyMediaQuery('mobile')} {
    width: 80vw;
  }
`;

export {
  StyledRoot,
  HeaderIconBox,
  BackButton,
  Text,
  SubText,
  MainText,
  MainBox,
  DateText,
  HorizonLine,
  HorizonLineBottom,
  DeskTopWeatherBox,
  MobileWeatherBox,
  ContentBox,
  RecordBox,
  ButtonBox,
  TemBox,
  Temperature,
  VerticalLine,
};
