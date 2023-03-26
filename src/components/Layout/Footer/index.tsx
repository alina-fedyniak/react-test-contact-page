import React from 'react';
import { FooterWrap, StyledLogo } from './styled';
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
