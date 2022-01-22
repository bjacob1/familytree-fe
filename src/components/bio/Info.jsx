import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

function Info({ text, label, id }) {
  return (
    <tr valign="top">
      <td bgcolor="white" width={180}>
        <b>
          <font color="black">{label}</font>
        </b>
      </td>
      <td width={600} bgcolor="white">
        <Link
          style={{
            color: 'blue',
            textDecoration: 'none',
            cursor: 'pointer',
          }}
          to={`/result/${id}`}
        >
          {text}
        </Link>
      </td>
    </tr>
  );
}

Info.defaultProps = {
  id: null,
};

Info.propTypes = {
  text: propTypes.string.isRequired,
  label: propTypes.string.isRequired,
  id: propTypes.string,
};

export default Info;
