import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderMenuStyled } from './styled';

const HeaderMenu = () => {
  return (
    <HeaderMenuStyled>
      <Link to={'/'}>
        <div>Home</div>
      </Link>
      <Link to={'/'}>
        <div>Features</div>
      </Link>
      <Link to={'/'}>
        <div>Blog</div>
      </Link>
      <Link to={'/'}>
        <div>Shop</div>
      </Link>
      <Link to={'/'}>
        <div>About</div>
      </Link>
      <Link to={'/contact'}>
        <div>Contact</div>
      </Link>
    </HeaderMenuStyled>
  );
};

export default HeaderMenu;
