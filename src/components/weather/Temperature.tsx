// * Library
import clsx from 'clsx';

// * Constants
import { DEFAULT_TIME_OF_DAY } from '@constants/constants';

// * Stores
import { useTimeOfDayStore } from '@stores/useTimeOfDay';
import { useWeatherStore } from '@stores/useWeatherStore';

const Temperature = () => {
  const { currentTemperature } = useWeatherStore();
  const { timeOfDay } = useTimeOfDayStore();
  const temeperatureClassName = clsx(
    'text-5xl',
    'font-bold',
    'mb-2',
    timeOfDay === DEFAULT_TIME_OF_DAY ? 'text-black' : 'text-white',
  );

  return <div className={temeperatureClassName}>{currentTemperature}°</div>;
};

export default Temperature;
