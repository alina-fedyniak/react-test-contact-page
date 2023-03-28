import React, { ReactNode } from 'react';
import { Drawer as AntdDrawer, DrawerProps } from 'antd';

interface IDrawer extends DrawerProps {
  children: ReactNode;
}

const Drawer = ({ children, ...props }: IDrawer) => (
  <AntdDrawer {...props}>{children}</AntdDrawer>
);

export default Drawer;
