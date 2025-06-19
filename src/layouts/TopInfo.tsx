import { FindDust, Location, Temperature, Weather } from '@components/top-info';

import '@layouts/layout.scss';

const TopInfo = () => {
  return (
    <section className="topInfo-container">
      <Location />
      <Temperature />
      <Weather />
      <FindDust />
    </section>
  );
};

export default TopInfo;
