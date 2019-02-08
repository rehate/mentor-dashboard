import React from 'react';
import './table-rows.css';

export default function Trows(props) {

  function setclass(status, item) {
    if (item) {
      return "green"
    } else {
      return status.replace(' ', '');
    }
  };
  
  const items = props.rows.map((item, ind) => {
    if (ind === 0) {

    } else if( ind===1 ) {
      return <th>{item}</th>
    } 
    return <td className={setclass(props.rows[0], item)}>{item}</td>
  })

  return (
    <tr>
      {items}
    </tr>
  );
  
}