# 🌈 이상청

### 이화인을 위한 기상 정보 및 옷차림 정보 제공 서비스

<br>


## 🌦 ABOUT E-WEATHER

<table>
    <tr width="100%">
        <td width="50%" align="center"><img src="https://eweather-bucket.s3.ap-northeast-2.amazonaws.com/share/readme/intro1.png"></td>
        <td width="50%" align="center"><img src="https://eweather-bucket.s3.ap-northeast-2.amazonaws.com/share/readme/intro2.png"></td>
    </tr>
</table>


> 💡 기존 교내 커뮤니티 날씨 게시판의 시각 정보 부족과, 기상정보를 종합적으로 파악할 수 없다는 문제점에서 시작하여 고안한, 이화인을 위한 기상정보 서비스입니다. 오픈 API를 활용해 매일의 기상정보를 제공하며, 옷에 대한 투표를 통해 교내 커뮤니티  날씨게시판의 기능을 시각적으로 확장합니다. 이화그린 색의 야잠, 뽀글이후드 등을 입은 이화 곰돌이를 통해 기온과 강수상태를 파악할 수 있습니다.

<br>

## 🛠 기술 스택 (Technique Used)

![이상청 001](https://user-images.githubusercontent.com/67853616/180640201-612d713c-0ce4-4eff-87c9-d34c45659675.jpeg)

## ✔️ CI/CD PipeLine
![다운로드](https://user-images.githubusercontent.com/67853616/185734566-bf84d0d1-c2d3-4d1b-a7ea-07c2eae0c677.png)
![다운로드 (1)](https://user-images.githubusercontent.com/67853616/185734590-9fb85e51-a4a0-44cd-b1c7-bfe965944146.png)



## 🌟팀원 소개

### 1. 장아연([**@JangAyeon**](https://github.com/JangAyeon))
* 백엔드 협업을 통한 REST API, Google OAuth 2.0 로그인, 쿠키/토큰에 대한 이해
* [디자이너 협업을 통한 UI/UX 이해 및 png layer 활용한 곰돌이 아바타 생성](https://hixsch-kixsch59.tistory.com/84?category=1060918)
* [GitHub Action 활용한 CI/CD 구축](https://hixsch-kixsch59.tistory.com/80?category=1060918) <br>
( AWS S3 & CloudFront & Route 53 통한 정적 웹호스팅과 서브 도메인 api 연결 )
* [Axios interceptor 이용한 http request와 response 커스텀](https://hixsch-kixsch59.tistory.com/82?category=1060918)
* [Recoil 활용한 비동기적 상태관리 및 UI 관리를 통한 사용자 경험 향상](https://hixsch-kixsch59.tistory.com/81?category=1060918)
* [미디어 쿼리와 useWindowWidth 훅을 활용한 반응형 처리](https://hixsch-kixsch59.tistory.com/83?category=1060918)
* [OpenGraph Protocol 사용한 SEO 처리](https://hixsch-kixsch59.tistory.com/85?category=1060918)

### 2. 최은비([**@eunbi**](https://github.com/eunbi))
* Save 페이지
* Vote 페이지

### 3. 김소현([**@zhtmahthgus**](https://github.com/zhtmahthgus))
* MyPage 페이지
* SaveRecord 페이지 

## 📋 페이지 소개
<table>
    <tr width="100%">
        <td width="50%" align="center"><img width="997" alt="스크린샷 2022-08-20 오후 5 07 12" src="https://user-images.githubusercontent.com/67853616/185735604-228d8957-ca64-4b58-9196-cda14fa1d72f.png">
</td>
        <td width="50%" align="center"><img width="584" alt="스크린샷 2022-08-20 오후 5 08 20" src="https://user-images.githubusercontent.com/67853616/185735630-3c5d0078-374b-4bd0-933a-08fe018c92a4.png"></td>
    </tr>
</table>

<table>
    <tr width="100%">
        <td width="50%" align="center"><img width="593" alt="스크린샷 2022-08-20 오후 5 09 54" src="https://user-images.githubusercontent.com/67853616/185735791-37eb4f54-9119-44ef-bc0e-32beb51d3968.png">
</td>
        <td width="50%" align="center"><img width="590" alt="스크린샷 2022-08-20 오후 5 09 41" src="https://user-images.githubusercontent.com/67853616/185735824-56d41ef5-3069-4240-b576-e31747a6b967.png"></td>
    </tr>
</table>

## 📚디렉토리 구조

```
📁src
├── 📑.env <!--서버주소, 각종 키-->
├── 📑index.js <!--JS entry & set HOC-->
├── 📑App.js <!--Main Excution File-->
├── 📑AppRouter.js <!--Route-->
├── 📁apis <!--Api 호출-->
├── 📁assets <!--Image File (SVG) -->
├── 📁components <!--Atomic design-->
	└── 📁common <!--여러 곳에서 쓰이는 컴포넌트-->
├── 📁pages <!--Routing에 따른 렌더링할 page-->
├── 📁styles <!--Styled Component 세팅 & 스타일 관련 변수-->
├── 📁constants  <!--각종 상수 값 관리-->
├── 📁hooks <!--custiom hooks-->
├── 📁context <!--Recoil 상태 관리 : 유저 정보 및 기상 정보-->
└── 📁utils <!--각종 유틸 함수-->
```

