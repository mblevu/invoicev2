import { useContext } from "react";
import { State } from "../context/stateContext";

export default function MainDetails() {
  const { name } = useContext(State);
  const { clientName } = useContext(State);
  const { invoiceNumber } = useContext(State);

  return (
    <>
      <section className="flex flex-col items-start justify-start">
        {/* <h2 className="font-bold text-3xl uppercase mb-1">{name}</h2> */}
        <p>From: {name}</p>
        <p>To: {clientName}</p>
        <span className="font-bold ">Order number:</span> {invoiceNumber}
      </section>
    </>
  );
}
