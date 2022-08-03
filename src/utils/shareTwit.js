/* eslint-disable import/no-unresolved */

export default function shareTwit() {
  // 트위터 팝업 형태로 트윗 작성 에디터에 현재 text 값과 url이 적힘
  const text = '이상청';
  const twitUrl = `http://twitter.com/share?url=${encodeURIComponent(
    process.env.REACT_APP_GOOGLE_OAUTH_REDIRECT_URL,
  )}&text=${text}`;
  window.open(twitUrl, 'tweetPop', 'width=486, height=286,scrollbars=yes');
}
