import styled from 'styled-components';

const StyledRoot = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;

  button {
    left: 1.6rem;
  }
  button:nth-child(2) {
    top: 4.1rem;
  }
  button:nth-child(3) {
    top: 10.2rem;
  }
  button:nth-child(4) {
    top: 14.8rem;
  }
`;

const OverBear = styled.div`
  width: 31.9rem;
  height: 31.9rem;
  background-color: ${({ theme: { color } }) => color.yellowDark};
  // gitcolor:black;
  position: absolute;
  border-radius: 0.6rem;
  opacity: 0.6;
`;

const OptionsSection = styled.div`
  background-color: ${({ theme: { color } }) => color.white};
  position: absolute;
  top: 5.1rem;
  left: 1.6rem;
  z-index: 100;
  border-bottom-left-radius: 0.6rem;
  border-bottom-right-radius: 0.6rem;
  width: 4rem;
  height: 9.9rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.1rem 0.8rem 0.9rem 0.8rem;
`;

const Options = styled.button`
  z-index: 100;
`;

export { StyledRoot, OverBear, Options, OptionsSection };
