// * Library
import clsx from 'clsx';

import FireIcon from '@assets/fire.svg?react';

// * Constants
import { DEFAULT_TIME_OF_DAY } from '@constants/constants';

// * Utils
import { convertByWeatherStatus } from '@utils/weather/weatherUtils';

// * Stores
import { useTimeOfDayStore } from '@stores/useTimeOfDay';
import { useWeatherStore } from '@stores/useWeatherStore';

const WeatherStatus = () => {
  const { timeOfDay } = useTimeOfDayStore();
  const { currentTemperature } = useWeatherStore();

  const weatherStatusClassName = clsx(
    'text-2xl',
    'font-bold',
    timeOfDay === DEFAULT_TIME_OF_DAY ? 'text-black' : 'text-white',
  );

  return (
    <div className="flex w-fit items-center gap-2 bg-red-500/30 rounded-md backdrop-blur-xs px-2 py-1 mb-1">
      <FireIcon className="w-7 h-7" />
      <div className={weatherStatusClassName}>{convertByWeatherStatus(currentTemperature)}</div>
    </div>
  );
};

export default WeatherStatus;
