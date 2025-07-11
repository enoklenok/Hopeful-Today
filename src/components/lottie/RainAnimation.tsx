// * Library
import Lottie from 'lottie-react';

// * Assets
import rainAnimation from '@assets/rain.json';

/** 비 내리는 애니메이션 컴포넌트 */
const RainAnimation = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <Lottie animationData={rainAnimation} loop autoplay className="w-full h-full" />
    </div>
  );
};
export default RainAnimation;
