import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import Heading from './Heading';

function Web({ family, personService }) {
  return (
    <>
      <Heading text="Family Web" />
      <tr>
        <td width="100%" height={100} colSpan={2}>
          <table cellSpacing={3} bgcolor="white" width="100%">
            <tbody>
              <tr>
                <td width={200} />
                <td width={200} />
                <td align="center" bgcolor="aqua" width={275}>
                  <b>
                    <font color="black">
                      Grandfather:{' '}
                      <Link
                        style={{
                          color: 'blue',
                          textDecoration: 'none',
                          cursor: 'pointer',
                        }}
                        to={`/result/${family.paternalGrandfather.id}`}
                      >
                        {personService.getFullName(family.paternalGrandfather)}
                      </Link>
                    </font>
                  </b>
                </td>
              </tr>
              <tr>
                <td width={200} />
                <td bgcolor="aqua" align="center" width={250}>
                  <b>
                    <font color="black">Father: </font>
                  </b>
                </td>
              </tr>
              <tr>
                <td bgcolor="white">&nbsp;</td>
                <td bgcolor="white" />
                <td align="center" bgcolor="aqua">
                  <b>
                    <font color="black">Grandmother:</font>
                  </b>
                </td>
              </tr>
              <tr>
                <td align="center" bgcolor="aqua">
                  <b>Name</b>
                </td>
              </tr>
              <tr>
                <td bgcolor="white">&nbsp;</td>
                <td bgcolor="white" />
                <td bgcolor="aqua" align="center">
                  <b>
                    <font color="black">Grandfather:</font>
                  </b>
                </td>
              </tr>
              <tr>
                <td width={200} />
                <td align="center" bgcolor="aqua">
                  <b>
                    <font color="black">Mother:</font>
                  </b>
                </td>
              </tr>
              <tr>
                <td bgcolor="white" />
                <td bgcolor="white" />
                <td bgcolor="aqua" width={300} align="center">
                  <b>
                    <font color="black">Grandmother:</font>
                  </b>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </>
  );
}

Web.propTypes = {
  family: propTypes.objectOf(propTypes.object).isRequired,
  personService: propTypes.objectOf(propTypes.func).isRequired,
};

export default Web;
