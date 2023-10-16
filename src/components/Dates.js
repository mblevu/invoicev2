import { useContext } from "react";
import { State } from "../context/stateContext";

export default function Dates() {
  const { invoiceDate, dueDate } = useContext(State);

  return (
    <>
      <article className="mt-10 mb-2">
        <ul>
          <li className="p-1 ">
            <span className="font-bold flex items-start justify-start">Date:</span> {invoiceDate}
            <span className="font-bold flex items-start justify-start">Due date:</span> {dueDate}
          </li>      
        </ul>
      </article>
    </>
  );
}
