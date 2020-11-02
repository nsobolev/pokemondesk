import React from 'react';

import Logo from './Logo';
import Menu from './Menu';

const Header = () => {
  return (
    <header>
      <div>
        <Logo />
      </div>
      <div>
        <Menu />
      </div>
    </header>
  );
};

export default Header;
