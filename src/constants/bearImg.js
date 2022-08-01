/* eslint-disable import/no-unresolved */
import {
  RainPTY,
  ShowerPTY,
  SnowPTY,
  SnowRainPTY,
  SpringSeason,
  SummerSeason,
  FallSeason,
  WinterSeason,
  CloudDaySky,
  CloudNightSky,
  FoggyDaySky,
  FoggyNightSky,
  SunnyDaySky,
  SunnyNightSky,
  None10,
  None20,
  None30,
  None40,
  None50,
  None60,
  None70,
  None80,
  Rain11,
  Rain21,
  Rain31,
  Rain41,
  Rain51,
  Rain61,
  Rain71,
  Rain81,
} from 'assets';

const Pty = {
  비: { img: RainPTY },
  '비/눈': { img: SnowRainPTY },
  눈: { img: SnowPTY },
  소나기: { img: ShowerPTY },
};

const Season = {
  봄: { img: SpringSeason },
  여름: { img: SummerSeason },
  가을: { img: FallSeason },
  겨울: { img: WinterSeason },
};

const Sky = {
  낮_맑음: { img: SunnyDaySky },
  밤_맑음: { img: SunnyNightSky },
  밤_흐림: { img: FoggyNightSky },
  낮_흐림: { img: FoggyDaySky },
  낮_구름많음: { img: CloudDaySky },
  밤_구름많음: { img: CloudNightSky },
};

const NoneBear = {
  '-20_4': { img: None80 },
  '5_8': { img: None70 },
  '9_11': { img: None60 },
  '12_16': { img: None50 },
  '17_19': { img: None40 },
  '20_22': { img: None30 },
  '23_27': { img: None20 },
  '28_40': { img: None10 },
};

const RainBear = {
  '-20_4': { img: Rain81 },
  '5_8': { img: Rain71 },
  '9_11': { img: Rain61 },
  '12_16': { img: Rain51 },
  '17_19': { img: Rain41 },
  '20_22': { img: Rain31 },
  '23_27': { img: Rain21 },
  '28_40': { img: Rain11 },
};

export { Pty, Season, Sky, NoneBear, RainBear };
