import React from 'react';
import { FooterWrap, StyledLogo } from './FooterStyled';
import { LogoIconWhite } from '@/assets/svg';
import FooterContent from '@/components/Layout/Footer/FooterContent/FooterContent';

const Footer = (): JSX.Element => {
  return (
    <FooterWrap>
      <StyledLogo>
        <LogoIconWhite />
      </StyledLogo>
      <FooterContent />
    </FooterWrap>
  );
};

export default Footer;
