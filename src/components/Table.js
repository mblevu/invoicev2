import React, { useContext } from "react";
import { State } from "../context/stateContext";
import './Table.css';

export default function Table() {
  const { list, total } = useContext(State);
  // const { ordernumber } = useContext(State);

  return (
    <>
<table width="100%" className="excel-table">
  <thead>
    <tr className="excel-header">
      <td className="excel-cell">Order No.</td>
      <td className="excel-cell">Title</td>
      <td className="excel-cell">CPP</td>
      <td className="excel-cell">Pages</td>
      <td className="excel-cell">Amount</td>
      

    </tr>
  </thead>
  {list.map(({ id, ordernumber, description, quantity, price, amount, status }) => (
  <React.Fragment key={id}>
    <tbody>
      
      <tr className={`excel-cell ${
        status === 'Pending' ? 'yellow-bg' :
        status === 'Canceled' ? 'red-bg' :
        status === 'Completed' ? '' : ''
        }`}>
        <td className="excel-cell">{ordernumber}</td>
        <td className="excel-cell">{description}</td>
        <td className="excel-cell">{price}</td>
        <td className="excel-cell">{quantity}</td>
        <td className="excel-cell">{amount}</td>
        {/* <td className="excel-cell">{status}</td> */}
      </tr>
    </tbody>
  </React.Fragment>
  ))}
</table>

<div>
  <h2 className="flex items-end justify-end text-gray-800 text-4xl font-bold">
    Ksh. {total.toLocaleString()}
  </h2>
</div>


    </>
  );
}
