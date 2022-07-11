/* eslint-disable import/no-unresolved */
import styled from "styled-components";
import { applyMediaQuery } from "styles/mediaQuery";

const StyledRoot = styled.div`
  padding: 50rem;
`;

const Text = styled.p`
  color: ${({ theme: { color } }) => color.red};
  font-family: "Noto Sans";
  font-size: ${({ theme: { font } }) => font.size.large};
  font-weight: ${({ theme: { font } }) => font.weight.light};
  ${applyMediaQuery("mobile")} {
    color: ${({ theme: { color } }) => color.greenDarkest};
  }
`;

export { StyledRoot, Text };
