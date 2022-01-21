import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <nav className="nav-main mega-menu">
      <ul className="nav nav-pills nav-main" id="mainMenu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/gallery">Picture Gallery</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
