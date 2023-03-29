import React, { useState } from 'react';
import { CloseIcon, LogoIconWhite, MobileMenuIcon } from '@/assets/svg';
import MobileMenu from '../MobileMenu/MobileMenu';
import {
  StyledHeader,
  StyledLogoWrap,
  StyledDriver,
  StyledWrap,
} from './MobileHeaderStyles';
import Logo from '@/components/Logo/Logo';

const MobileHeader = (): JSX.Element => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <StyledWrap>
      <StyledHeader>
        <StyledLogoWrap>
          <Logo />
        </StyledLogoWrap>
        <MobileMenuIcon onClick={showDrawer} />
      </StyledHeader>
      <StyledDriver
        style={{
          background: 'black',
          color: 'white',
        }}
        title={<LogoIconWhite style={{ width: '91px' }} />}
        placement="top"
        onClose={onClose}
        closeIcon={<CloseIcon />}
        open={open}
        height="auto"
      >
        <MobileMenu />
      </StyledDriver>
    </StyledWrap>
  );
};

export default MobileHeader;
