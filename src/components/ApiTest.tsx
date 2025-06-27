import { SEOUL_DISTRICTS } from '@constants/districts';
import { useGetCurrentWeather } from '@hooks/useHooks';

import { getBaseTime } from '@utils/utils';

const ApiTest = () => {
  const { data, isLoading, isError, error } = useGetCurrentWeather();

  if (isLoading) {
    return <div>로딩중..</div>;
  }

  const currentData = data.response.body.items.item;
  const currentTemperature = currentData.find(
    (item) => item.category === 'T1H',
  )?.obsrValue;
  const currentStatus = currentData.find(
    (item) => item.category === 'PTY',
  )?.obsrValue;

  localStorage.setItem('saved_temperature', currentTemperature);
  localStorage.setItem('saved_status', currentStatus);
  console.log(currentTemperature);
  console.log(currentStatus);
  return (
    <div>
      <h1>API TEST</h1>
    </div>
  );
};

export default ApiTest;
