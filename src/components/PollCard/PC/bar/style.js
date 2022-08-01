/* eslint-disable import/no-unresolved */
import styled from 'styled-components';
import { colors } from 'styles/styleOptions';

const StyledRoot = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Container = styled.div`
  width: 16.3rem;
  height: 4rem;
  background-color: ${({ theme: { color } }) => color.white};
  border-radius: 0.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;

  span {
    padding: 0 1.5rem;
    z-index: 1000;
    position: absolute;
    right: 0;
  }
`;

const Filler = styled.div`
  height: 100%;
  width: ${props => (props.voted ? `${props.voted}%` : '8rem')};
  // width: 60%;
  background-color: ${props => (props.voted ? props.barGround : colors.white)};
  font-size: ${({ theme: { font } }) => font.size.micro};
  font-weight: ${({ theme: { font } }) => font.weight.semiBold};
  border-radius: inherit;
  text-align: left;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  span {
    padding: 0 1.5rem;
    left: 0;
  }
`;

const Inner = styled.span`
  color: ${props => props.color};
`;

export { StyledRoot, Container, Filler, Inner };
