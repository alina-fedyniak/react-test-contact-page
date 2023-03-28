import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderMenuStyled } from './styled';
import { useTranslation } from 'react-i18next';

const HeaderMenu = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <HeaderMenuStyled>
      <Link to={'/'}>
        <div>{t('home')}</div>
      </Link>
      <Link to={'/'}>
        <div>{t('features')}</div>
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
