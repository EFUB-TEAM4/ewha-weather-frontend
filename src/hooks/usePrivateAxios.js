/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */

// JWT를 axios intercepter에 붙이는 hook
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { privateAxios } from 'apis';
import checkToken from 'apis/Auth.apis';
import LoginState from 'state/loginState';

const usePrivateAxios = token => {
  const auth = localStorage.getItem('token') || token;
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(LoginState);
  const navigation = useNavigate();
  // const [isLoggedIn, setIsLoggedIn] = useRecoilState(LoginState);
  // console.log(auth);
  // 💙 항상 ACCESS_TOKEN 붙여 요청 보내기
  useEffect(() => {
    // 💙 axios 요청을 보내기 전 intercept
    const requestIntercept = privateAxios.interceptors.request.use(
      config => {
        // 💙 요청을 보내기 전  interceptor 설정
        const TokenConfig = config;
        // console.log('config', config);
        if (!config.headers.Authorization) {
          // 💙 Header : Bearer Token 없는 경우
          // 💙  request 보낼 때 access Token 자동으로 붙이도록 함
          TokenConfig.headers.Authorization = `Bearer ${auth}`;
          // console.log(tempConfig.headers)
        }
        return TokenConfig;
      },
      error => {
        // 💙 오류 요청을 보내기 전 수행할 일
        Promise.reject(error);
      },
    );
    // 💙 then/catch 실행 전 (= 응답 처리하기 전) interceptor 설정
    // 💙 요청 완료 후 응답을 처리하기 전에 가로채서 원하는 작업 수행하도록 함
    // 💙 Token 유효성 검사 : AccessToken 만료로 인한 에러 발생 시 RefreshToken 이용해 요청
    const responseIntercept = privateAxios.interceptors.response.use(
      async response => /* 💙 응답 데이터 반환 */ response,
      async error => {
        // console.log('response Error', error);
        const originalRequest = error?.config;
        if (
          error?.response?.status === 403 ||
          (401 && !originalRequest?.sent)
        ) {
          originalRequest.sent = true;
          // privateAxios.headers.Authorization[`Bearer ${auth}`];
          const newAcessToken = await checkToken(
            privateAxios.headers.Authorization[`Bearer ${auth}`],
          );
          // console.log(newAcessToken);
          originalRequest.headers.Authorization = `Bearer ${newAcessToken}`;
          return privateAxios(originalRequest);
        }
        navigation('/');
        return Promise.reject(error);
      },
    );

    return () => {
      privateAxios.interceptors.request.eject(requestIntercept);
      privateAxios.interceptors.response.eject(responseIntercept);
    };
  }, []);
  return privateAxios;
};

export default usePrivateAxios;
