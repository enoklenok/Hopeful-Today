import { SEOUL_DISTRICTS } from '@constants/districts';
import { useGetDust } from '@hooks/useHooks';

const ApiTest = () => {
  const { data, isLoading, isError, error } = useGetDust();

  const filteredDustData = data?.response?.body?.items?.filter(
    (item) => item?.stationName === SEOUL_DISTRICTS[0],
  );

  // if (!isLoading) {
  //   console.log(filteredDustData?.[0]?.pm10Grade);
  // }
  return (
    <div>
      <h1>API TEST</h1>
    </div>
  );
};

export default ApiTest;
