// * Library
import { create } from 'zustand';

interface SunTimeState {
  isDayTime: boolean;
  setIsDayTime: (value: boolean) => void;
}

export const useSunTimeStore = create<SunTimeState>((set) => ({
  isDayTime: true,
  setIsDayTime: (value) => set({ isDayTime: value }),
}));
