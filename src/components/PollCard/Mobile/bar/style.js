import styled from 'styled-components';

const StyledRoot = styled.div`
  width: 100%;
  font-size: ${({ theme: { font } }) => font.size.micro};
  font-weight: ${({ theme: { font } }) => font.weight.semiBold};
`;

const Container = styled.div`
  height: 2.4rem;
  background-color: ${({ theme: { color } }) => color.greenLightest};
  border-radius: 0.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  span{
    padding : 0.4rem 0.8rem;
  }
`;

const Filler = styled.div`
height: 100%;
  width: ${props => `${props.voted}%`};
  background-color: ${props => props.barGround};
  border-radius: 0.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;

`;

const Inner = styled.span`
  color: ${props => props.color};

`;

export { StyledRoot, Container, Filler, Inner };
