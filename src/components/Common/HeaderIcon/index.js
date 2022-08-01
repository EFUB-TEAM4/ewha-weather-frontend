/* eslint-disable import/no-unresolved */
import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { User } from 'assets';
import { logout } from 'hooks';
import {
  StyledRoot,
  ToolTipArrow,
  ToolTip,
  IconButton,
  Image,
  StyledLink,
  Line,
  LogoutButton,
} from './style';

function HeaderIcon() {
  const [isClicked, setIsClicked] = useState(0);
  function useClickOutside(ref) {
    function ClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsClicked(0);
      }
    }
    useEffect(() => {
      document.addEventListener('mousedown', ClickOutside);
      return () => {
        document.removeEventListener('mousedown', ClickOutside);
      };
    });
  }
  const Ref = useRef(null);
  useClickOutside(Ref);
  return (
    <StyledRoot ref={Ref}>
      <IconButton type="button" onClick={() => setIsClicked(prev => !prev)}>
        <Image src={User} alt="HeaderIcon" />
      </IconButton>
      {isClicked ? (
        <div>
          <ToolTipArrow />
          <ToolTip>
            <StyledLink to="/MyPage">마이페이지</StyledLink>
            <Line />
            {localStorage.getItem('token') ? (
              <LogoutButton onClick={logout}>로그아웃</LogoutButton>
            ) : (
              <NavLink to="/login">
                <LogoutButton>로그인</LogoutButton>
              </NavLink>
            )}
          </ToolTip>
        </div>
      ) : null}
    </StyledRoot>
  );
}

export default HeaderIcon;
