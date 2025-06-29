// * Library
import { useQuery } from '@tanstack/react-query';

// * Stores
import { useDistrictStore } from '@stores/useDistrictStore';

// * Utils
import { getPm } from '@utils/api/pmApi';

export const useGetPm = () => {
  const { currentDistrict } = useDistrictStore();

  return useQuery({
    queryKey: ['pm', currentDistrict],
    queryFn: () => getPm(),
  });
};
