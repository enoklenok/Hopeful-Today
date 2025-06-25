import { useGetDust } from '@hooks/useHooks';

const ApiTest = () => {
  const { data, isLoading, isError, error } = useGetDust();

  if (!isLoading) {
    console.log(data);
  }
  return (
    <div>
      <h1>API TEST</h1>
    </div>
  );
};

export default ApiTest;
