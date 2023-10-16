import { useContext } from "react";
import { State } from "../context/stateContext";

export default function Footer() {
  const { phone, bankAccount, bankName } =
    useContext(State);

  return (
    <>
      <footer className="footer border-t-2 border-gray-300 pt-5">
        <ul className="flex flex-wrap items-center justify-center">
          <li>
            <span className="font-bold">Phone:</span> {phone}
          </li>
          <li>
            <span className="font-bold">Bank:</span> {bankName}
          </li>
          <li>
            <span className="font-bold">A/c number:</span> {bankAccount}
          </li>
        </ul>
      </footer>

    </>
  );
}
