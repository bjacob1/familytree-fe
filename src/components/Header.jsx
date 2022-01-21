import React from 'react';
import Logo from './header/Logo';
import Contact from './header/Contact';
import Search from './header/Search';
import Social from './header/Social';
import Menu from './header/Menu';

function Header() {
  return (
    <header>
      <div className="container">
        <Logo />
        <Search />
        <Contact />
      </div>
      <div className="navbar-collapse nav-main-collapse collapse">
        <div className="container">
          <Social />
          <Menu />
        </div>
      </div>
    </header>
  );
}

export default Header;
