import React from 'react';
import propTypes from 'prop-types';

function Picture({ imgUrl, altText, caption }) {
  return (
    <>
      <tr>
        <td>
          <img src={imgUrl} width="733" alt={altText} />
        </td>
      </tr>
      <tr>
        <td>
          <h6>{caption}</h6>
        </td>
      </tr>
    </>
  );
}

Picture.propTypes = {
  imgUrl: propTypes.string.isRequired,
  altText: propTypes.string.isRequired,
  caption: propTypes.string.isRequired,
};

export default Picture;
