function handleCallbackResponse(response) {
  console.log(response);
  console.log('Encoded JWT', response.credential);
}

function handleGoogleBtn() {
  /* 로그인 client ID 출력 확인 */
  console.log(
    'handleGoogleBtn',
    `${process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID}`,
  );
  /* global google */
  google.accounts.id.initialize({
    client_id: `${process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID}`,
    callback: handleCallbackResponse,
  });
  google.accounts.id.renderButton(document.getElementById('SignIn'), {
    theme: 'outline',
    size: 'medium',
  });
}

export default handleGoogleBtn;
