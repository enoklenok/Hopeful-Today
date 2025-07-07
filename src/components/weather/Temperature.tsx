// * Library
import clsx from 'clsx';

// * Stores
import { useSunTimeStore } from '@stores/useSunTimeStore';
import { useWeatherStore } from '@stores/useWeatherStore';

const Temperature = () => {
  const { currentTemperature } = useWeatherStore();
  const { isDayTime } = useSunTimeStore();
  const temeperatureClassName = clsx(
    'text-5xl',
    'font-bold',
    'mb-2',
    isDayTime ? 'text-black' : 'text-white',
  );

  return <div className={temeperatureClassName}>{currentTemperature}°</div>;
};

export default Temperature;
