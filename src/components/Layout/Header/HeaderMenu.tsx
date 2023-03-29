import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderMenuStyled, StyledFeatures } from './styled';
import { useTranslation } from 'react-i18next';
import { DownOutlined } from '@ant-design/icons';

const HeaderMenu = (): JSX.Element => {
  const { t } = useTranslation();

  return (
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
  );
};

export default HeaderMenu;
