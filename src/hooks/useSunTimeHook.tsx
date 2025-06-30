// * Library
import { useQuery } from '@tanstack/react-query';

// * Utils
import { getSunTime } from '@utils/sumTime/sunTimeApi';

export const useGetSunTime = () => {
  return useQuery({
    queryKey: ['sunTime'],
    queryFn: () => getSunTime(),
  });
};
