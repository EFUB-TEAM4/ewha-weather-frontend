import qs from 'qs';

// OAuth 서버 연결 Uri 및 Redirect uri 파라미터 설정
function createOAuthUri() {
  const loginQueryString = qs.stringify({
    redirect_uri: `${process.env.REACT_APP_GOOGLE_OAUTH_REDIRECT_URL}`,
    /* response_type:"code", */
    flowName: 'GeneralOAuthFlow',
  });
  const AUTHORIZE_URI = `${process.env.REACT_APP_GOOGLE_OAUTH_SERVER}`;
  const OAuthRequestUri = `${AUTHORIZE_URI}?${loginQueryString}`;
  return OAuthRequestUri;
}

// 로그인 버튼 실행시 OAuth 서버로 연결
export default function OAuthLogin() {
  const loginUrl = createOAuthUri();
  // console.log('hadleLoginBtn', loginUrl);
  window.location.href = loginUrl;
}
