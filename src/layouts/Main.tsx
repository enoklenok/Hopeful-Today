// * React
import { useEffect } from 'react';

// * Components
import { TopInfo, Character, BottomInfo } from '@components';

// * Hooks
import { useGetPm } from '@hooks/usePmHook';
import { useGetCurrentWeather } from '@hooks/useWeahterHook';

// * Utils
import { convertByPm10Status, findByDistrict } from '@utils/pm/pmUtils';
import {
  convertByPrecipitationStatus,
  findByPrecipitation,
  findByTemperature,
} from '@utils/weather/weatherUtils';

// * Stores
import { useDistrictStore } from '@stores/useDistrictStore';
import { usePmStore } from '@stores/usePmStore';
import { useWeatherStore } from '@stores/useWeatherStore';

const Main = () => {
  const { currentDistrict } = useDistrictStore();
  const { setCurrentPm10Status } = usePmStore();
  const { setIsCurrentRaining, setIsCurrentSnowing, setCurrentTemperature } = useWeatherStore();

  const { data: currentPm, isPending: isCurrentPmPending } = useGetPm();
  const { data: currentWeather, isPending: isCurrentWeatherPending } = useGetCurrentWeather();

  useEffect(() => {
    if (!isCurrentPmPending) {
      const findedPm10Data = findByDistrict(currentPm, currentDistrict);
      setCurrentPm10Status(convertByPm10Status(findedPm10Data?.pm10Value));
    }
  }, [currentDistrict, currentPm, isCurrentPmPending, setCurrentPm10Status]);

  useEffect(() => {
    if (!isCurrentWeatherPending) {
      const findedPrecipitation = findByPrecipitation(currentWeather)?.obsrValue;
      const { isRaining, isSnowing } = convertByPrecipitationStatus(findedPrecipitation);
      setIsCurrentRaining(isRaining);
      setIsCurrentSnowing(isSnowing);
      setCurrentTemperature(findByTemperature(currentWeather)?.obsrValue ?? "");
    }
  }, [
    currentWeather,
    isCurrentWeatherPending,
    setCurrentTemperature,
    setIsCurrentRaining,
    setIsCurrentSnowing,
  ]);

  return (
    <main className="px-4 py-3">
      <TopInfo />
      <Character />
      <BottomInfo />
    </main>
  );
};

export default Main;
