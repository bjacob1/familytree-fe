import React from 'react';

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

export default Heading;
