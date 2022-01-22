import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

function Member({ label, name, id }) {
  return (
    <td align="center" bgcolor="aqua" width={275}>
      <font color="black">
        <b>{label}:</b>&nbsp;
        {!name ? (
          <>Unknown</>
        ) : (
          <Link
            style={{
              color: 'blue',
              textDecoration: 'none',
              cursor: 'pointer',
            }}
            to={`/result/${id}`}
          >
            {name}
          </Link>
        )}
      </font>
    </td>
  );
}

Member.defaultProps = {
  label: null,
  name: null,
  id: null,
};

Member.propTypes = {
  label: propTypes.string,
  name: propTypes.string,
  id: propTypes.string,
};

export default Member;
