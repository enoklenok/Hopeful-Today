// * Library
import dayjs from 'dayjs';

// * Constants
import { DEFAULT_TIME_OF_DAY, TIME_OF_DAY_NIGHTTIME } from '@constants/constants';

// * Types
interface RiseSetStatus {
  currentTimeOfDay: string;
}

/**
 * sunrise/sunset 문자열을 파싱해 현재 시각과 비교
 * @param sunriseStr - "HHMM" 형식 문자열
 * @param sunsetStr - "HHMM" 형식 문자열
 * @returns 현재 낮/밤 여부
 */
export function parseTimeOfDayStatus(
  sunriseStr: string | null | undefined,
  sunsetStr: string | null | undefined,
): RiseSetStatus {
  const now = dayjs();
  const sunriseClean =
    sunriseStr?.trim() && sunriseStr.trim().length === 4 ? sunriseStr.trim() : '0600';

  const sunsetClean =
    sunsetStr?.trim() && sunsetStr.trim().length === 4 ? sunsetStr.trim() : '1800';

  const sunriseTime = dayjs()
    .hour(Number(sunriseClean.slice(0, 2)))
    .minute(Number(sunriseClean.slice(2, 4)))
    .second(0);

  const sunsetTime = dayjs()
    .hour(Number(sunsetClean.slice(0, 2)))
    .minute(Number(sunsetClean.slice(2, 4)))
    .second(0);

  const currentTimeOfDay =
    now.isAfter(sunriseTime) && now.isBefore(sunsetTime)
      ? DEFAULT_TIME_OF_DAY
      : TIME_OF_DAY_NIGHTTIME;

  return { currentTimeOfDay };
}
