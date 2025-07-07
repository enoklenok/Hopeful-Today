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
      <ul className="text-end flex flex-col items-end">
        <li
          className="text-5xl font-semibold
         w-full
        flex
    rounded-lg
    bg-white/30
    p-2
    shadow-lg
    backdrop-blur-md
    mb-1
        "
        >
          {currentTemperature}°
        </li>
        <li
          className="text-xl text
    rounded-lg
    bg-white/30
    p-2
    shadow-lg
    backdrop-blur-md
        mb-1
        "
        >
          {convertByWeatherStatus(currentTemperature)}
        </li>
        <li
          className="
         w-full
        flex
        mb-1
    rounded-lg
    bg-white/30
    p-2
    shadow-lg
    backdrop-blur-md
        "
        >
          미세먼지 : {currentPm10Status}
        </li>
        <li>비 여부 : {String(isCurrentRaining)}</li>
        <li>눈 여부 : {String(isCurrentSnowing)}</li>
      </ul>
    </div>
  );
};

export default TopInfoList;
