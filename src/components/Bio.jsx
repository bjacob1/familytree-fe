import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Heading from './bio/Heading';
import Info from './bio/Info';
import useResource from '../hooks/resource';
import Web from './bio/Web';

function Bio() {
  const params = useParams();
  const [family, personService] = useResource();
  useEffect(() => {
    const { id } = params;
    personService.getFamilyById(id);
  }, [params]);
  if (!family) {
    return null;
  }
  return (
    <div className="container">
      <table width="100%" className="table table-bordered">
        <tbody>
          {!family.person.image ||
          (family.person.image === '' &&
            family.person.family_image === '') ? null : (
            <>
              <Heading text="Pictures" />
              <tr valign="top" border="0">
                <td
                  colSpan={2}
                  bgcolor="white"
                  width="50%"
                  align="center"
                  border="0"
                >
                  <table border="0">
                    <tbody>
                      <tr>
                        <td>
                          <img src={`/images/${family.person.image}`} alt="" />
                        </td>
                        <td width={300} />
                        <td>
                          <img
                            src={`/images/${family.person.family_image}`}
                            alt=""
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </>
          )}
          <Heading text="Information" />
          <Info text={personService.getFullName(family.person)} label="Name:" />
          <Info text={family.person.family_name} label="Family Name:" />
          {family.person.state === '' ||
          family.person.state === 'Kerala' ? null : (
            <Info
              text={`${family.person.state}, ${family.person.country}`}
              label="Location:"
            />
          )}
          <Heading text="Immediate Family Members" />
          {!family.father ? null : (
            <Info
              text={personService.getFullName(family.father)}
              label="Father:"
              id={family.father.id}
            />
          )}
          {!family.mother ? null : (
            <Info
              text={personService.getFullName(family.mother)}
              label="Mother:"
              id={family.mother.id}
            />
          )}
          {!family.spouse ? null : (
            <Info
              text={personService.getFullName(family.spouse)}
              label="Spouse:"
              id={family.spouse.id}
            />
          )}
          {family.children.data.length === 0 ? null : (
            <tr valign="top">
              <td bgcolor="white" width={180}>
                <b>
                  <font color="black">Children:</font>
                </b>
              </td>
              <td width={600} bgcolor="white">
                {family.children.data.map((child) => (
                  <div key={child.id}>
                    <Link
                      style={{
                        color: 'blue',
                        textDecoration: 'none',
                        cursor: 'pointer',
                      }}
                      to={`/result/${child.id}`}
                    >
                      {personService.getFullName(child)}
                    </Link>
                    <br />
                  </div>
                ))}
              </td>
            </tr>
          )}
          {family.siblings.data.length === 0 ? null : (
            <tr valign="top">
              <td bgcolor="white" width={180}>
                <b>
                  <font color="black">Siblings:</font>
                </b>
              </td>
              <td width={600} bgcolor="white">
                {family.siblings.data
                  // .filter((sibling) => sibling.id !== family.person.id)
                  .map((sibling) => (
                    <div key={sibling.id}>
                      <Link
                        style={{
                          color: 'blue',
                          textDecoration: 'none',
                          cursor: 'pointer',
                        }}
                        to={`/result/${sibling.id}`}
                      >
                        {personService.getFullName(sibling)}
                      </Link>
                      <br />
                    </div>
                  ))}
              </td>
            </tr>
          )}
          <Web family={family} personService={personService} />
        </tbody>
      </table>
    </div>
  );
}

export default Bio;
