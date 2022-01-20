import React from "react";
import Search from "./header/Search";

function Header({ handleSearch, term, setTerm, handleHome, handlePics }) {
  return (
    <header>
      <div className="container">
        <h1 className="logo">
          <a onClick={handleHome} style={{ cursor: "pointer" }}>
            <img
              alt="Family Tree"
              width={225}
              // width={54}
              height={54}
              data-sticky-width={198}
              data-sticky-height={40}
              src="/images/family.png"
              // src="/images/k_logo.png"
            />
          </a>
        </h1>
        <Search handleSearch={handleSearch} term={term} setTerm={setTerm} />
        <nav>
          <ul className="nav nav-pills nav-top">
            <li className="mail">
              <span>
                <i className="icon icon-envelope">
                  <a
                    href="mailto:brian.jacob@outlook.com?subject=Family Tree Comment"
                    style={{ textDecoration: "none", color: "blue" }}
                  >
                    Contact
                  </a>
                </i>
              </span>
            </li>
          </ul>
        </nav>
        <button
          className="btn btn-responsive-nav btn-inverse"
          data-toggle="collapse"
          data-target=".nav-main-collapse"
        >
          <i className="icon icon-bars" />
        </button>
      </div>
      <div className="navbar-collapse nav-main-collapse collapse">
        <div className="container">
          {/* <div className="social-icons">
            <ul className="social-icons">
              <li className="facebook">
                <a
                  href="https://www.facebook.com/groups/116835038377090/"
                  target="_blank"
                  title="Facebook"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div> */}
          <nav className="nav-main mega-menu">
            <ul className="nav nav-pills nav-main" id="mainMenu">
              <li>
                <a
                  className="dropdown-toggle"
                  onClick={handleHome}
                  style={{ cursor: "pointer" }}
                >
                  Home
                </a>
                {/* <a
                  className="dropdown-toggle"
                  onClick={handleHome}
                  href="">
                  Home
                </a> */}
              </li>
              <li>
                <a onClick={handlePics} style={{ cursor: "pointer" }}>
                  Picture Gallery
                </a>
              </li>
              {/* <li>
                <a href="mailto:brian.jacob@outlook.com"> Contact </a>
              </li> */}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
