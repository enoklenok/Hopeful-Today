import { useWeatherStore } from "@stores/useWeatherStore";

/** 날씨에 따른 캐릭터 상태 이미지를 렌더링하는 훅 */
const useCharacterStatus = () => {

  const { currentTemperature } = useWeatherStore();

  const baseUrl = '/assets/lovebugman';
  const defaultStatus = `${baseUrl}/lovebugman-default.svg`;
  const heatStatus = `${baseUrl}/lovebugman-heat.svg`;
  const heatWaveStatus = `${baseUrl}/lovebugman-heatWave.svg`;
  const coldStatus = `${baseUrl}/lovebugman-cold.svg`;
  const strongColdStatus = `${baseUrl}/lovebugman-strong-cold.svg`;

  let status = defaultStatus;

  if(currentTemperature) {
    if(currentTemperature >= 30) {
      status = heatWaveStatus;
    } else if(currentTemperature >= 20) {
      status = heatStatus;
    } else if(currentTemperature >= 0) {
      status = defaultStatus;
    } else if(currentTemperature >= -10) {
      status = coldStatus;
    } else if(currentTemperature <= 20) {
      status = strongColdStatus;
    }
  }

  return status;
};

export default useCharacterStatus;