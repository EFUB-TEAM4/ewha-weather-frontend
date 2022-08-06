/* eslint-disable import/no-unresolved */
import styled from 'styled-components';
import { applyMediaQuery } from 'styles/mediaQuery';

const StyledRoot = styled.div`
  background-color: ${({ theme: { color } }) => color.greenDarker};
`;

const CalendarContainer = styled.div`
  width: 70vw;
  ${applyMediaQuery('mobile')} {
    width: 80vw;
  }
  margin: auto;
  padding: 0 3rem;
  ${applyMediaQuery('mobile')} {
    padding: 0 1rem;
  }
  border-radius: 1rem;
  background-color: ${({ theme: { color } }) => color.white};
  .react-calendar__navigation {
    display: flex;
    .react-calendar__navigation__label {
      font-family: 'Cafe24Ssurround';
      font-size: ${({ theme: { font } }) => font.size.small};
      font-weight: ${({ theme: { font } }) => font.weight.bold};
      color: ${({ theme: { color } }) => color.greenDarker};
    }
    .react-calendar__navigation__arrow {
      flex-grow: 0.01;
      color: ${({ theme: { color } }) => color.greenDarker};
      font-size: ${({ theme: { font } }) => font.size.medium};
    }
  }
  .react-calendar__month-view__weekdays {
    padding: 1rem 0;
    border-radius: 1rem;
    text-align: center;
    background-color: ${({ theme: { color } }) => color.greenLightest};
    color: ${({ theme: { color } }) => color.greyDarkest};
    font-family: 'Noto Sans';
    font-size: ${({ theme: { font } }) => font.size.micro};
    font-weight: ${({ theme: { font } }) => font.weight.bold};
  }
  .react-calendar__month-view__weekdays__weekday abbr {
    font-family: 'Noto Sans';
    text-decoration: none;
  }
  .react-calendar__month-view__days__day abbr {
    font-family: 'Noto Sans';
  }
  .react-calendar__tile--now {
    font-family: 'Noto Sans';
    color: ${({ theme: { color } }) => color.greenDarker};
  }
  .react-calendar__tile--active abbr {
    font-family: 'Noto Sans';
    background-color: ${({ theme: { color } }) => color.greenDarker};
    color: ${({ theme: { color } }) => color.greenLightest};
    border-radius: 50%;
    display: inline-block;
    width: 2rem;
    height: 2rem;
    line-height: 2rem;
    text-align: center;
  }
  .react-calendar__tile {
    margin: 0;
    border: 0;
  }
  button {
    background-color: ${({ theme: { color } }) => color.white};
    height: 7rem;
    border: 0;
  }
`;

const Image = styled.img`
  width: 2.5rem;
  height: 2.5rem;
`;

const Text = styled.p`
  color: ${({ theme: { color } }) => color.white};
  font-family: 'Noto Sans';
  font-size: ${({ theme: { font } }) => font.size.micro};
  font-weight: ${({ theme: { font } }) => font.weight.bold};
`;

export { StyledRoot, CalendarContainer, Image, Text };
