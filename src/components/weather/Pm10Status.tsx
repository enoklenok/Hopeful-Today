// * Library
import clsx from 'clsx';

// * Stores
import { useSunTimeStore } from '@stores/useSunTimeStore';
import { usePmStore } from '@stores/usePmStore';

const Pm10Status = () => {
  const { currentPm10Status } = usePmStore();
  const { isDayTime } = useSunTimeStore();

  const pm10ClassName = clsx('text-2xl', 'font-semibold', isDayTime ? 'text-black' : 'text-white');
  return <div className={pm10ClassName}>미세먼지 {currentPm10Status}</div>;
};

export default Pm10Status;
