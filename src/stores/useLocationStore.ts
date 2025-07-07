// * Library
import { create } from 'zustand';

// * Constants
import {
  LOCAL_STORAGE_CURRENT_CITY_ID,
  LOCAL_STORAGE_CURRENT_DISTRICT_ID,
} from '@constants/localStorage';
import { LOCATION_REGIONS } from '@constants/locations';

// * Type
interface City {
  id: string;
  name: string;
  districts: District[];
}

interface District {
  id?: string;
  name?: string;
  nx?: number;
  ny?: number;
}

export type Options = City | District | null;

interface LocationState {
  currentCity: Options;
  currentDistrict: Options;
  setCurrentCity: (value: Options) => void;
  setCurrentDistrict: (value: Options) => void;
}

const savedCityId = localStorage.getItem(LOCAL_STORAGE_CURRENT_CITY_ID);
const savedDistrictId = localStorage.getItem(LOCAL_STORAGE_CURRENT_DISTRICT_ID);
const defaultCity = LOCATION_REGIONS.find(({ id }) => id === savedCityId) ?? LOCATION_REGIONS[0];
const defaultDistrict =
  defaultCity?.districts?.find(({ id }) => id === savedDistrictId) ??
  LOCATION_REGIONS[0].districts[0];

/** 위치 전역상태 스토어 */
export const useLocationStore = create<LocationState>((set) => ({
  currentCity: defaultCity,
  currentDistrict: defaultDistrict,
  setCurrentCity: (value) =>
    set({
      currentCity: value,
    }),
  setCurrentDistrict: (value) => set({ currentDistrict: value }),
}));
