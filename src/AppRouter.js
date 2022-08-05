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
          <Route path="/save" element={<Save />} />
          <Route path="/savecomplete" element={<SaveComplete />} />
          <Route path="/vote" element={<Vote />} />
          <Route
            path="/votecomplete/:clothes/:place"
            element={<VoteComplete />}
          />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/mypage/save" element={<SaveRecord />} />
        </Route>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
