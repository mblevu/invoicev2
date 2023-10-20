import { CreateAccount, LogIn } from "../buttons";
// import hero from "../images/invoicerv2.png";
import './Home.css'; // Import a separate CSS file for styling

export default function Home() {
  return (
    <div className="home-container">
      <div className="content-box bg-color-blue">
        <article>
          <h1 className="title-text text-4xl md:text-5xl font-bold">
            Need an Invoice?
          </h1>
          <p className="content-text mt-5 md:mt-0">
            Generate and Download invoices for your clients in seconds.
          </p>

          <ul className="button-container">
            <li className="mr-3">
              <CreateAccount />
            </li>
            <li>
              <LogIn />
            </li>
          </ul>
        </article>
      </div>
    </div>
  );
}
