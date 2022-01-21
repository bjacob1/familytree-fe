import React from 'react';

function Info({ text, label, onClick }) {
  return (
    <tr valign="top">
      <td bgcolor="white" width={180}>
        <b>
          <font color="black">{label}</font>
        </b>
      </td>
      <td width={600} bgcolor="white">
        {!onClick ? (
          <>{text}</>
        ) : (
          <a
            onClick={onClick}
            style={{ color: 'blue', textDecoration: 'none', cursor: 'pointer' }}
          >
            {text}
          </a>
        )}
      </td>
    </tr>
  );
}

export default Info;
