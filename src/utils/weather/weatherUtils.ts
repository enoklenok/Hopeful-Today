// * Library
import dayjs from 'dayjs';

// * Utils
import { convertByNumberType, findBy } from '@utils/@common/commonUtils';

/**
 * PTY 값을 받아 비/눈 여부를 반환
 * @param value 강수 형태 코드 (0~7)
 * @returns 비, 눈 여부
 */
export const convertByPrecipitationStatus = (value: string | null | undefined) => {
  let isRaining = false;
  let isSnowing = false;
  const convertedValue = convertByNumberType(value);

  switch (convertedValue) {
    case 1: // 비
    case 4: // 소나기
    case 5: // 빗방울
      isRaining = true;
      break;
    case 2: // 비/눈
    case 6: // 빗방울+눈날림
      isRaining = true;
      isSnowing = true;
      break;
    case 3: // 눈
    case 7: // 눈날림
      isSnowing = true;
      break;
    case 0: // 없음
    default:
      break;
  }

  return { isRaining, isSnowing };
};

/**
 * 현재 날씨를 상태로 변환하는 함수
 * @param value 날씨 수치 값 또는 null
 * @returns 날씨를 상태로 변환한 값
 */
export const convertByWeatherStatus = (value: string | null) => {
  const convertedValue = convertByNumberType(value);

  if (convertedValue === null) return '정보 없음';
  if (convertedValue <= -10) return '매우 추움';
  if (convertedValue <= 0) return '추움';
  if (convertedValue <= 10) return '시원함';
  if (convertedValue <= 20) return '더움';
  if (convertedValue > 20) return '매우 더움';
  return '그냥 그럼';
};

/**
 * 배열에서 '온도(T1H)'를 찾아 반환하는 함수
 * @param obj 배열
 * @returns 조건에 맞는 첫 번째 요소 또는 null
 */
export const findByTemperature = (obj: Record<string, string | number | null>[] | undefined)  => {
  const name = 'category';
  const value = 'T1H';

  return findBy(obj, name, value);
};

/**
 * 배열에서 '강수량(PTY)'을 찾아 반환하는 함수
 * @param obj 배열
 * @returns 조건에 맞는 첫 번째 요소 또는 null
 */
export const findByPrecipitation = (obj: Record<string, string | null>[] | undefined) => {
  const name = 'category';
  const value = 'PTY';

  return findBy(obj, name, value);
};

export const getBaseTime = () => {
  const now = dayjs();
  const hour = now.hour();
  const minute = now.minute();

  let baseHour = hour;
  if (minute < 30) {
    baseHour -= 1;
  }
  // 0시 이전이면 전날 23시로 처리
  if (baseHour < 0) {
    baseHour = 23;
  }

  return `${String(baseHour).padStart(2, '0')}00`;
};
