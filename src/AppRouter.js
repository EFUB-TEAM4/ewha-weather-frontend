/* eslint-disable import/no-unresolved */
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  Login,
  Main,
  Save,
  Vote,
  VoteComplete,
  MyPage,
  SaveRecord,
  SaveComplete,
} from 'pages';
import { RequiredAuth } from 'components';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default Route */}
        <Route path="/login" element={<Login />} />

        {/* Private Route : 로그인 된 경우에만 접근 가능한 페이지 */}
        <Route element={<RequiredAuth />}>
          {/* 착장 저장하기 */}
          <Route path="/save" element={<Save />}>
          <Route path="/complete" element={<SaveComplete />} />
          </Route>
          {/* 옷 차림 투표 생성하기 */}
          <Route path="/vote" element={<Vote />}>
            <Route path="/complete/:clothes/:place" element={<VoteComplete />} />
          </Route>

          {/* 마이페이지 저장하기 */}
          <Route path="/mypage" element={<MyPage />}>
            <Route path="/save" element={<SaveRecord />} />
          </Route>
        </Route>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
