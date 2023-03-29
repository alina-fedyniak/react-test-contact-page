import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  HeaderMenuStyled,
  StyledIconsWrap,
  StyledIcon,
} from './MobileMenuStyled';
import { Cart2Icon, ProfilesIcon } from '@/assets/svg';
import { DownOutlined } from '@ant-design/icons';
import { StyledFeatures } from '@/components/Layout/Header/styled';

const MobileMenu = () => {
  const { t } = useTranslation();

  return (
    <>
      <HeaderMenuStyled>
        <Link to={'/'}>
          <div>{t('home')}</div>
        </Link>
        <Link to={'/'}>
          <StyledFeatures>
            {t('features')}
            <DownOutlined />
          </StyledFeatures>
        </Link>
        <Link to={'/'}>
          <div>{t('blog')}</div>
        </Link>
        <Link to={'/'}>
          <div>{t('shop')}</div>
        </Link>
        <Link to={'/'}>
          <div>{t('about')}</div>
        </Link>
        <Link to={'/contact'}>
          <div>{t('contact')}</div>
        </Link>
      </HeaderMenuStyled>
      <StyledIconsWrap>
        <StyledIcon>
          <ProfilesIcon />
        </StyledIcon>
        <StyledIcon>
          <Cart2Icon />
        </StyledIcon>
      </StyledIconsWrap>
    </>
  );
};

export default MobileMenu;
