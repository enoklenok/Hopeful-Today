// * Constants
import {
  TIME_OF_DAY_DAYTIME,
  WEATHER_STATUS_DAYTIME,
  WEATHER_STATUS_DAYTIME_HEAT,
  WEATHER_STATUS_DAYTIME_HEAT_WAVE,
  WEATHER_STATUS_NIGHTTIME,
  WEATHER_STATUS_NIGHTTIME_HEAT,
  WEATHER_STATUS_NIGHTTIME_HEAT_WAVE,
} from '@constants/constants';
import { LOCAL_STORAGE_CURRENT_WEATHER_STATUS } from '@constants/localStorage';

// * Stores
import { useWeatherStore } from '@stores/useWeatherStore';
import { useTimeOfDayStore } from '@stores/useTimeOfDay';

const useBackgroundImage = () => {
  const { currentTemperature } = useWeatherStore();
  const { timeOfDay } = useTimeOfDayStore();
  const baseImageUrl = '/assets/bg';

  let bgImage = null;

  const daytimeImage = `url(${baseImageUrl}/bg-daytime.png)`; // 0~20도 사이
  const daytimeHeatImage = `url(${baseImageUrl}/bg-daytime-heat.png)`; // 20도~30도
  const daytimeHeatWaveImage = `url(${baseImageUrl}/bg-daytime-heatWave.png)`; // 30도 이상
  const nighttimeImage = `url(${baseImageUrl}/bg-nighttime.png)`;
  const nighttimeHeatImage = `url(${baseImageUrl}/bg-nighttime-heat.png)`;
  const nighttimeHeatWaveImage = `url(${baseImageUrl}/bg-nighttime-heatWave.png)`;
  const floodImage = `url(${baseImageUrl}/bg-flood.png)`;

  const savedWeatherStatus = localStorage.getItem(LOCAL_STORAGE_CURRENT_WEATHER_STATUS);

  switch (savedWeatherStatus) {
    case WEATHER_STATUS_DAYTIME:
      bgImage = daytimeImage;
      break;
    case WEATHER_STATUS_DAYTIME_HEAT:
      bgImage = daytimeHeatImage;
      break;
    case WEATHER_STATUS_DAYTIME_HEAT_WAVE:
      bgImage = daytimeHeatWaveImage;
      break;
    case WEATHER_STATUS_NIGHTTIME:
      bgImage = nighttimeImage;
      break;
    case WEATHER_STATUS_NIGHTTIME_HEAT:
      bgImage = nighttimeHeatImage;
      break;
    case WEATHER_STATUS_NIGHTTIME_HEAT_WAVE:
      bgImage = nighttimeHeatWaveImage;
      break;
  }
  // TODO: 강수량 여부 확인;

  if (currentTemperature) {
    // 낮
    if (timeOfDay === TIME_OF_DAY_DAYTIME) {
      if (currentTemperature >= 30) {
        bgImage = daytimeHeatWaveImage;
        localStorage.setItem(LOCAL_STORAGE_CURRENT_WEATHER_STATUS, 'daytime-heat-wave');
      } else if (currentTemperature >= 20) {
        bgImage = daytimeHeatImage;
        localStorage.setItem(LOCAL_STORAGE_CURRENT_WEATHER_STATUS, 'daytime-heat');
      } else {
        bgImage = daytimeImage;
        localStorage.setItem(LOCAL_STORAGE_CURRENT_WEATHER_STATUS, 'daytime');
      }
      // 밤
    } else {
      if (currentTemperature >= 30) {
        bgImage = nighttimeHeatWaveImage;
        localStorage.setItem(LOCAL_STORAGE_CURRENT_WEATHER_STATUS, 'nighttime-heat-wave');
      } else if (currentTemperature >= 20) {
        bgImage = nighttimeHeatImage;
        localStorage.setItem(LOCAL_STORAGE_CURRENT_WEATHER_STATUS, 'nighttime-heat');
      } else {
        bgImage = nighttimeImage;
        localStorage.setItem(LOCAL_STORAGE_CURRENT_WEATHER_STATUS, 'nighttime');
      }
    }
  }

  return bgImage;
};

export default useBackgroundImage;
