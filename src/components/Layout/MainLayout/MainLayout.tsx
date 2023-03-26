import React, { ReactNode } from 'react';
import MainLayoutContent from '../MainLayoutContent/MainLayoutContent';

interface IMainLayout {
  children: ReactNode;
}

const MainLayout = ({ children }: IMainLayout): JSX.Element => (
  <MainLayoutContent>{children}</MainLayoutContent>
);

export default MainLayout;
