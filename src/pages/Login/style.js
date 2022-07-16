/* eslint-disable import/no-unresolved */
import styled from 'styled-components';

const StyledRoot = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme: { color } }) => color.greenDarker};
`;
const Header = styled.header`
  padding: 5rem;
`;

const Article = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BtnSection = styled.section`
  padding: 2.7rem;
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
