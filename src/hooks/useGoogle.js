/* eslint-disable import/no-unresolved */
import { useEffect } from 'react';
import qs from 'qs';
// import axios from 'axios';
import createOAuthUri from 'utils/OAuthLogin';

function useGoogle() {
  // FIXME: 해당 url은 구글 콘솔에서 승인된 리다이렉션에 등록되어야 한다.
  // const redirect_uri = 'http://127.0.0.1:3000/login';
  /* const loginQueryString =
    qs.stringify({
      client_id: clientId,
      redirect_uri,
      response_type: 'code', // code, token
      scope: 'https://www.googleapis.com/auth/userinfo.email'
    }) */
  localStorage.setItem('useGoogle', 'useGoogle');
  useEffect(() => {
    localStorage.setItem('useEffect', 'useEffect');
    (async () => {
    localStorage.setItem('async', 'async');
      if (window.location.search.split('?').length > 1) {
        const { token } = qs.parse(window.location.search.split('?')[1]);

        localStorage.setItem('token', token);
        // console.log(token)
        // console.log(code)

        // const { data } = await axios.get(`http://localhost:5500/login?code=${code}&redirect_uri=${redirect_uri}`);
        // console.log(data)
      } else if (window.location.search.split('#').length) {
        // 만약 response_type일 경우 여기서 access_token을 파싱하는 코드를 추가한다.
      }
    })();
  }, []);

  return {
    loginUrl: createOAuthUri(),
  };
}

export default useGoogle;
