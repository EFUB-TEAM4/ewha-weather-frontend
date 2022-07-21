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
    to top,
    ${({ theme: { color } }) => color.white} 70%,
    ${({ theme: { color } }) => color.greenDarker} 30%
  );
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

const BackButtonBox = styled.div`
  .backbutton {
    display: none;
  }

  ${applyMediaQuery('mobile')} {
    .backbutton {
      display: flex;
      position: absolute;
      left: 10vw;
      top: 10vw;
    }
  }
`;

const BackButton = styled.img`
  width: 3rem;
  height: 3rem;
`;

const Text = styled.p`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 9rem;

  ${applyMediaQuery('mobile')} {
    top: 0;
    padding-top: 11.7rem;
    position: fixed;
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

const ContentBox = styled.div`
  margin-top: 4rem;
  margin-bottom: 3rem;

  ${applyMediaQuery('mobile')} {
    margin-top: 20rem;
  }
`;

const FormBox = styled.div`
  margin-bottom: 4rem;
`;

const SubjectText = styled.p`
  display: flex;
  font-family: 'Cafe24Ssurround';
  font-size: ${({ theme: { font } }) => font.size.regular};
  color: ${({ theme: { color } }) => color.greenDarker};
  margin-bottom: 2.7rem;

  span {
    display: none;
  }

  ${applyMediaQuery('mobile')} {
    span {
      display: block;
      padding-left: 0.7rem;
      font-family: 'Cafe24SsurroundAir';
      color: ${({ theme: { color } }) => color.red};
    }
  }
`;

const Form = styled.form`
  input {
    width: 50rem;
    height: 5rem;
    outline: none;
    border: none;
    border-bottom: 2px solid ${({ theme: { color } }) => color.greenDarker};
  }

  input::placeholder {
    font-family: 'Noto';
    font-weight: ${({ theme: font }) => font.light};
    color: ${({ theme: { color } }) => color.grey};
  }

  ${applyMediaQuery('mobile')} {
    input {
      width: 43rem;
    }
  }
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
`;

export {
  StyledRoot,
  HeaderIconBox,
  Text,
  BackButton,
  BackButtonBox,
  SubText,
  MainText,
  ContentBox,
  FormBox,
  SubjectText,
  Form,
  ButtonBox,
};
