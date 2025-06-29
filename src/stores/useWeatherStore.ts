// * Library
import { create } from 'zustand';

interface WeatherState {
  currentTemperature: number | null; // 기온
  isCurrentTemperaturePending: boolean | null;
  isCurrentTemperatureError: boolean | null;
  setCurrentTemperature: (value: number) => void;
}

export const useWeatherStore = create<WeatherState>((set) => ({
  currentTemperature: null,
  isCurrentTemperaturePending: false,
  isCurrentTemperatureError: false,
  setCurrentTemperature: (value) => set({ currentTemperature: value }),
}));
