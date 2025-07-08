// * React
import { useEffect } from 'react';

// * Constnats
import { LOCAL_STORAGE_TIME_OF_DAY } from '@constants/localStorage';
import { TIME_OF_DAY_NIGHTTIME } from '@constants/constants';

// * Components
import { WeatherInfo, Character } from '@components';

// * Hooks
import { useGetCurrentWeather } from '@hooks/useWeahterHook';
import { useGetSunTime } from '@hooks/useSunTimeHook';
import { useGetPm } from '@hooks/usePmHook';

// * Utils
import { convertByPm10Status, findByDistrict } from '@utils/pm/pmUtils';
import { parseTimeOfDayStatus } from '@utils/sumTime/sunTimeUtils';
import {
  convertByPrecipitationStatus,
  findByPrecipitation,
  findByTemperature,
} from '@utils/weather/weatherUtils';

// * Stores
import { usePmStore } from '@stores/usePmStore';
import { useTimeOfDayStore } from '@stores/useTimeOfDay';
import { useWeatherStore } from '@stores/useWeatherStore';
import { DEFAULT_TIME_OF_DAY } from '@constants/constants';

const Main = () => {
  const { setCurrentPm10Status } = usePmStore();
  const { setTimeOfDay } = useTimeOfDayStore();
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
      const { currentTimeOfDay } = parseTimeOfDayStatus(
        todaySunTime?.sunrise,
        todaySunTime?.sunset,
      );
      setTimeOfDay(currentTimeOfDay);
      localStorage.setItem(
        LOCAL_STORAGE_TIME_OF_DAY,
        currentTimeOfDay === DEFAULT_TIME_OF_DAY ? currentTimeOfDay : TIME_OF_DAY_NIGHTTIME,
      );
    }
  }, [todaySunTime, todaySunTimePending]);

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
