// * Library
import dayjs from 'dayjs';

/**
 * ### 값을 정수로 변환하는 함수
 * @param value 정수로 변환할 값
 * @returns 정수로 변환된 값 또는 null
 */
export const convertByNumberType = (value: string | number | null | undefined) => {
  if (typeof value === 'number') {
    return value;
  }
  if (!value) {
    return null;
  }
  const parsedValue = parseInt(value);
  return isNaN(parsedValue) ? null : parsedValue;
};

export const getCurrentDate = () => {
  return dayjs().format('YYYYMMDD');
};

/**
 * ### 배열에서 조건에 맞는 첫 번째 요소를 반환하는 함수
 * @param obj 배열
 * @param name 필드 이름
 * @param value 비교할 값
 * @returns 조건에 맞는 첫 번째 요소 또는 null
 */
export const findBy = (obj: [], name: string, value: string) => {
  if (!Array.isArray(obj)) {
    return null;
  }

  return obj.find((item) => item[name] === value);
};

/**
 * ### 배열에서 조건에 맞는 모든 요소를 반환하는 함수
 * @param obj 배열
 * @param name 필드 이름
 * @param value 비교할 값
 * @returns 조건에 맞는 모든 요소 배열
 */
export const filterBy = (obj: [], name: string, value: string) => {
  if (!Array.isArray(obj)) {
    return [];
  }

  return obj?.filter((item) => item[name] === value);
};
