import styled from 'styled-components';

const StyledRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  height: fit-content;
  padding: 1.2rem;
  background-color: ${({ theme: { color } }) => color.white};
  img {
    padding: 0.2rem 0;
  }
`;

const Time = styled.span`
  font-family: 'Nato Sans';
  color: ${({ theme: { color } }) => color.greenDarker};
  font-weight: ${({ theme: { font } }) => font.weight.micro};
  font-size: ${({ theme: { font } }) => font.size.small};
`;

const Temp = styled.span`
  font-family: 'Nato Sans Display';
  color: ${({ theme: { color } }) => color.greenDarker};
  font-weight: ${({ theme: { font } }) => font.weight.semiBold};
  font-size: ${({ theme: { font } }) => font.size.small};
`;

export { StyledRoot, Temp, Time };
