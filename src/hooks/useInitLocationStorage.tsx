// * React
import { useEffect } from 'react';

// * Constants
import {
  LOCAL_STORAGE_CURRENT_CITY_ID,
  LOCAL_STORAGE_CURRENT_DISTRICT_ID,
  LOCAL_STORAGE_CURRENT_DISTRICT_NX,
  LOCAL_STORAGE_CURRENT_DISTRICT_NY,
  LOCATION_REGIONS,
} from '@constants/locations';

/** 지역구 로컬 스토리지 - 초기 렌더링 시 init하는 훅  */
export const useInitLocationStorage = () => {
  useEffect(() => {
    if (!localStorage.getItem(LOCAL_STORAGE_CURRENT_CITY_ID)) {
      localStorage.setItem(LOCAL_STORAGE_CURRENT_CITY_ID, LOCATION_REGIONS[0].id);
    }

    if (!localStorage.getItem(LOCAL_STORAGE_CURRENT_DISTRICT_ID)) {
      localStorage.setItem(LOCAL_STORAGE_CURRENT_DISTRICT_ID, LOCATION_REGIONS[0].districts[0].id);
    }

    if (!localStorage.getItem(LOCAL_STORAGE_CURRENT_DISTRICT_NX)) {
      localStorage.setItem(
        LOCAL_STORAGE_CURRENT_DISTRICT_NX,
        String(LOCATION_REGIONS[0].districts[0].nx),
      );
    }

    if (!localStorage.getItem(LOCAL_STORAGE_CURRENT_DISTRICT_NY)) {
      localStorage.setItem(
        LOCAL_STORAGE_CURRENT_DISTRICT_NY,
        String(LOCATION_REGIONS[0].districts[0].ny),
      );
    }
  }, []);
};
