import styled from 'styled-components';

const StyledRoot = styled.section`
  width: 100%;
  height: 12.1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 3.3rem 1.5rem;
  border-radius: 1rem;
  margin-bottom: 1.6rem;
  background-color: ${({ theme: { color } }) => color.greenLighter};
`;

const AskSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PollBtnSection = styled.div``;

const PollBtn = styled.div``;

export { StyledRoot, AskSection, PollBtnSection, PollBtn };
