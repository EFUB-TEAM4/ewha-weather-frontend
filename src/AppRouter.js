/* eslint-disable import/no-unresolved */
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  Login,
  Main,
  Save,
  Vote,
  MyPage,
  SaveRecord,
  SaveComplete,
} from 'pages';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default Route */}
        <Route path="/login" element={<Login />} />

        {/* Private Route */}
        {/* 추후 로그인 여부 확인 로직 필요 */}

        <Route path="/save" element={<Save />} />
        <Route path="/savecomplete" element={<SaveComplete />} />
        <Route path="/vote" element={<Vote />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/mypage/save/:date" element={<SaveRecord />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
