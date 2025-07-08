// * Library
import clsx from 'clsx';

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
    'font-semibold',
    'mb-2',
    timeOfDay === DEFAULT_TIME_OF_DAY ? 'text-black' : 'text-white',
  );

  return <div className={weatherStatusClassName}>{convertByWeatherStatus(currentTemperature)}</div>;
};

export default WeatherStatus;
