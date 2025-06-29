// * React
import { useEffect, useState } from 'react';

// * Constants
import { SEOUL_DISTRICTS } from '@constants/districts';

// * Stores
import { useDistrictStore } from '@stores/useDistrictStore';

const Header = () => {
  const { setCurrentDistrict } = useDistrictStore();

  const savedDistrict = localStorage.getItem('select_district');
  const [selectedDistrict, setSelectedDistrict] = useState(() => {
    if (savedDistrict) {
      return JSON.parse(savedDistrict);
    }
    return SEOUL_DISTRICTS[0];
  });

  useEffect(() => {
    if (!savedDistrict) {
      localStorage.setItem('select_district', JSON.stringify(SEOUL_DISTRICTS[0]));
    }
  });
  /** 지역구 변경 이벤트 */
  const handleChangeDistrict = (e) => {
    const selected = SEOUL_DISTRICTS.find((gu) => gu.name === e.target.value);
    if (selected) {
      setSelectedDistrict(selected);
      setCurrentDistrict(selected?.name);
    }

    localStorage.setItem('select_district', JSON.stringify(selected));
  };

  return (
    <header className="flex justify-between px-4 py-3">
      <p className="text-gray-500">Hopeful Today</p>
      <div>
        서울시
        <select
          value={selectedDistrict.name}
          onChange={handleChangeDistrict}
          className="p-2 rounded-md border"
        >
          {SEOUL_DISTRICTS.map((gu) => (
            <option key={gu.name} value={gu.name}>
              {gu.name}
            </option>
          ))}
        </select>
      </div>
    </header>
  );
};

export default Header;
