import React from 'react';
import Logo from '../../Logo/Logo';
import HeaderMenu from './HeaderMenu';
import {
  HeaderWrap,
  StyledIcon,
  StyledIconsWrap,
  StyledBlockMenu,
} from './styled';
import { CartIcon, ProfileIcon } from '@/assets/svg';
import MobileHeader from '@/components/Layout/Header/MobileHeader/MobileHeader';

const Header = () => {
  return (
    <>
      <HeaderWrap>
        <Logo />
        <StyledBlockMenu>
          <HeaderMenu />
          <StyledIconsWrap>
            <StyledIcon>
              <ProfileIcon />
            </StyledIcon>
            <StyledIcon>
              <CartIcon />
            </StyledIcon>
          </StyledIconsWrap>
        </StyledBlockMenu>
      </HeaderWrap>
      <MobileHeader />
    </>
  );
};

export default Header;
