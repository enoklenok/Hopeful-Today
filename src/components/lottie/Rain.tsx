import Lottie from 'lottie-react';
import rainAnimation from '@assets/rain.json';

const Rain = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <Lottie animationData={rainAnimation} loop autoplay className="w-full h-full" />
    </div>
  );
};
export default Rain;
