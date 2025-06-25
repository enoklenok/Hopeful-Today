// * Library
import axios from 'axios';

const BASE_URL =
  'http://apis.data.go.kr/B552584/UlfptcaAlarmInqireSvc/getUlfptcaAlarmInfo';

const API_KEY = import.meta.env.VITE_APP_API_KEY; // 필수 - 인증키

/** 미세먼지 실황 API */
export const getDust = async () => {
  try {
    const year = 2025; // 필수 - 연도
    const returnType = 'json'; // 옵션 - 데이터 표출 방식
    const numOfRows = 100; // 옵션 - 한 페이지 결과 수
    const pageNo = 1; // 옵션 - 페이지 번호
    const itemCode = 'PM10'; // 옵션 - 항목명
    const dustUrl = `${BASE_URL}?serviceKey=${API_KEY}&returnType=${returnType}&numOfRows=${numOfRows}&pageNo=${pageNo}&year=${year}&itemCode=${itemCode}`;
    const { data } = await axios.get(dustUrl);

    return data;
  } catch (error) {
    console.warn(`getDust error : ${error?.message}`);
    throw error;
  }
};
