import React from 'react';
import { useNavigate } from 'react-router';
import { SvgWrap } from './styled';
import { LogoIcon } from '../../assets/svg';

const Logo = (): JSX.Element => {
  const navigate = useNavigate();

  const onLogoClick = () => {
    navigate('/');
  };

  return (
    <SvgWrap onClick={onLogoClick}>
      <LogoIcon width="121px" />
    </SvgWrap>
  );
};

export default Logo;
