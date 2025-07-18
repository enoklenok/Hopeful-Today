// * Library
import { create } from 'zustand';

interface pmState {
  currentPm10Status: string | null;
  isCurrentPm10Pending: boolean | null;
  isCurrentPm10Error: boolean | null;
  isMask : boolean;
  setCurrentPm10Status: (value: string) => void;
  setIsMask : (value : boolean) => void;
}

/** 미세먼지/초미세먼지 전역상태 스토어 */
export const usePmStore = create<pmState>((set) => ({
  currentPm10Status: '',
  isCurrentPm10Pending: false,
  isCurrentPm10Error: false,
  isMask : false,
  setCurrentPm10Status: (value) => set({ currentPm10Status: value }),
  setIsMask : (value) => set({isMask : value}),
}));
