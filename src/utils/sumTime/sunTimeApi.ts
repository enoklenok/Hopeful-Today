// * Library
import axios from 'axios';

const BASE_URL =
  'http://apis.data.go.kr/B090041/openapi/service/RiseSetInfoService/getAreaRiseSetInfo';

const API_KEY = import.meta.env.VITE_APP_API_KEY; // 필수 - 인증키

/** 일출, 일몰 API */
export const getSunTime = async () => {
  try {
    const locdate = '20250622'; // 필수 - 날짜
    const location = '서울'; // 필수 - 지역
    const sumTimeUrl = `${BASE_URL}?serviceKey=${API_KEY}&locdate=${locdate}&location=${location}`;
    const { data } = await axios.get(sumTimeUrl);
    const result = data?.response?.body?.items?.item;
    return result;
  } catch (error) {
    console.warn(`getSunTime error : ${error?.message}`);
    throw error;
  }
};
