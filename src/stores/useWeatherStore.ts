// * Library
import { create } from 'zustand';

interface WeatherState {
  currentTemperature: number | null; // 기온
  isCurrentTemperaturePending: boolean | null;
  isCurrentTemperatureError: boolean | null;
  setCurrentTemperature: (value: number) => void;

  isCurrentRaining: boolean | null;
  isCurrentSnowing: boolean | null;
  setIsCurrentRaining: (value: boolean) => void;
  setIsCurrentSnowing: (value: boolean) => void;
}

export const useWeatherStore = create<WeatherState>((set) => ({
  currentTemperature: null,
  isCurrentTemperaturePending: false,
  isCurrentTemperatureError: false,
  setCurrentTemperature: (value) => set({ currentTemperature: value }),

  isCurrentRaining: false,
  isCurrentSnowing: false,
  setIsCurrentRaining: (value) => set({ isCurrentRaining: value }),
  setIsCurrentSnowing: (value) => set({ isCurrentSnowing: value }),
}));
