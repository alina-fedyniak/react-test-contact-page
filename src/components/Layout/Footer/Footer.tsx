import React from 'react';
import { FooterWrap, StyledLogo } from './FooterStyled';
import { LogoIconWhite } from '@/assets/svg';

const Footer = (): JSX.Element => {
  return (
    <FooterWrap>
      <StyledLogo>
        <LogoIconWhite />
      </StyledLogo>
    </FooterWrap>
  );
};

export default Footer;
