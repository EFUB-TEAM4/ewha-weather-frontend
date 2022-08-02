import qs from 'qs';

// OAuth Refresh Token 이용해 만료된 AccessToken 재발급 받기 위한 url 생성
export default function createOAuthUri() {
  const loginQueryString = qs.stringify({
    rrefresh_token: `${process.env.REACT_APP_GOOGLE_OAUTH_REDIRECT_URL}`,
    grant_type: 'refresh_token',
  });
  const AUTHORIZE_URI = `${process.env.REACT_APP_GOOGLE_OAUTH_SERVER}`;
  const OAuthRequestUri = `${AUTHORIZE_URI}/token?${loginQueryString}`;
  return OAuthRequestUri;
}
