// * Library
import { create } from 'zustand';

// * Constants
import { SEOUL_DISTRICTS } from '@constants/districts';

interface districtState {
  currentDistrict: string;
  setCurrentDistrict: (value: string) => void;
}

/** 지역구 전역상태 스토어 */
export const useDistrictStore = create<districtState>((set) => ({
  currentDistrict: SEOUL_DISTRICTS[0].name,
  setCurrentDistrict: (value) => set({ currentDistrict: value }),
}));
