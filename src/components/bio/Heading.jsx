import React from 'react';
import propTypes from 'prop-types';

function Heading({ text }) {
  return (
    <tr>
      <td colSpan={2} bgcolor="#848484" align="center">
        <b>
          <font color="black">{text}</font>
        </b>
      </td>
    </tr>
  );
}

Heading.propTypes = {
  text: propTypes.string.isRequired,
};

export default Heading;
