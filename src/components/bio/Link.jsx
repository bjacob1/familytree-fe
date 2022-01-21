import React from 'react';

function Link({ onClick, id, text }) {
  return (
    <a
      onClick={() => onClick(id)}
      style={{ color: 'blue', textDecoration: 'none', cursor: 'pointer' }}
    >
      {text}
    </a>
  );
}

export default Link;
