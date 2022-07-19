/* eslint-disable import/no-unresolved */
import styled from 'styled-components';
import { applyMediaQuery } from 'styles/mediaQuery';

const StyledRoot = styled.article``;
const Button = styled.button`
  width: 3.5rem;
  height: 3.5rem;
  color: ${({ theme: { color } }) => color.white};
  background-color: ${({ theme: { color } }) => color.greenDarker};
  border-radius: 0.6rem;
`;

const VoteSection = styled.section`
  width: 68rem;
  ${applyMediaQuery('mobile')} {
    width: 100%;
  }
`;

const PC = styled.div`
  ${applyMediaQuery('mobile')} {
    display: none;
    width: fit-content;
  }
`;

const Mobile = styled.div`
  display: none;
  ${applyMediaQuery('mobile')} {
    display: block;
  }
`;
export { StyledRoot, Button, VoteSection, PC, Mobile };
