/* eslint-disable import/no-unresolved */

// JWT를 axios intercepter에 붙이는 hook
import { useEffect } from 'react';
import { privateAxios } from 'apis';
import { getRefreshToken } from 'apis/Auth.apis';

const usePrivateAxios = token => {
  const auth = token || localStorage.getItem('token');
  // console.log(auth);
  useEffect(() => {
    // console.log(auth);
    const requestIntercept = privateAxios.interceptors.request.use(
      config => {
        const tempConfig = config;
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
        const prevRequest = error?.config;
        if (error?.response?.status === 403 && !prevRequest?.sent) {
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
      privateAxios.interceptors.response.eject(requestIntercept);
      privateAxios.interceptors.response.eject(responseIntercept);
    };
  }, [auth]);
  return privateAxios;
};

export default usePrivateAxios;
