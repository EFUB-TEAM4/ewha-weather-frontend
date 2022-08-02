/* eslint-disable */
import html2canvas from 'html2canvas';

const dataURLtoFile = (dataurl, fileName) => {
  var arr = dataurl.split(','),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  return new File([u8arr], fileName, { type: mime });
};

export default async function shareKakao(tem, rain) {
  window.scrollTo(0, 0);
  const file = await html2canvas(document.getElementById('BearAvater')).then(
    canvas => {
      const file = dataURLtoFile(canvas.toDataURL('image/png'), 'image.png');
      return file;
    },
  );
  const kakao = window.Kakao;
  if (!kakao.isInitialized()) {
    kakao.init(process.env.REACT_APP_KAKAO_TOKEN);
  }
  const imageUrl = await kakao.Share.uploadImage({
    file: [file],
  }).then(function (res) {
    const imageUrl = res.infos.original.url;
    return imageUrl;
  });
  return kakao.Share.sendDefault({
    objectType: 'feed',
    content: {
      title: '이상청',
      description: `지금 이화는 ${tem}°C, 강수확률은 ${rain}%입니다. 실시간 이화인 추천 옷차림은?`,
      imageUrl: imageUrl,
      link: {
        webUrl: process.env.REACT_APP_GOOGLE_OAUTH_REDIRECT_URL,
        mobileWebUrl: process.env.REACT_APP_GOOGLE_OAUTH_REDIRECT_URL,
        androidExecParams: 'test',
      },
    },
    buttons: [
      {
        title: '웹으로 이동',
        link: {
          webUrl: process.env.REACT_APP_GOOGLE_OAUTH_REDIRECT_URL,
          mobileWebUrl: process.env.REACT_APP_GOOGLE_OAUTH_REDIRECT_URL,
        },
      },
    ],
  });
}
