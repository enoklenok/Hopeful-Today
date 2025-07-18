import SvgImage from './charactor/SvgImage';

import useCharacterStatus from '@hooks/useCharacterStatus';
import { useWeatherStore } from '@stores/useWeatherStore';
import { usePmStore } from '@stores/usePmStore';

/** 날씨 정보에 따른 캐릭터 표현 컴포넌트 */
const Character = () => {

  const characterHref = useCharacterStatus();
  const { isCurrentRaining } = useWeatherStore();
  const { isMask } = usePmStore();

  const maskHref = '/assets/lovebugman/lovebugman-mask.svg';
  const umbrellaHref = '/assets/lovebugman/lovebugman-umbrella.svg';

  return (
    <section className="flex absolute inset-0 z-0">
      <svg className="w-full h-full" viewBox="0 0 300 300" preserveAspectRatio="xMidYMid meet">
        <SvgImage href={characterHref} />
        {isMask && <SvgImage href={maskHref} />}
        {isCurrentRaining && <SvgImage href={umbrellaHref} /> }
      </svg>
    </section>
  );
};

export default Character;
