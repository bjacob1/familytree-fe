import React from 'react';

function Contact() {
  return (
    <nav>
      <ul className="nav nav-pills nav-top">
        <li className="mail">
          <span>
            <i className="icon icon-envelope">
              <a
                href="mailto:brian.jacob@outlook.com?subject=Family Tree Comment"
                style={{ textDecoration: 'none', color: 'blue' }}
              >
                Contact
              </a>
            </i>
          </span>
        </li>
      </ul>
    </nav>
  );
}

export default Contact;
