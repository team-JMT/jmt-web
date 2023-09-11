import axios from 'axios';

const baseURL = import.meta.env.DEV
  ? '/api'
  : 'https://naveropenapi.apigw.ntruss.com';

const naverService = axios.create({
  baseURL: baseURL,
  timeout: 60000,
  headers: {
    'X-NCP-APIGW-API-KEY-ID': import.meta.env.VITE_CONFIG_NAVER_CLIENT_ID,
    'X-NCP-APIGW-API-KEY': import.meta.env.VITE_CONFIG_NAVER_CLIENT_SECRET,
  },
});

export const getAddressByCoordinate = async ({
  x,
  y,
}: {
  x: string;
  y: string;
}) => {
  return await naverService.get('/map-reversegeocode/v2/gc', {
    params: {
      coords: `${x},${y}`,
      orders: 'legalcode,addr,admcode,roadaddr',
      output: 'json',
    },
  });
};
