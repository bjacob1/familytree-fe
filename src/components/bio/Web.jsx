import React from 'react';
import propTypes from 'prop-types';
import Heading from './Heading';
import Member from './web/Member';

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
                {!family.paternalGrandfather ? (
                  <Member label="Grandfather" />
                ) : (
                  <Member
                    label="Grandfather"
                    name={personService.getFullName(family.paternalGrandfather)}
                    id={family.paternalGrandfather.id}
                  />
                )}
              </tr>
              <tr>
                <td width={200} />
                {!family.father ? (
                  <Member label="Father" />
                ) : (
                  <Member
                    label="Father"
                    name={personService.getFullName(family.father)}
                    id={family.father.id}
                  />
                )}
              </tr>
              <tr>
                <td bgcolor="white">&nbsp;</td>
                <td bgcolor="white" />
                {!family.paternalGrandmother ? (
                  <Member label="Grandmother" />
                ) : (
                  <Member
                    label="Grandmother"
                    name={personService.getFullName(family.paternalGrandmother)}
                    id={family.paternalGrandmother.id}
                  />
                )}
              </tr>
              <tr>
                <td align="center" bgcolor="aqua">
                  <font color="black">
                    <b>{personService.getFullName(family.person)}</b>
                  </font>
                </td>
              </tr>
              <tr>
                <td bgcolor="white">&nbsp;</td>
                <td bgcolor="white" />
                {!family.maternalGrandfather ? (
                  <Member label="Grandfather" />
                ) : (
                  <Member
                    label="Grandfather"
                    name={personService.getFullName(family.maternalGrandfather)}
                    id={family.maternalGrandfather.id}
                  />
                )}
              </tr>
              <tr>
                <td width={200} />
                {!family.mother ? (
                  <Member label="Mother" />
                ) : (
                  <Member
                    label="Mother"
                    name={personService.getFullName(family.mother)}
                    id={family.mother.id}
                  />
                )}
              </tr>
              <tr>
                <td bgcolor="white" />
                <td bgcolor="white" />
                {!family.maternalGrandmother ? (
                  <Member label="Grandmother" />
                ) : (
                  <Member
                    label="Grandmother"
                    name={personService.getFullName(family.maternalGrandmother)}
                    id={family.maternalGrandmother.id}
                  />
                )}
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </>
  );
}

Web.defaultProps = {
  family: null,
  personService: null,
};

Web.propTypes = {
  family: propTypes.objectOf(
    propTypes.oneOfType([propTypes.object, propTypes.string])
  ),
  personService: propTypes.objectOf(propTypes.func),
};

export default Web;
