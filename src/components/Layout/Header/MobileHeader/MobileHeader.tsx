import React, { useState } from 'react';
import { CloseIcon, LogoIconWhite, MobileMenuIcon } from '@/assets/svg';
import MobileMenu from '../MobileMenu/MobileMenu';
import {
  StyledHeader,
  StyledLogoWrap,
  StyledWrap,
  StyledCloseBtn,
} from './MobileHeaderStyles';
import Logo from '@/components/Logo/Logo';
import Drawer from '@/components/Drawer/Drawer';

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
      <Drawer
        style={{
          background: 'black',
          color: 'white',
        }}
        title={<LogoIconWhite style={{ width: '91px', marginLeft: '-21px' }} />}
        placement="top"
        closeIcon={false}
        open={open}
        height="auto"
      >
        <StyledCloseBtn>
          <CloseIcon onClick={onClose} />
        </StyledCloseBtn>
        <MobileMenu />
      </Drawer>
    </StyledWrap>
  );
};

export default MobileHeader;
