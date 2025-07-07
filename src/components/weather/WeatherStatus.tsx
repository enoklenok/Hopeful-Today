// * Library
import clsx from 'clsx';

// * Utils
import { convertByWeatherStatus } from '@utils/weather/weatherUtils';

// * Stores
import { useSunTimeStore } from '@stores/useSunTimeStore';
import { useWeatherStore } from '@stores/useWeatherStore';

const WeatherStatus = () => {
  const { isDayTime } = useSunTimeStore();
  const { currentTemperature } = useWeatherStore();

  const weatherStatusClassName = clsx(
    'text-2xl',
    'font-semibold',
    'mb-2',
    isDayTime ? 'text-black' : 'text-white',
  );

  return <div className={weatherStatusClassName}>{convertByWeatherStatus(currentTemperature)}</div>;
};

export default WeatherStatus;
