// * React
import { useState } from 'react';

// * Constants
import { SEOUL_DISTRICTS } from '@constants/districts';

const Header = () => {
  const [selectedGu, setSelectedGu] = useState(SEOUL_DISTRICTS[0]);

  // const { data, isLoading, isError, error } = useGetDust();

  // const filteredDustData = data?.response?.body?.items?.filter(
  //   (item) => item?.stationName === selectedGu,
  // );

  // if (isLoading) {
  //   return <div>로딩중...</div>;
  // }

  return (
    <header className="flex justify-between px-4 py-3">
      <p className="text-gray-500">Hopeful Today</p>
      <div>
        서울시
        <select
          value={selectedGu}
          onChange={(e) => setSelectedGu(e.target.value)}
          className="p-2 rounded-md border"
        >
          {SEOUL_DISTRICTS.map((gu) => (
            <option key={gu} value={gu}>
              {gu}
            </option>
          ))}
        </select>
      </div>
    </header>
  );
};

export default Header;
