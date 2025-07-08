// * Library
import clsx from 'clsx';

// * Constants
import { DEFAULT_TIME_OF_DAY } from '@constants/constants';

// * Stores
import { useTimeOfDayStore } from '@stores/useTimeOfDay';
import { usePmStore } from '@stores/usePmStore';

const Pm10Status = () => {
  const { currentPm10Status } = usePmStore();
  const { timeOfDay } = useTimeOfDayStore();

  const pm10ClassName = clsx(
    'text-2xl',
    'font-semibold',
    timeOfDay === DEFAULT_TIME_OF_DAY ? 'text-black' : 'text-white',
  );
  return <div className={pm10ClassName}>미세먼지 {currentPm10Status}</div>;
};

export default Pm10Status;
