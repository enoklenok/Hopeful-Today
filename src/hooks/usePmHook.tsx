// * Library
import { useQuery } from '@tanstack/react-query';

// * Stores
import { useLocationStore } from '@stores/useLocationStore';

// * Utils
import { getPm } from '@utils/pm/pmApi';

export const useGetPm = () => {
  const { currentDistrict } = useLocationStore();

  return useQuery({
    queryKey: ['pm', currentDistrict],
    queryFn: () => getPm(),
    enabled: !!currentDistrict, // type : boolean
  });
};
