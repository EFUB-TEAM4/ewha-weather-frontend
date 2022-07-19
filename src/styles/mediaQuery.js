/* eslint-disable import/no-unresolved */
import {deviceQuery} from 'constants/deviceInfo';

const { mobile, tablet, desktop } = deviceQuery;

export const deviceMediaQuery = {
  mobile: `screen and ${mobile}`,
  tablet: `screen and ${tablet}`,
  desktop: `screen and ${desktop}`,
};

export const applyMediaQuery = device => `@media ${deviceMediaQuery[device]}`;
