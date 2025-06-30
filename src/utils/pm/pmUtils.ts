// * Utils
import { convertByNumberType, findBy } from '@utils/@common/commonUtils';

/**
 * ### '미세먼지 값(pm10Value)'을 상태로 변환하는 함수
 * @param value 미세먼지 값
 * @returns 상태로 변환된 미세먼지 값
 */
export const convertByPm10Status = (value: string | null | undefined) => {
  const convertedValue = convertByNumberType(value);

  if (convertedValue === null) return '정보 없음';
  if (convertedValue <= 30) return '좋음';
  if (convertedValue <= 80) return '보통';
  if (convertedValue <= 150) return '나쁨';
  return '매우 나쁨';
};

/**
 * 배열에서 '지역(stationName)'을 찾아 반환하는 함수
 * @param obj 배열
 * @returns 조건에 맞는 첫 번째 요소 또는 null
 */
export const findByDistrict = (obj: [], value: string) => {
  const name = 'stationName';

  return findBy(obj, name, value);
};
