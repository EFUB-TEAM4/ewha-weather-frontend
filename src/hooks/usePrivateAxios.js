/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */

// JWT를 axios intercepter에 붙이는 hook
import { useEffect } from 'react';
import { privateAxios } from 'apis';
import { getRefreshToken } from 'apis/Auth.apis';

const usePrivateAxios = token => {
  const auth = localStorage.getItem('token') || token;
  // console.log(auth);
  // const auth="3u89u309u40293"
  useEffect(() => {
    // console.log(auth);
    const requestIntercept = privateAxios.interceptors.request.use(
      config => {
        const tempConfig = config;
        // console.log('config', config);
        if (!config.headers.Authorization) {
          tempConfig.headers.Authorization = `Bearer ${auth}`;
        }
        return tempConfig;
      },
      error => Promise.reject(error),
    );
    const responseIntercept = privateAxios.interceptors.response.use(
      response => response,
      async error => {
        // console.log('response Error', error);
        const prevRequest = error?.config;
        if (error?.response?.status === 403 || (401 && !prevRequest?.sent)) {
          prevRequest.sent = true;
          const newAcessToken = await getRefreshToken();
          //
          prevRequest.headers.Authorization = `Bearer ${newAcessToken}`;
          return privateAxios(prevRequest);
        }
        return Promise.reject(error);
      },
    );

    return () => {
      privateAxios.interceptors.request.eject(requestIntercept);
      privateAxios.interceptors.response.eject(responseIntercept);
    };
  }, [auth]);
  return privateAxios;
};

export default usePrivateAxios;
