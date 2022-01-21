import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Heading from './bio/Heading';
import Info from './bio/Info';
// import Link from './bio/Link';
import useResource from '../hooks/resource';
// import Web from './bio/Web'

function Bio() {
  const params = useParams();
  const [family, personService] = useResource();
  const { id } = params;
  personService.getFamilyById(id);
  console.log('family', family);
  return (
    <div>Hello</div>
    // <div className="container">
    //   <table width="100%" className="table table-bordered">
    //     <tbody>
    //       {!person.image ||
    //       (person.image === '' && person.family_image === '') ? null : (
    //         <>
    //           <Heading text="Pictures" />
    //           <tr valign="top" border="0">
    //             <td
    //               colSpan={2}
    //               bgcolor="white"
    //               width="50%"
    //               align="center"
    //               border="0"
    //             >
    //               <table border="0">
    //                 <tbody>
    //                   <tr>
    //                     <td>
    //                       <img src={`/images/${person.image}`} alt="" />
    //                     </td>
    //                     <td width={300} />
    //                     <td>
    //                       <img src={`/images/${person.family_image}`} alt="" />
    //                     </td>
    //                   </tr>
    //                 </tbody>
    //               </table>
    //             </td>
    //           </tr>
    //         </>
    //       )}
    //       <Heading text="Information" />
    //       <Info text={person.full_name} label="Name:" />
    //       <Info text={person.family_name} label="Family Name:" />
    //       {person.state === '' || person.state === 'Kerala' ? null : (
    //         <Info
    //           text={`${person.state}, ${person.country}`}
    //           label="Location:"
    //         />
    //       )}
    //       <Heading text="Immediate Family Members" />
    //       {!father ? null : (
    //         <Info
    //           text={father.name}
    //           label="Father:"
    //           // onClick={() => onClick(father.id)}
    //         />
    //       )}
    //       {!mother ? null : (
    //         <Info
    //           text={mother.name}
    //           label="Mother:"
    //           // onClick={() => onClick(mother.id)}
    //         />
    //       )}
    //       {!spouse ? null : (
    //         <Info
    //           text={spouse.name}
    //           label="Spouse:"
    //           // onClick={() => onClick(spouse.id)}
    //         />
    //       )}
    //       {/* {children_objs.length === 0 ? null : (
    //         <tr valign="top">
    //           <td bgcolor="white" width={180}>
    //             <b>
    //               <font color="black">Children:</font>
    //             </b>
    //           </td>
    //           <td width={600} bgcolor="white">
    //             {children_objs.map((child_obj) => (
    //               <div key={child_obj.name}>
    //                 <Link
    //                   onClick={onClick}
    //                   id={child_obj.id}
    //                   text={child_obj.name}
    //                 />
    //                 <br />
    //               </div>
    //             ))}
    //           </td>
    //         </tr>
    //       )} */}
    //       {/* {sibling_objs.length === 0 ? null : (
    //         <tr valign="top">
    //           <td bgcolor="white" width={180}>
    //             <b>
    //               <font color="black">Siblings:</font>
    //             </b>
    //           </td>
    //           <td width={600} bgcolor="white">
    //             {sibling_objs.map((sibling_obj) => (
    //               <div key={sibling_obj.name}>
    //                 <Link
    //                   onClick={onClick}
    //                   id={sibling_obj.id}
    //                   text={sibling_obj.name}
    //                 />
    //                 <br />
    //               </div>
    //             ))}
    //           </td>
    //         </tr>
    //       )} */}
    //       {/* <Web /> */}
    //     </tbody>
    //   </table>
    // </div>
  );
}

export default Bio;
