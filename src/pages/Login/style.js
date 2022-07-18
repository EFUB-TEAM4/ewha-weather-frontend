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
  background-color: ${({ theme: { color } }) => color.greenDarker};

  ${applyMediaQuery('mobile')} {
    header {
      img {
        width: 30rem;
      }
    }
    article {
      section {
        button {
          width: 30rem;
        }
      }
    }
  }
`;
const Header = styled.header`
  padding: 5rem;
  ${applyMediaQuery('mobile')} {
    padding: 0 2.8rem;
  }
`;

const Article = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BtnSection = styled.section`
  padding: 2.7rem;
  #SignIn {
    opacity: 0%;
    position: absolute;
  }

  ${applyMediaQuery('mobile')} {
    padding: 1.5rem;
  }
`;

const LoginBtn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1.6rem 23rem;
  border-radius: 0.6rem;
  background-color: ${({ theme: { color } }) => color.white};
  color: ${({ theme: { color } }) => color.greenDarker};
  filter: drop-shadow(${({ theme: { boxShadow } }) => boxShadow.elevate});
  font-family: 'Noto Sans';
  font-weight: ${({ theme: { font } }) => font.weight.bold};
  font-size: ${({ theme: { font } }) => font.size.semiSmall};
  img {
    margin-right: 0.5rem;
  }

  ${applyMediaQuery('mobile')} {
    padding: 1.3rem 6rem;
    font-weight: ${({ theme: { font } }) => font.weight.semiBold};
  }
  font-size: ${({ theme: { font } }) => font.size.small};
`;

const CheckSection = styled.section``;

const LoginLabel = styled.label`
  font-family: 'Nato Sans Display';
  color: ${({ theme: { color } }) => color.white};
  font-weight: ${({ theme: { font } }) => font.weight.medium};
  font-size: ${({ theme: { font } }) => font.size.small};
`;

const LoginCheck = styled.input`
  color: ${({ theme: { color } }) => color.white};
  margin-right: 0.5rem;
`;

export {
  StyledRoot,
  Header,
  BtnSection,
  Article,
  LoginBtn,
  CheckSection,
  LoginCheck,
  LoginLabel,
};
