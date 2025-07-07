import Lottie from 'lottie-react';
import rainAnimation from '@assets/rain.json';

export default function Rain() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Lottie animationData={rainAnimation} loop autoplay />
    </div>
  );
}
