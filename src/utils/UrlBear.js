/* eslint-disable import/no-unresolved */
/* eslint-disable no-plusplus */
import uploadImgur from 'apis/Imgur/uploadImgur.api';
import html2canvas from 'html2canvas';

// canvas로 얻은 dataURI -> Blob으로 전환
function dataURLtoBlob(dataurl) {
  // console.log(dataurl)
  const arr = dataurl.split(',');
  const mime = arr[0].match(/:(.*?);/)[1];
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], { type: mime });
}

// blob 곰돌이 -> Imgur 서버 post : 곰돌이 이미지 링크 받는 함수
async function postImgur(base64url) {
  // console.log(base64url);
  const blob = dataURLtoBlob(base64url);
  // console.log(blob);
  const formData = new FormData();
  formData.append('image', blob);

  // console.log(formData);
  const {
    data: {
      data: { link },
    },
  } = await uploadImgur(formData);
  return link;
}

// 곰돌이 아바타 링크 받는 함수 : 곰돌이 아바타 공유 버튼 클릭
export default async function UrlBear() {
  window.scrollTo(0, 0);

  html2canvas(document.getElementById('BearAvater')).then(async canvas => {
    const ImgUrl = await postImgur(canvas.toDataURL('image/jpg', 1.0));
    // console.log(ImgUrl);
    return ImgUrl;
  });
}
