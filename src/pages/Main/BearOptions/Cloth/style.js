import styled from 'styled-components';

const StyledRoot = styled.div`
  position: relative;
  font-family: 'Cafe24Ssurround';
  font-size: ${({ theme: { font } }) => font.size.semiSmall};
  font-weight: ${({ theme: { font } }) => font.weight.Bold};
  color: ${({ theme: { color } }) => color.white};
  z-index: 100;
  left: 8.7rem;
  top: 6.8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.p`
  padding-bottom: 2.4rem;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    padding: 0.3rem 0;
  }
`;

export { StyledRoot, Title, Content };
