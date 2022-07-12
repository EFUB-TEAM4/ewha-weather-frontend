/* eslint-disable import/no-unresolved */
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login, Main, Save, Vote, MyPage } from "pages";

function AppRouter() {
  return (
    <Routes>
      {/* Default Route */}
      <Route path="/login" element={<Login />} />

      {/* Private Route */}
      {/* 추후 로그인 여부 확인 로직 필요 */}
      <Route path="/" element={<Main />} exact="true" />
      <Route path="/save" element={<Save />} />
      <Route path="/vote" element={<Vote />} />
      <Route path="/mypage" element={<MyPage />} />
    </Routes>
  );
}

export default AppRouter;
