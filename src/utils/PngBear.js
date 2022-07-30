import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';

export default function PngBear() {
  // console.log('onDownload');
  const date = new Date(); // 현재 시간 이용해 파일명 지정
  domtoimage.toBlob(document.getElementById('BearAvater')).then(blob => {
    // console.log(blob);
    saveAs(blob, `${date}_BearAvater.png`);
  });
}

// canvas : 곰돌이 아바타 로컬에 저장하는 함수
/* function onSaveAs(uri, filename) {
  console.log('onSaveAs');
  const link = document.createElement('a');
  link.href = uri;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// canvas : 곰돌이 아바타 캡쳐하는 함수 : 곰돌이 아바타 로컬 저장 버튼 클릭 
function getLocalImgBtn() {
  window.scrollTo(0, 0);
  const date = new Date(); // 현재 시간 이용해 파일명 지정
  html2canvas(document.getElementById('BearAvater')).then(canvas => {
    onSaveAs(canvas.toDataURL('image/png'), `${date}_BearAvater.png`);
  });
} */
