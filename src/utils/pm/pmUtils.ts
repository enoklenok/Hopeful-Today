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

type GenericStationData = {
  stationName: string;
  [key: string]: any;
};

export const findByDistrict = (
  obj: GenericStationData[] | undefined | null,
  value: string,
): GenericStationData | undefined => {
  return findBy(obj, 'stationName', value);
};
