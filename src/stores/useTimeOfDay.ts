// * Library
import { create } from 'zustand';

// * Constants
import { DEFAULT_TIME_OF_DAY } from '@constants/constants';
import { LOCAL_STORAGE_TIME_OF_DAY } from '@constants/localStorage';

// * Types
interface TimeOfDayState {
  timeOfDay: string | null | undefined;
  setTimeOfDay: (value: string) => void;
}

const savedTimeOfDay = localStorage.getItem(LOCAL_STORAGE_TIME_OF_DAY);

export const useTimeOfDayStore = create<TimeOfDayState>((set) => ({
  timeOfDay: savedTimeOfDay ?? DEFAULT_TIME_OF_DAY,
  setTimeOfDay: (value) => set({ timeOfDay: value }),
}));
