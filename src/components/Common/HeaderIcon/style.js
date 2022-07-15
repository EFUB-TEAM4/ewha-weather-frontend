/* eslint-disable import/no-unresolved */
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledRoot = styled.div`
  position: relative;
  width: 18rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const ToolTipArrow = styled.div`
  position: absolute;
  width: 0;
  height: 0;
  border-bottom: 1rem solid ${({ theme: { color } }) => color.white};
  border-top: 0.5rem solid transparent;
  border-left: 0.6rem solid transparent;
  border-right: 0.6rem solid transparent;
  top: 4rem;
  left: 15.4rem;
`;

const ToolTip = styled.div`
  position: absolute;
  top: 5.5rem;
  left: 0;
  width: 18rem;
  height: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 0.5rem;
  padding: 0.5rem 0;
  box-sizing: content-box;
  background-color: ${({ theme: { color } }) => color.white};
  box-shadow: 0 0 6px 0 rgb(84 184 119 / 25%);
`;

const IconButton = styled.button`
  width: 4rem;
  height: 4rem;
`;

const Image = styled.img`
  width: 4rem;
  height: 4rem;
`;

const StyledLink = styled(NavLink)`
  color: #3b3829;
  font-family: 'Cafe24Ssurround';
  font-size: ${({ theme: { font } }) => font.size.small};
  font-weight: ${({ theme: { font } }) => font.weight.bold};
  margin-top: 0.2rem;
`;

const Line = styled.hr`
  width: 100%;
  border: 0;
  height: 0.1rem;
  margin: 0;
  background: ${({ theme: { color } }) => color.greenLightest};
`;

const LogoutButton = styled.button`
  width: 9rem;
  height: 3rem;
  border-radius: 2rem;
  background-color: #3b3829;
  color: ${({ theme: { color } }) => color.white};
  font-family: 'Cafe24Ssurround';
  font-size: ${({ theme: { font } }) => font.size.micro};
  font-weight: ${({ theme: { font } }) => font.weight.bold};
`;

export {
  StyledRoot,
  ToolTipArrow,
  ToolTip,
  IconButton,
  Image,
  StyledLink,
  Line,
  LogoutButton,
};
