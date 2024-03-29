import styled from 'styled-components';

const StyledRoot = styled.div`
  width: 100%;
  font-size: ${({ theme: { font } }) => font.size.micro};
  font-weight: ${({ theme: { font } }) => font.weight.semiBold};
`;

const Container = styled.div`
  height: 2.4rem;
  background-color: ${props => props.color};
  border-radius: 0.6rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  span {
    padding: 0.4rem 0.8rem;
  }
`;

const Filler = styled.div`
  height: 100%;
  width: ${props => `${props.voted}%`};
  background-color: ${props => props.barGround};
  border-top-right-radius: 0.6rem;
  border-bottom-right-radius: 0.6rem;
  border-top-left-radius: ${props => (props.voted === 100 ? '0.6rem' : '0rem')};
  border-bottom-left-radius: ${props =>
    props.voted === 100 ? '0.6rem' : '0rem'};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

const Inner = styled.span`
  color: ${props => props.color};
`;

export { StyledRoot, Container, Filler, Inner };
