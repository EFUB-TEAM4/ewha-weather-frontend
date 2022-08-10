/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
import { atom, selector } from 'recoil';
import { GetCurrentWeather } from 'apis/Eweather.apis';

export const CurrentState = atom({
  key: 'CurrentState',
  default: [],
});

export const GetCurrent = selector({
  key: 'CurrentState/get',
  get: async ({ get }) => {
    get(CurrentState);
    const {
      ptyResponseDto,
      skyResponseDto,
      bearResponseDto,
      seasonResponseDto,
      iconResponseDto,
      minTemperature,
      currentTemperature,
      maxTemperature,
      rainfallPercentage,
    } = await GetCurrentWeather();
    const response = {
      AvaterState: {
        ptyResponseDto,
        skyResponseDto,
        bearResponseDto,
        seasonResponseDto,
      },
      CurrentWeather: {
        iconResponseDto,
        minTemperature,
        currentTemperature,
        maxTemperature,
        rainfallPercentage,
      },
    };
    return response;
  },
  set: ({ set }, newValue) => {
    set(CurrentState, newValue);
  },
});
