// * Library
import { create } from 'zustand';

// * Constants
import { LOCAL_STORAGE_CURRENT_DAYTIME } from '@constants/localStorage';

// * Types
interface SunTimeState {
  isDayTime: boolean;
  setIsDayTime: (value: boolean) => void;
}

const savedDaytime = localStorage.getItem(LOCAL_STORAGE_CURRENT_DAYTIME);

export const useSunTimeStore = create<SunTimeState>((set) => ({
  isDayTime: savedDaytime === 'day' ? true : false,
  setIsDayTime: (value) => set({ isDayTime: value }),
}));
