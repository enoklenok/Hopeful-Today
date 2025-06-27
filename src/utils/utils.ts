/** 미세먼지(pm10Value) 값을 상태로 변환하는 함수 */
export const convertByDustStatus = (value: string | null | undefined) => {
  const convertedValue = convertByNumberType(value);

  if (convertedValue === null) return '정보 없음';
  if (convertedValue <= 30) return '좋음';
  if (convertedValue <= 80) return '보통';
  if (convertedValue <= 150) return '나쁨';
  return '매우 나쁨';
};

/** 값을 정수로 변환하는 함수*/
export const convertByNumberType = (
  value: string | number | null | undefined,
) => {
  if (typeof value === 'number') {
    return value;
  }
  if (!value) {
    return null;
  }
  const parsedValue = parseInt(value);
  return isNaN(parsedValue) ? null : parsedValue;
};
