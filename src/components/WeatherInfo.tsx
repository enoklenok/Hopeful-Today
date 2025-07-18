// * Components
import { Pm10Status, Temperature, WeatherStatus } from '@components/weather';

/** 날씨 정보를 표현하는 컴포넌트 */
const WeatherInfo = () => {
  return (
    <section className="px-2 py-2">
      <h2 className="sr-only">현재 날씨 상태</h2>
      <Temperature />
      <WeatherStatus />
      <Pm10Status />
    </section>
  );
};

export default WeatherInfo;
