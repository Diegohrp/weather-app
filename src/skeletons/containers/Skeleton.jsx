import React from 'react';
import { CurrentDaySkel } from '../CurrentDaySkel';
import { DetailsSkel } from '../DetailsSkel';
import { HourlyWeatherSkel } from '../HourlyWeatherSkel';
import { LocButtonSkel } from '../LocButtonSkel';
import { WeekSkel } from '../WeekSkel';
import { MapSkel } from '../MapSkel';
function Skeleton() {
  return (
    <>
      <CurrentDaySkel />
      <LocButtonSkel />
      <HourlyWeatherSkel />
      <WeekSkel />
      <DetailsSkel />
      <MapSkel />
    </>
  );
}

export { Skeleton };
