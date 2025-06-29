// * Library
import { useQuery } from '@tanstack/react-query';

// * Stores
import { useDistrictStore } from '@stores/useDistrictStore';

// * Utils
import { getCurrentWeather, getHourlyForecast, getWeeklyForecast } from '@utils/api/weatherApi';

export const useGetCurrentWeather = () => {
  const { currentDistrict } = useDistrictStore();

  return useQuery({
    queryKey: ['currentWeather', currentDistrict],
    queryFn: () => getCurrentWeather(),
  });
};
export const useGetHourlyForecast = () => {
  return useQuery({
    queryKey: ['hourlyForecast'],
    queryFn: () => getHourlyForecast(),
  });
};
export const useGetWeeklyForecast = () => {
  return useQuery({
    queryKey: ['weeklyForecast'],
    queryFn: () => getWeeklyForecast(),
  });
};
