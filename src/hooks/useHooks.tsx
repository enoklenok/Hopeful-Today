// * Library
import { useQuery } from '@tanstack/react-query';

// * Utils
import {
  getCurrentWeather,
  getHourlyForecast,
  getWeeklyForecast,
} from '@utils/api/weatherApi';
import { getSunTime } from '@utils/api/sunTimeApi';
import { getDust } from '@utils/api/dustApi';

export const useGetCurrentWeather = () => {
  return useQuery({
    queryKey: ['currentWeather'],
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

export const useGetSunTime = () => {
  return useQuery({
    queryKey: ['sunTime'],
    queryFn: () => getSunTime(),
  });
};

export const useGetDust = () => {
  return useQuery({
    queryKey: ['dust'],
    queryFn: () => getDust(),
  });
};
