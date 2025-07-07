// * React
import { useState } from 'react';

// * Constants
import {
  LOCAL_STORAGE_CURRENT_CITY_ID,
  LOCAL_STORAGE_CURRENT_DISTRICT_ID,
  LOCAL_STORAGE_CURRENT_DISTRICT_NX,
  LOCAL_STORAGE_CURRENT_DISTRICT_NY,
} from '@constants/localStorage';
import { LOCATION_REGIONS } from '@constants/locations';

// * Components
import Combobox from '@components/Combobox';

// * Hooks
import { useInitLocationStorage } from '@hooks/useInitLocationStorage';

// * Stores
import { useLocationStore } from '@stores/useLocationStore';

const Header = () => {
  const { currentCity, currentDistrict, setCurrentCity, setCurrentDistrict } = useLocationStore();
  const [cityQuery, setCityQuery] = useState(''); // '시' 검색
  const [districtQuery, setDistrictQuery] = useState(''); // '구' 검색
  const cityPlaceholderText = '시를 선택해주세요';
  const districtPlaceholderText = '구를 선택해주세요';

  // 변경 이벤트
  const handleChangeCurrentCity = (event) => {
    const savedCityId = localStorage.getItem(LOCAL_STORAGE_CURRENT_CITY_ID);
    const { id, districts } = event;

    if (id && districts && id !== savedCityId) {
      setCurrentCity(event);
      setCurrentDistrict(districts?.[0] ?? null);
      localStorage.setItem(LOCAL_STORAGE_CURRENT_CITY_ID, id);
      localStorage.setItem(LOCAL_STORAGE_CURRENT_DISTRICT_ID, districts?.[0]?.id);
      localStorage.setItem(LOCAL_STORAGE_CURRENT_DISTRICT_NX, districts?.[0]?.nx);
      localStorage.setItem(LOCAL_STORAGE_CURRENT_DISTRICT_NY, districts?.[0]?.ny);
    }
  };

  const handleChangeCurrentDistrict = (event) => {
    const { id, nx, ny } = event;

    if (id && nx && ny) {
      setCurrentDistrict(event);

      // 스토리지 업데이트
      localStorage.setItem(LOCAL_STORAGE_CURRENT_DISTRICT_ID, id);
      localStorage.setItem(LOCAL_STORAGE_CURRENT_DISTRICT_NX, nx);
      localStorage.setItem(LOCAL_STORAGE_CURRENT_DISTRICT_NY, ny);
    }
  };

  // 리셋 이벤트
  const handleResetCurrentCity = () => {
    setCurrentCity(null);
    setCurrentDistrict(null);

    localStorage.removeItem(LOCAL_STORAGE_CURRENT_CITY_ID);
    localStorage.removeItem(LOCAL_STORAGE_CURRENT_DISTRICT_ID);
    localStorage.removeItem(LOCAL_STORAGE_CURRENT_DISTRICT_NX);
    localStorage.removeItem(LOCAL_STORAGE_CURRENT_DISTRICT_NY);
  };

  const handleResetCurrentDistrcit = () => {
    setCurrentDistrict(null);
    localStorage.removeItem(LOCAL_STORAGE_CURRENT_DISTRICT_ID);
    localStorage.removeItem(LOCAL_STORAGE_CURRENT_DISTRICT_NX);
    localStorage.removeItem(LOCAL_STORAGE_CURRENT_DISTRICT_NY);
  };

  useInitLocationStorage();

  return (
    <header className="flex justify-end items-center h-20 px-4 py-3">
      <Combobox
        onChange={handleChangeCurrentCity}
        onReset={handleResetCurrentCity}
        options={LOCATION_REGIONS}
        placeholder={cityPlaceholderText}
        selected={currentCity}
        setQuery={setCityQuery}
        query={cityQuery}
      />
      <Combobox
        onChange={handleChangeCurrentDistrict}
        onReset={handleResetCurrentDistrcit}
        options={currentCity?.districts ?? []}
        placeholder={districtPlaceholderText}
        selected={currentDistrict}
        setQuery={setDistrictQuery}
        query={districtQuery}
      />
    </header>
  );
};

export default Header;
