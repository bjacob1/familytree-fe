import React from 'react';
import propTypes from 'prop-types';

function Result({ image, name, onClick }) {
  const linkStyle = {
    textDecoration: 'none',
    color: 'blue',
    cursor: 'pointer',
  };
  let imgUrl;
  if (!image || image === '' || image === '.') {
    imgUrl = 'default.png';
  } else {
    imgUrl = image;
  }
  // return
  //   <tr valign="top">
  //     <th width="588">{message}</th>
  //   </tr>
  // ) :
  return (
    <tr valign="top">
      <th width="8">
        <img src={`/images/${imgUrl}`} width="40" height="40" alt={name} />
      </th>
      <th width="580">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#" onClick={onClick} style={linkStyle}>
          {name}
        </a>
      </th>
    </tr>
  );
}

Result.defaultProps = {
  name: null,
  image: null,
  onClick: null,
};

Result.propTypes = {
  name: propTypes.string,
  image: propTypes.string,
  onClick: propTypes.func,
};

export default Result;
