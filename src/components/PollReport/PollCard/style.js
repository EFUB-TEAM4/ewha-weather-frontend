/* eslint-disable import/no-unresolved */
import styled from 'styled-components';

const StyledRoot = styled.section`
  width: 21.2rem;
  height: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 2.5rem 0;
  filter: drop-shadow(${({ theme: { boxShadow } }) => boxShadow.elevate});
  background-color: ${({ theme: { color } }) => color.greenLighter};
  border-radius: 0.6rem;

`;

const AskSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Text = styled.p`
  font-family: 'Nato Sans';
  color: ${({ theme: { color } }) => color.greenDarker};
  font-weight: ${({ theme: { font } }) => font.weight.medium};
  font-size: ${({ theme: { font } }) => font.size.semiSmall};
  padding: 0.5rem 0;
  span {
    font-weight: ${({ theme: { font } }) => font.weight.bold};
  }
`;

const PollBtnSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 9.1rem;
`;

const PollBtn = styled.button`
  width: 16.3rem;
  height: 4rem;
  border-radius: 0.6rem;
  img {
    display: block;
    margin: 0px auto;
  }
  filter: drop-shadow(${({ theme: { boxShadow } }) => boxShadow.elevate});
  background-color: ${({ theme: { color } }) => color.white};
  &:hover {
    background-color: ${({ theme: { color } }) => color.greenDarker};
  }
`;

export { StyledRoot, AskSection, Text, PollBtnSection, PollBtn };
