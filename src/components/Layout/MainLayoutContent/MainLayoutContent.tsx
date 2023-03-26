import React, { ReactNode } from 'react';
import { StyledContent } from '../Styles/LayoutStyles';
import Header from '../Header/Header';
import Footer from '@/components/Layout/Footer';

interface IMainLayout {
  children: ReactNode;
}

const MainLayoutContent = ({ children }: IMainLayout): JSX.Element => (
  <>
    <Header />
    <StyledContent>{children}</StyledContent>
    <Footer />
  </>
);

export default MainLayoutContent;
