import React from 'react';

function Result({ imgUrl, name, message, onClick }) {
  const link_style = {
    textDecoration: 'none',
    color: 'blue',
    cursor: 'pointer',
  };
  if (!imgUrl || imgUrl === '' || imgUrl === '.') {
    imgUrl = 'default.png';
  }
  return message ? (
    <tr valign="top">
      <th width="588">{message}</th>
    </tr>
  ) : (
    <tr valign="top">
      <th width="8">
        <img src={`/images/${imgUrl}`} width="40" height="40" alt={name} />
      </th>
      <th width="580">
        <a onClick={onClick} style={link_style}>
          {name}
        </a>
      </th>
    </tr>
  );
}

export default Result;
