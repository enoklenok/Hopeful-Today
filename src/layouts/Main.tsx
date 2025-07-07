// * React
import { useEffect } from 'react';

// * Constnats
import { LOCAL_STORAGE_CURRENT_DAYTIME } from '@constants/localStorage';

// * Components
import { WeatherInfo, Character } from '@components';

// * Hooks
import { useGetCurrentWeather } from '@hooks/useWeahterHook';
import { useGetSunTime } from '@hooks/useSunTimeHook';
import { useGetPm } from '@hooks/usePmHook';

// * Utils
import { convertByPm10Status, findByDistrict } from '@utils/pm/pmUtils';
import { parseRiseSetStatus } from '@utils/sumTime/sunTimeUtils';
import {
  convertByPrecipitationStatus,
  findByPrecipitation,
  findByTemperature,
} from '@utils/weather/weatherUtils';

// * Stores
import { usePmStore } from '@stores/usePmStore';
import { useSunTimeStore } from '@stores/useSunTimeStore';
import { useWeatherStore } from '@stores/useWeatherStore';

const Main = () => {
  const { setCurrentPm10Status } = usePmStore();
  const { setIsDayTime } = useSunTimeStore();
  const { setIsCurrentRaining, setIsCurrentSnowing, setCurrentTemperature } = useWeatherStore();

  const { data: currentWeather, isPending: isCurrentWeatherPending } = useGetCurrentWeather();
  const { data: todaySunTime, isPending: todaySunTimePending } = useGetSunTime();
  const { data: currentPm, isPending: isCurrentPmPending } = useGetPm();

  useEffect(() => {
    if (!isCurrentPmPending) {
      const findedPm10Data = findByDistrict(currentPm, '강남구');
      setCurrentPm10Status(convertByPm10Status(findedPm10Data?.pm10Value));
    }
  }, [currentPm, isCurrentPmPending, setCurrentPm10Status]);

  useEffect(() => {
    if (!todaySunTimePending) {
      const { isDaytime } = parseRiseSetStatus(todaySunTime?.sunrise);
      setIsDayTime(isDaytime);
      localStorage.setItem(LOCAL_STORAGE_CURRENT_DAYTIME, isDaytime ? 'day' : 'night');
    }
  }, [todaySunTime, todaySunTimePending, setIsDayTime]);

  useEffect(() => {
    if (!isCurrentWeatherPending) {
      const findedPrecipitation = findByPrecipitation(currentWeather)?.obsrValue;
      const { isRaining, isSnowing } = convertByPrecipitationStatus(findedPrecipitation);
      setIsCurrentRaining(isRaining);
      setIsCurrentSnowing(isSnowing);
      setCurrentTemperature(findByTemperature(currentWeather)?.obsrValue ?? '');
    }
  }, [
    currentWeather,
    isCurrentWeatherPending,
    setCurrentTemperature,
    setIsCurrentRaining,
    setIsCurrentSnowing,
  ]);

  return (
    <main className="h-full px-4 py-3 relative">
      <Character />
      <WeatherInfo />
    </main>
  );
};

export default Main;
