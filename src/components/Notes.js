import { useContext } from "react";
import { State } from "../context/stateContext";

export default function Notes() {
  // const { notes } = useContext(State);
  const { advanceAmount } = useContext(State);
  const { paidAmount } = useContext(State);
  const { sendingAmount } = useContext(State);
  return (
    <>
    <section className="flex-col items-end justify-end font-bold">
    <h3 className="text-2xl font-semibold mb-3">...</h3>
    <div>
    <p className="text-gray-700 text-lg">Paid: Kshs: {paidAmount}</p>
    </div>
    <div>
    <p className="text-gray-700 text-lg">Advance: Kshs. {advanceAmount}</p>
    </div>
    <div>
    <p className="text-gray-700 text-lg">Sending: Kshs: {sendingAmount}</p>
    </div>
    </section>

    {/* <section className="mt-10 mb-5">
      <h3 className="text-2xl font-semibold mb-3">comments</h3>
      <div className="bg-gray-100 rounded-lg p-4">
        <p className="text-gray-700 text-lg">{notes}</p>
      </div>
    </section> */}

    </>
  );
}
