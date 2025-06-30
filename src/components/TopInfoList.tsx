// * Utils
import { convertByWeatherStatus } from '@utils/weather/weatherUtils';

// * Stores
import { usePmStore } from '@stores/usePmStore';
import { useWeatherStore } from '@stores/useWeatherStore';

const TopInfoList = () => {
  const { currentPm10Status } = usePmStore();
  const { currentTemperature, isCurrentRaining, isCurrentSnowing } = useWeatherStore();

  return (
    <div>
      <ul className="text-end">
        <li className="text-5xl font-semibold">{currentTemperature}°</li>
        <li>날씨 상태 : {convertByWeatherStatus(currentTemperature)}</li>
        <li>미세먼지 : {currentPm10Status}</li>
        <li>비 여부 : {String(isCurrentRaining)}</li>
        <li>눈 여부 : {String(isCurrentSnowing)}</li>
      </ul>
    </div>
  );
};

export default TopInfoList;
