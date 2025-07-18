// * Library
import clsx from 'clsx';
import SmileIcon from '@assets/smile.svg?react';

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
    'font-bold',
    timeOfDay === DEFAULT_TIME_OF_DAY ? 'text-black' : 'text-white',
  );
  return (
    <div className="flex w-fit items-center gap-2 bg-red-500/30 rounded-md backdrop-blur-xs px-2 py-1">
      <SmileIcon className="w-7 h-7" />
      <div className={pm10ClassName}>미세먼지 {currentPm10Status}</div>
    </div>
  );
};

export default Pm10Status;
