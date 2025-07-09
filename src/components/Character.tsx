/** 날씨 정보에 따른 캐릭터 표현 컴포넌트 */
const Character = () => {
  return (
    <section className="flex absolute inset-0 z-0">
      <svg className="w-full h-full" viewBox="0 0 300 300" preserveAspectRatio="xMidYMid meet">
        <image
          href="/assets/lovebugman.svg"
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid meet"
        />
      </svg>
    </section>
  );
};

export default Character;
