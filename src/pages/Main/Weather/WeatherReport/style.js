import styled from 'styled-components';

const StyledRoot = styled.section`
  background-color: ${({ theme: { color } }) => color.white};
  padding: 2.9rem 2rem 2.4rem 2rem;
  width: 31.9rem;
  height: 21.3rem;
  border-radius: 0.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  // padding: 1rem 0;
  border-bottom: 0.1rem solid ${({ theme: { color } }) => color.greenLightest};
  // font-family: 'Nato Sans Display';
  width: 100%;
  color: ${({ theme: { color } }) => color.greenDarker};
  img {
    width: 9.7rem;
    height: 9.7rem;
    margin-right: 2.2rem;
  }
`;

const CurrentTemp = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 1.5rem 0;
  span:nth-child(1) {
    font-weight: ${({ theme: { font } }) => font.weight.semiBold};
    font-size: ${({ theme: { font } }) => font.size.extralarge};
  }
  span:nth-child(2) {
    font-weight: ${({ theme: { font } }) => font.weight.medium};
    font-size: ${({ theme: { font } }) => font.size.regular};
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  padding-top: 1.7rem;
  // padding-bottom: 0;
  color: ${({ theme: { color } }) => color.greenDarker};
  font-weight: ${({ theme: { font } }) => font.weight.semiBold};
  font-size: ${({ theme: { font } }) => font.size.small};
`;

const TempInfo = styled.div`
  margin-right: 1.2rem;
`;

const RainInfo = styled.div``;

export { StyledRoot, Header, CurrentTemp, Section, TempInfo, RainInfo };
