/* eslint-disable import/no-unresolved */
import { getUrl } from 'utils';

export default function shareTwit() {
  // 트위터 팝업 형태로 트윗 작성 에디터에 현재 text 값과 url이 적힘
  const text = '이상청';
  const url = getUrl();
  const twitUrl = `http://twitter.com/share?url=${encodeURIComponent(
    url,
  )}&text=${text}`;
  window.open(twitUrl, 'tweetPop', 'width=486, height=286,scrollbars=yes');
}
