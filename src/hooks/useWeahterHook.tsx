// * Library
import { useQuery } from '@tanstack/react-query';

// * Stores
import { useLocationStore } from '@stores/useLocationStore';

// * Utils
import { getCurrentWeather, getHourlyForecast, getWeeklyForecast } from '@utils/weather/weatherApi';

export const useGetCurrentWeather = () => {
  const { currentDistrict } = useLocationStore();

  return useQuery({
    queryKey: ['currentWeather', currentDistrict],
    queryFn: () => getCurrentWeather(),
    enabled: !!currentDistrict, // type : boolean
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
