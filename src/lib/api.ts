import axios, { AxiosError } from 'axios';
import { GetServerSidePropsContext } from 'next';
import requestIp from 'request-ip';
import Cookies from 'universal-cookie';

import { getToken } from '@/lib/cookies';
import { UninterceptedApiError } from '@/types/api';

const isServer = () => {
  return typeof window === 'undefined';
};
let context = <GetServerSidePropsContext>{};

export const api = axios.create({
  baseURL:
    process.env.NODE_ENV === 'development'
      ? process.env.NEXT_PUBLIC_API_DEVELOPMENT_URL
      : process.env.NEXT_PUBLIC_API_PRODUCTION_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: false,
  timeout: 5000,
  timeoutErrorMessage: 'Tidak Ada Jaringan',
});

api.defaults.withCredentials = false;

api.interceptors.request.use(function (config) {
  if (config.headers) {
    let token: string | undefined;

    if (isServer()) {
      if (!context)
        throw 'Api Context not found. You must call `setApiContext(context)` before calling api on server-side';

      const cookies = new Cookies(context.req?.headers.cookie);
      const detectedIp = requestIp.getClientIp(context.req);
      // if in production
      if (
        detectedIp &&
        process.env.NEXT_PUBLIC_STATUS_PRODUCTION === 'production'
      ) {
        config.headers['X-Forwarded-For'] = detectedIp;
      }
      /** Get cookies from context if server side */
      token = cookies.get('@itsexpo/token');
    } else {
      /** Get cookies from context if server side */
      token = getToken();
    }

    config.headers.Authorization = token ? `Bearer ${token}` : '';
  }

  return config;
});

api.interceptors.response.use(
  (config) => {
    return config;
  },
  (error: AxiosError<UninterceptedApiError>) => {
    // parse error
    if (error.response?.data.message) {
      return Promise.reject({
        ...error,
        response: {
          ...error.response,
          data: {
            ...error.response.data,
            message:
              typeof error.response.data.message === 'string'
                ? error.response.data.message
                : Object.values(error.response.data.message)[0][0],
          },
        },
      });
    }
    return Promise.reject(error);
  }
);

/**
 * Must be set when calling api on server side
 */
export const setApiContext = (_context: GetServerSidePropsContext) => {
  context = _context;
  return;
};

export default api;
