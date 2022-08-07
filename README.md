# 🌈 이상청

### 이화인을 위한 기상 정보 및 옷차림 정보 제공 서비스

<br>



## 🌞 프로젝트 설명

### 🌦 ABOUT E-WEATHER


> 💡 기존 교내 커뮤니티 날씨 게시판의 시각 정보 부족과, 기상정보를 종합적으로 파악할 수 없다는 문제점에서 시작하여 고안한, 이화인을 위한 기상정보 서비스입니다. 오픈 API를 활용해 매일의 기상정보를 제공하며, 옷에 대한 투표를 통해 교내 커뮤니티  날씨게시판의 기능을 시각적으로 확장합니다. 이화그린 색의 야잠, 뽀글이후드 등을 입은 이화 곰돌이를 통해 기온과 강수상태를 파악할 수 있습니다.

<br>


<table>
    <tr width="100%">
        <td width="50%" align="center"><img src="https://eweather-bucket.s3.ap-northeast-2.amazonaws.com/share/readme/intro1.png"></td>
        <td width="50%" align="center"><img src="https://eweather-bucket.s3.ap-northeast-2.amazonaws.com/share/readme/intro2.png"></td>
    </tr>
</table>
<table>
    <tr width="100%">
        <td width="25%" align="center"><img src="https://eweather-bucket.s3.ap-northeast-2.amazonaws.com/share/readme/func1.png"></td>
        <td width="25%" align="center"><img src="https://eweather-bucket.s3.ap-northeast-2.amazonaws.com/share/readme/func2.png"></td>
        <td width="25%" align="center"><img src="https://eweather-bucket.s3.ap-northeast-2.amazonaws.com/share/readme/func3.png"></td>
        <td width="25%" align="center"><img src="https://eweather-bucket.s3.ap-northeast-2.amazonaws.com/share/readme/func4.png"></td>
    </tr>
</table>


## 🌟팀원 소개


<table border="1" cellspacing="0" cellpadding="0" width="80%">
    <tr width="100%">
        <td width="20%" align="center"><a href= "https://github.com/JangAyeon">장아연</a></td>
        <td width="20%" align="center"><a href= "https://github.com/zhtmahthgus">김소현</a></td>
        <td width="20%" align="center"><a href= "https://github.com/eunbis">최은비</a></td>
    </tr>
    <tr width="100%">
        <td width="20%" align="center"><img src = "https://github.com/JangAyeon.png"></td>
        <td width="20%" align="center"><img src = "https://github.com/zhtmahthgus.png"/></td>
        <td width="20%" align="center"><img src = "https://github.com/eunbis.png"/></td>
    </tr>
    <tr width="100%">
        <td width="20%" align="center">
Google OAuth 로그인 및 Main 페이지 구현</td>
        <td width="20%" align="center">
MyPage, Save Record 페이지 구현</td>
        <td width="20%" align="center">
Save, Vote 페이지 구현</td>
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
		└── 📁common <!--여러 곳에서 쓰이는 컴포넌트는 요 폴더에!!-->
├── 📁pages <!--Routing에 따른 렌더링할 page-->
├── 📁styles <!--Styled Component 세팅 & 스타일 관련 변수-->
├── 📁constants  <!--각종 상수 값 관리-->
├── 📁hooks <!--custiom hooks-->
├── 📁context <!--f리덕스 관련-->
└── 📁utils <!--각종 유틸 함수-->
```

```jsx
/src
├── /assets
│   ├── bear #곰돌이 관련... (옷, 배경,)
│   ├── weather #날씨
|        └── current
|          ├── sunny
|          ├── cloudsun
|          └── cloud
|          └── doublecloud
|          └── rain
|          └── doublerain
|          └── snowrain
|          └── snow
|          └── moon
|          └── mooncloud
|   |    └── record
|          └── (이하동일)
|   |    └── time
|          └── (이하동일)
|   |    └── calender
|          └── (이하동일)
│   ├── prefer #엄치척/엄지다운
|   |    └── white
|   |    └── green
│   ├── arrow #화살표
|   |    └── normal
|   |    └── boxed
│   ├── close #X표
|   |    └── black
|   |    └── white
│   ├── pencil #연필
|   |    └── normal
|   |    └── outline
│   ├── trash #휴지통
|   |    └── normal
|   |    └── outline
│   ├── user #user 동그라미 아이콘
│   └── share #sns 공유 아이콘
|        └── kakao
|        └── insta
|        └── twitter
|        └── local
```

```jsx
├── component
│   ├── common  #여러 페이지에서 공용하는 컴포넌트
│   ├── A 컴포넌트 폴더
     └── index.jsx   #컴포넌트 jsx 코드
	   └── style.js    #styled component 변수들
	  └── index.js #모든 컴포넌트 export 코드
```

```jsx
├── context #(필요성 여부...확인...)
```

```jsx
├── hooks #커스텀 훅 작성
|   └── useInput.js #(예시) : input 관련 단일 훅
|   └── Auth #(예시) : 계정 관리 관련 hook 모은 폴더
		  └── uselogin.js #(예시) : 로그인 관련 단일 훅
	  └── index.js #모든 커스텀 훅 export 코드
```

```jsx
├── styles #스타일 관련
|   └── globalStyles.js #전역 스타일 세팅
|   └── colors.js #색상
|   └── fonts.js #폰트
|   └── theme.js #테마 설정
```

```jsx
└── apis #api 호출 관련 (prefix)
    └── user #(예시) : prefix가 user인 api 모음
 		|  └── index.js #(예시) : 로그인 관련 단일 훅
    ├── getWeather.api.js (예시) : prefix가 weather인 api 모음
    └── index.js #axios create (serverAxios / privateAxios)

```

```jsx
└── utils #유틸 함수
    ├── isEwha.js #(예시) : 정규표현식으로 이화인 메인인지 판정하는 함수
		└── index.js  #모든 util 함수 export 코드
```

```jsx
└── pages #페이지
    ├── Login #로그인 페이지
    ├── Main #메인 페이지
    ├── Save #착장 저장 페이지
    ├── Vote #투표 페이지
    ├── MyPage #마이 페이지 (날씨 기록)
    └── index.js #모든 페이지 export
```

## 🗼 Architecture

![이상청 001](https://user-images.githubusercontent.com/67853616/180640201-612d713c-0ce4-4eff-87c9-d34c45659675.jpeg)
