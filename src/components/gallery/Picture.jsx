import React from 'react';

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

export default Picture;
