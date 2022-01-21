import React from 'react';
import { Link } from 'react-router-dom';

function Logo() {
  return (
    <h1 className="logo">
      <Link to="/">
        <img
          alt="Family Tree"
          width={225}
          height={54}
          data-sticky-width={198}
          data-sticky-height={40}
          src="/images/tree_logo_transparent.png"
        />
      </Link>
    </h1>
  );
}

export default Logo;
