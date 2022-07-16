/* eslint-disable import/no-unresolved */
import styled from 'styled-components';
import { applyMediaQuery } from 'styles/mediaQuery';

const StyledRoot = styled.div`
  min-height: 100vh;
  padding: 5rem 15vw;
  ${applyMediaQuery('mobile')} {
    padding: 5rem 10vw;
  }
  background-color: ${({ theme: { color } }) => color.greenDarker};
`;

const DesktopHeader = styled.div`
  width: 100%;
  display: flex;
  ${applyMediaQuery('mobile')} {
    display: none;
  }
  justify-content: flex-end;
`;

const LogoutButton = styled.button`
  background-color: ${({ theme: { color } }) => color.white};
  height: 3rem;
  padding: 0 1.5rem;
  border-radius: 2rem;
  font-size: ${({ theme: { font } }) => font.size.micro};
  font-weight: ${({ theme: { font } }) => font.weight.bold};
  ${applyMediaQuery('mobile')} {
    width: 80vw;
    height: 5rem;
    border-radius: 0.5rem;
    margin-top: 20rem;
    color: ${({ theme: { color } }) => color.greenDarker};
    font-size: ${({ theme: { font } }) => font.size.small};
    font-family: 'Noto Sans';
  }
`;

const MobileHeader = styled.div`
  width: 100%;
  display: flex;
  ${applyMediaQuery('desktop')} {
    display: none;
  }
`;

const BackButton = styled.img`
  width: 3rem;
  height: 3rem;
`;

const UserWrapper = styled.div`
  height: 5rem;
  display: flex;
  flex-direction: row;
  margin: 3rem 0;
  ${applyMediaQuery('mobile')} {
    margin: 5rem 0;
  }
`;

const UserTextWrapper = styled.div`
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 1.5rem;
`;

const UserIcon = styled.img`
  width: 5rem;
  height: 5rem;
`;

const NameText = styled.p`
  color: ${({ theme: { color } }) => color.white};
  font-family: 'Cafe24Ssurround';
  font-size: ${({ theme: { font } }) => font.size.small};
  ${applyMediaQuery('mobile')} {
    font-size: ${({ theme: { font } }) => font.size.semiMedium};
  }
  font-weight: ${({ theme: { font } }) => font.weight.medium};
`;

const EmailText = styled.p`
  color: ${({ theme: { color } }) => color.white};
  font-family: 'Noto Sans';
  font-size: ${({ theme: { font } }) => font.size.micro};
  ${applyMediaQuery('mobile')} {
    font-size: ${({ theme: { font } }) => font.size.small};
  }
  font-weight: ${({ theme: { font } }) => font.weight.medium};
`;

const MobileFooter = styled.div`
  width: 100%;
  display: flex;
  ${applyMediaQuery('desktop')} {
    display: none;
  }
  justify-content: center;
`;

export {
  StyledRoot,
  DesktopHeader,
  LogoutButton,
  MobileHeader,
  BackButton,
  UserWrapper,
  UserTextWrapper,
  UserIcon,
  NameText,
  EmailText,
  MobileFooter,
};
