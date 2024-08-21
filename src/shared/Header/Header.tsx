import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearProfile, setToken } from '../../store/authSlice';
import { RootState } from '../../store/store';
import { AppLogo } from '../AppLogo';
import { Avatar } from './Avatar';
import { LangSwitcherButton } from './LangSwitcherButton/LangSwitcherButton';
import { ThemeSwitchButton } from './ThemeSwitchButton/ThemeSwitchButton';

export const Header = memo(() => {
  const isToken = useSelector((state: RootState) => state.auth.token);
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(setToken(null));
    dispatch(clearProfile());
  };
  return (
    <header className="sticky top-0 box-border flex h-12 items-center border-0 border-b-4 border-solid border-indigo-500 bg-white px-7 py-4 dark:bg-slate-800">
      <AppLogo />

      <div className="flex w-full  flex-row flex-wrap items-center justify-between">
        <div className="flex w-full flex-row flex-wrap items-center justify-end gap-5">
          <div className="flex items-center gap-1">
            <Link to="/" className="flex items-center gap-1">
              Главная
            </Link>
            <Link to="/profile" className="flex items-center gap-1">
              Профиль
            </Link>
            <Link to="/operation" className="flex items-center gap-1">
              Операции
            </Link>
            <Link to="/modal" className="flex items-center gap-1">
              модальное окно
            </Link>
          </div>
          <ThemeSwitchButton />
          <LangSwitcherButton />
          <div className="flex items-center gap-1"></div>
          <Avatar />
          {isToken && (
            <button onClick={onClick} className="flex items-center gap-1">
              Выйти
            </button>
          )}
        </div>
      </div>
    </header>
  );
});

Header.displayName = 'Header';
