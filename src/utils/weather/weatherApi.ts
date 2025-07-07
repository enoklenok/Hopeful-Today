// * Library
import axios from 'axios';

// * Constants
import {
  LOCAL_STORAGE_CURRENT_DISTRICT_NX,
  LOCAL_STORAGE_CURRENT_DISTRICT_NY,
} from '@constants/localStorage';
// * Utils
import { getCurrentDate } from '@utils/@common/commonUtils';
import { getBaseTime } from '@utils/weather/weatherUtils';

const BASE_URL = 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0';
const API_KEY = import.meta.env.VITE_APP_API_KEY; // 필수 - 인증키

/** 초단기실황 조회 API(현재 날씨 관측) */
export const getCurrentWeather = async () => {
  try {
    const savedDistrctNx = localStorage.getItem(LOCAL_STORAGE_CURRENT_DISTRICT_NX);
    const savedDistrctNy = localStorage.getItem(LOCAL_STORAGE_CURRENT_DISTRICT_NY);

    // query params
    const params = 'getUltraSrtNcst';
    const pageNo = 1; // 필수 - 페이지 번호
    const numOfRows = 1000; // 필수 - 한 페이지 결과 수
    const base_date = getCurrentDate(); // 필수 - 발표 날짜(YYYYMMDD)
    const baes_time = getBaseTime(); // 필수 - 발표 시각(HHmm)
    const nx = savedDistrctNx; // 필수 - 예보지점 X좌표
    const ny = savedDistrctNy; // 필수 - 예보지점 Y좌표
    const dataType = 'JSON'; // 옵션 - 응답 자료 형식

    const currentWeatherUrl = `${BASE_URL}/${params}?serviceKey=${API_KEY}&pageNo=${pageNo}&numOfRows=${numOfRows}&base_date=${base_date}&base_time=${baes_time}&nx=${nx}&ny=${ny}&dataType=${dataType}`;
    const { data } = await axios.get(currentWeatherUrl);
    const result = data?.response?.body?.items.item;
    return result;
  } catch (error) {
    console.log(`getCurrentWeather error : ${error?.message}`);
    throw error;
  }
};

/** 초단기예보 조회 API(1시간 단위 예보) */
export const getHourlyForecast = async () => {
  try {
    // query parmas
    const params = 'getUltraSrtFcst';
    const pageNo = 1; // 필수 - 페이지 번호
    const numOfRows = 1000; // 필수 - 한 페이지 결과 수
    const base_date = '20250625'; // 필수 - 발표날짜
    const base_time = '0630'; // 필수 - 발표시각
    const nx = 55; // 필수 - 예보지점 X좌표
    const ny = 127; // 필수 - 예보지점 Y좌표
    const dataType = 'JSON'; // 옵션 - 응답 자료 형식

    const hourlyForecastUrl = `${BASE_URL}/${params}?serviceKey=${API_KEY}&pageNo=${pageNo}&numOfRows=${numOfRows}&base_date=${base_date}&base_time=${base_time}&nx=${nx}&ny=${ny}&dataType=${dataType}`;
    const { data } = await axios.get(hourlyForecastUrl);
    return data;
  } catch (error) {
    console.log(`getHourlyForecast error : ${error?.message}`);
    throw error;
  }
};

// 단기예보 조회API(3시간 단위로 최대 7일까지 예보)
export const getWeeklyForecast = async () => {
  try {
    const params = 'getVilageFcst';
    const pageNo = 1; // 필수 - 페이지 번호
    const numOfRows = 1000; // 필수 - 한 페이지 결과 수
    const base_date = '20250625'; // 필수 - 발표날짜
    const base_time = '0500'; // 필수 - 발표시각
    const nx = 55; // 필수 - 예보지점 X좌표
    const ny = 127; // 필수 - 예보지점 Y좌표
    const dataType = 'JSON'; // 옵션 - 응답 자료 형식

    const weeklyForecastUrl = `${BASE_URL}/${params}?serviceKey=${API_KEY}&pageNo=${pageNo}&numOfRows=${numOfRows}&base_date=${base_date}&base_time=${base_time}&nx=${nx}&ny=${ny}&dataType=${dataType}`;
    const { data } = await axios.get(weeklyForecastUrl);
    return data;
  } catch (error) {
    console.log(`getWeeklyForecast error : ${error?.message}`);
    throw error;
  }
};
