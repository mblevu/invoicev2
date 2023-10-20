import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CallToAction, Home, ScrollToTop } from "./pages";
import Invoice from "./components/App";
import AuthContext from "./context/auth";
import { Header, Error, About } from "./pages";
import { ShowAllButton } from "./buttons";
// import ThankYou from "./pages/ThankYou";
// import Cancelled from "./pages/Cancelled";
import InvoicesTable from "./buttons/InvoiceTables";

export default function App() {
  const { user } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <React.Fragment>
              {user ? (
                <Invoice />
              ) : (
                <React.Fragment>
                  <Home />
                  <CallToAction />
                  {/* <Footer /> */}
                </React.Fragment>
              )}
            </React.Fragment>
          }
        ></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/show-all" element={<ShowAllButton />}></Route>
    
        <Route path="/invoices" element={<InvoicesTable />}></Route>
        {/* <Route path="/suggestion-box" element={<SuggestionBox />}></Route>
        <Route path="/thank-you" element={<ThankYou />}></Route>
        <Route path="/cancelled" element={<Cancelled />}></Route> */}
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
