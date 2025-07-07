// * Library
import Lottie from 'lottie-react';

// * Assets
import snowAnimation from '@assets/snow.json';

/** 눈 내리는 애니메이션 컴포넌트 */
const Snow = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <Lottie animationData={snowAnimation} loop autoplay className="w-full h-full" />
    </div>
  );
};
export default Snow;
