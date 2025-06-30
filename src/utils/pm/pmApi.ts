// * Library
import axios from 'axios';

const BASE_URL =
  'http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty';

const API_KEY = import.meta.env.VITE_APP_API_KEY; // 필수 - 인증키

/** 미세먼지 실황 API */
export const getPm = async () => {
  try {
    const sidoName = '서울'; // 필수 - 시도명
    const returnType = 'json'; // 옵션 - 데이터 표출 방식
    const numOfRows = 100; // 옵션 - 한 페이지 결과 수
    const pageNo = 1; // 옵션 - 페이지 번호
    // const ver = '1.0'; // 옵션 - 오퍼레이션 버전
    const pmUrl = `${BASE_URL}?serviceKey=${API_KEY}&sidoName=${sidoName}&returnType=${returnType}&numOfRows=${numOfRows}&pageNo=${pageNo}`;
    const { data } = await axios.get(pmUrl);
    const result = data?.response?.body?.items;
    return result;
  } catch (error) {
    console.warn(`getDust error : ${error?.message}`);
    throw error;
  }
};
