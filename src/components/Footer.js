import { useContext } from "react";
import { State } from "../context/stateContext";

export default function Footer() {
  const { name, email, phone, bankAccount, bankName } =
    useContext(State);

  return (
    <>
      <footer className="footer border-t-2 border-gray-300 pt-5">
        <ul className="flex flex-wrap items-center justify-center">
          {/* <li>
            <span className="font-bold">Your name:</span> {name}
          </li> */}
          <li>
            <span className="font-bold">email:</span> {email}
          </li>
          <li>
            <span className="font-bold">Mpesa number:</span> {phone}
          </li>
          <li>
            <span className="font-bold">Bank:</span> {bankName}
          </li>
          <li>
            <span className="font-bold">A/c holder:</span> {name}
          </li>
          <li>
            <span className="font-bold">A/c number:</span> {bankAccount}
          </li>
          {/* <li>
            <span className="font-bold">Website:</span>{" "}
            <a href={website} target="_blank" rel="noopenner noreferrer">
              {website}
            </a>
          </li> */}
        </ul>
      </footer>

      {/* <p className="text-center px-5 mt-8 text-xs ">
        InvoiceApp is built by{" "}
        <a
          href="https://ts.com"
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          name name
        </a>
      </p> */}
    </>
  );
}
