import styled from 'styled-components';

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

  span {
    padding: 0 1.5rem;
  }
`;

const Filler = styled.div`
  height: 100%;
  width: ${props => `${props.voted}%`};
  // width: 60%;
  background-color: ${props => props.barGround};
  font-size: ${({ theme: { font } }) => font.size.micro};
  font-weight: ${({ theme: { font } }) => font.weight.semiBold};
  border-radius: inherit;
  text-align: left;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Inner = styled.span`
  color: ${props => props.color};
`;

export { StyledRoot, Container, Filler, Inner };
