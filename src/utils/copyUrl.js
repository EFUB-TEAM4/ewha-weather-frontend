/* eslint-disable no-alert */
/* eslint-disable import/no-unresolved */
import { getUrl } from 'utils';

export default function copyUrl() {
  const url = getUrl();
  if (!document.queryCommandSupported('copy')) {
    return alert('복사 기능이 지원되지 않는 브라우저입니다.');
  }

  // 흐름 2.
  const textarea = document.createElement('textarea');
  textarea.value = url;
  textarea.style.top = 0;
  textarea.style.left = 0;
  textarea.style.position = 'fixed';

  // 흐름 3.
  document.body.appendChild(textarea);
  // focus() -> 사파리 브라우저 서포팅
  textarea.focus();
  // select() -> 사용자가 입력한 내용을 영역을 설정할 때 필요
  textarea.select();
  // 흐름 4.
  document.execCommand('copy');
  // 흐름 5.
  document.body.removeChild(textarea);
  return alert('클립보드에 복사되었습니다.');
}
