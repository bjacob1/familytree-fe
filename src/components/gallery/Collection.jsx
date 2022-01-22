import React from 'react';
import propTypes from 'prop-types';
import Picture from './Picture';

function Collection({ heading, images }) {
  return (
    <>
      <tr>
        <td>
          <h2>{heading}</h2>
        </td>
      </tr>
      {images.map((image) => (
        <Picture
          key={image.url}
          imgUrl={image.url}
          altText={image.alt}
          caption={image.caption}
        />
      ))}
      <tr>
        <td>
          <br />
        </td>
      </tr>
    </>
  );
}

Collection.propTypes = {
  heading: propTypes.string.isRequired,
  images: propTypes.isRequired,
};

export default Collection;
