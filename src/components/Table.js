import React, { useContext } from "react";
import { State } from "../context/stateContext";

export default function Table() {
  const { list, total } = useContext(State);

  return (
    <>
<table width="100%" className="mb-10">
  <thead>
    <tr className="bg-gray-100 p-1">
      <td className="font-bold">Title</td>
      <td className="font-bold">Pages</td>
      <td className="font-bold">CPP</td>
      <td className="font-bold">Amount</td>
    </tr>
  </thead>
  {list.map(({ id, description, quantity, price, amount }) => (
    <React.Fragment key={id}>
      <tbody>
        <tr className="h-10">
          <td>{description}</td>
          <td>{quantity}</td>
          <td>{price}</td>
          <td>{amount}</td>
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
