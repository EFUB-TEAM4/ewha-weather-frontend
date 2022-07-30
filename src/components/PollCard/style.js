/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

const Text = styled.p`
  // font-family: 'Nato Sans';
  color: ${({ theme: { color } }) => color.greenDarker};
  font-weight: ${({ theme: { font } }) => font.weight.medium};
  font-size: ${({ theme: { font } }) => font.size.semiSmall};
  padding: 0.5rem 0;
  span {
    font-weight: ${({ theme: { font } }) => font.weight.bold};
  }
`;

export { Text };
