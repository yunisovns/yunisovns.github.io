import React, { memo } from 'react';
import { AppLogo } from '../AppLogo';
import { Avatar } from './Avatar';
import { ThemeSwitchButton } from './ThemeSwitchButton/ThemeSwitchButton';

export const Header = memo(() => {
  return (
    <header className="sticky top-0 box-border flex h-12 items-center border-0 border-b-4 border-solid border-indigo-500 bg-white px-7 py-4 dark:bg-slate-800">
      <AppLogo />
      <div className="flex w-full flex-row flex-wrap items-center justify-between">
        <div className="flex w-full flex-row flex-wrap items-center justify-end gap-5">
          <ThemeSwitchButton />
          <div className="flex items-center gap-1">
            <button className=" flex h-6 w-6 justify-center rounded-full bg-white text-center hover:cursor-pointer dark:bg-slate-800 dark:text-white"></button>
          </div>
          <p>Страница</p>
          <Avatar />
        </div>
      </div>
    </header>
  );
});

Header.displayName = 'Header';
