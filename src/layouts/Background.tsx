// * Components
import { RainAnimation, SnowAnimation } from '@components/lottie';

// * Hooks
import useBackgroundImage from '@hooks/useBackgroundImage';

// * Stores
import { useWeatherStore } from '@stores/useWeatherStore';

/** 배경 이미지 및 날씨 상태 애니메이션 렌더링하는 컴포넌트 */
const Background = ({ children }) => {
  const { isCurrentRaining, isCurrentSnowing } = useWeatherStore();

  return (
    <div id="container" className="flex justify-center">
      <div
        className="flex flex-col w-screen max-w-[500px] min-h-[100dvh] bg-cover bg-left"
        style={{ backgroundImage: useBackgroundImage() }}
      >
        {children}
        {isCurrentRaining && <RainAnimation />}
        {isCurrentSnowing && <SnowAnimation />}
      </div>
    </div>
  );
};

export default Background;
