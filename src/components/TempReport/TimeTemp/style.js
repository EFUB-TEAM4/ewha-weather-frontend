import styled from 'styled-components';

const StyledRoot = styled.div`
  background-color: ${({ theme: { color } }) => color.white};
  display: flex;
  flex-direction: row;
  padding: 0.5rem 0;
  align-items: center;
  overflow-x: scroll;
  height: 100%;
`;

const Text = styled.div``;
export { StyledRoot, Text };
