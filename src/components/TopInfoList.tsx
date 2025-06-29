// * Utils
import { convertByWeatherStatus } from '@utils/utils';

// * Stores
import { usePmStore } from '@stores/usePmStore';
import { useWeatherStore } from '@stores/useWeatherStore';

const TopInfoList = () => {
  const { currentPm10Status } = usePmStore();
  const { currentTemperature } = useWeatherStore();

  return (
    <div>
      <ul className="text-end">
        <li className="text-5xl font-semibold">{currentTemperature}°C</li>
        <li className="text-xl">{convertByWeatherStatus(currentTemperature)}</li>
        <li className="text-x">미세먼지 {currentPm10Status}</li>
      </ul>
    </div>
  );
};

export default TopInfoList;
