import React from 'react';
import { Link } from 'react-router-dom';
import Social from './header/Social';

function Footer() {
  return (
    <footer className="short" id="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <h4>Kuzhiamplavil Family Tree</h4>
            <hr className="light" />
            <div className="row">
              <div className="col-md-3">
                <h5>
                  <Link to="/">Home</Link>
                </h5>
              </div>
              <div className="col-md-3">
                <h5>
                  <Link to="/gallery">Picture Gallery</Link>
                </h5>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <h5 className="short">Contact</h5>
            <span className="mail">
              <a href="mailto:brian.jacob@outlook.com?subject=Family Tree Comment">
                Contact me
              </a>
            </span>
            <br />
            <br />
            <Social />
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          <div className="row">
            <div className="col-md-1">
              <a href="index.jsp" className="logo">
                {' '}
                <img
                  alt="Kuzhiamplavil Family Tree"
                  className="img-responsive"
                  src="/images/tree_logo_transparent.png"
                />
              </a>
            </div>
            <div className="col-md-11">
              <p>
                &copy; Copyright 2014{' '}
                <a href="http://www.kuzhiamplavil.net">kuzhiamplavil.net</a>.
                All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
