import { useContext } from "react";
import ClientDetails from "./ClientDetails";
import Dates from "./Dates";
// import Footer from "./Footer";
import Header from "./Header";
import MainDetails from "./MainDetails";
import Notes from "./Notes";
import Table from "./Table";
import TableForm from "./TableForm";
import ReactToPrint from "react-to-print";
// import { DonateButton } from "../buttons";
import { State } from "../context/stateContext";
import Footer from "./Footer";
import './App.css';
import HTMLtoExcel from "react-html-to-excel";
// import { useState } from "react";

function App() {
  const {
    name,
    setName,
    // address,
    // setAddress,
    // email,
    // setEmail,
    phone,
    setPhone,
    bankName,
    setBankName,
    bankAccount,
    setBankAccount,
    // website,
    // setWebsite,
    clientName,
    setClientName,
    // clientAddress,
    // setClientAddress,
    invoiceNumber,
    setInvoiceNumber,
    invoiceDate,
    setInvoiceDate,
    dueDate,
    setDueDate,
    paidAmount,
    setPaidAmount,
    advanceAmount,
    setAdvanceAmount,
    sendingAmount,
    setSendingAmount,
    // balance,
    // setBalance,
    // notes,
    // setNotes,
    componentRef,
  } = useContext(State);


  return (
    <>
      <main
        className="m-5 p-5 xl:grid grid-cols-2 gap-10 xl:items-start"
        style={{
          maxWidth: "1920px",
          margin: "auto",
        }}
      >
        <section>
          <div className="text-center text-xl uppercase bold text-black-1000">
            Bill me 
          </div>
          <div className="bg-secondary p-5 rounded-xl border-4 border-primary shadow-lg">
            <div className="flex flex-col justify-center">
              <article className="md:grid grid-cols-2 gap-10">
                <div className="flex flex-col">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="text"
                    id="name"
                    placeholder="Enter your name"
                    maxLength={20}
                    autoComplete="off"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Enter your phone"
                    maxLength={12}
                    autoComplete="off"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>

              </article>

              <article className="md:grid grid-cols-2 gap-10">
                <div className="flex flex-col">
                  <label htmlFor="bankName">Bank</label>
                  <input
                    type="text"
                    name="bankName"
                    id="bankName"
                    placeholder="Enter your bank name"
                    maxLength={10}
                    autoComplete="off"
                    value={bankName}
                    onChange={(e) => setBankName(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="bankAccount">
                    account number
                  </label>
                  <input
                    type="text"
                    name="bankAccount"
                    id="bankAccount"
                    placeholder="Enter your bank account number"
                    maxLength={20}
                    autoComplete="off"
                    value={bankAccount}
                    onChange={(e) => setBankAccount(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="clientName">Client</label>
                  <input
                    type="text"
                    name="clientName"
                    id="clientName"
                    placeholder="Enter your client's name"
                    maxLength={20}
                    autoComplete="off"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="invoiceNumber">Order Number</label>
                  <input
                    type="text"
                    name="invoiceNumber"
                    id="invoiceNumber"
                    placeholder="Order Number"
                    autoComplete="off"
                    value={invoiceNumber}
                    onChange={(e) => setInvoiceNumber(e.target.value)}
                  />
                </div>
              </article>

              <article className="md:grid grid-cols-3 gap-10">
                <div className="flex flex-col">
                  <label htmlFor="invoiceDate">Date</label>
                  <input
                    type="date"
                    name="invoiceDate"
                    id="invoiceDate"
                    placeholder="Invoice Date"
                    autoComplete="off"
                    value={invoiceDate}
                    onChange={(e) => setInvoiceDate(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="dueDate">Due Date</label>
                  <input
                    type="date"
                    name="dueDate"
                    id="dueDate"
                    placeholder="Invoice Date"
                    autoComplete="off"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                  />
                </div>
              </article>

              {/* This is our table form */}
              <article>
                <TableForm />
              </article>
              <div className="flex flex-col">
              <label htmlFor="advanceAmount">Advance amount</label>
              <input
                type="text"
                name="advanceAmount"
                id="advanceAmount"
                placeholder="Enter advance amount"
                value={advanceAmount}
                onChange={(e) => setAdvanceAmount(e.target.value)}
                />
              </div>

              <div className="flex flex-col">
              <label htmlFor="paidAmount">Paid amount</label>
              <input
                type="text"
                name="paidAmount"
                id="paidAmount"
                placeholder="Enter paid amount"
                value={paidAmount}
                onChange={(e) => setPaidAmount(e.target.value)}
              />
              </div>

              <div className="flex flex-col">
              <label htmlFor="sendingAmount">Sending amount</label>
              <input
                type="text"
                name="sendingAmount"
                id="sendingAmount"
                placeholder="Enter sending amount"
                value={sendingAmount}
                onChange={(e) => setSendingAmount(e.target.value)}
              />
              </div>

            </div>
          </div>

        </section>

        {/* Invoice Preview */}
        
        <div className="invoice__preview bg-light-gray p-4 rounded-xl border-2 border-gray-400">
        <div className="text-center text-2xl text-black underline -600 font-semibold py-4 border-b border-gray-300">
        Your Invoice Preview
        </div>

        <ReactToPrint
          trigger={() => (
            <button type="button" className="button">
              <span className="button__text">Download</span>
              <span className="button__icon">
                <svg
                  className="svg"
                  data-name="Layer 2"
                  id="bdd05811-e15d-428c-bb53-8661459f9307"
                  viewBox="0 0 35 35"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path>
                  <path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path>
                  <path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path>
                </svg>
              </span>
            </button>
          )}
          content={() => componentRef.current}
          />
          <HTMLtoExcel
          id="test-table-xls"
          table="table"
          filename="invoice"
          sheet="invoice"
          />
          <div ref={componentRef} className="p-5">
            <Header />

            <Table id="test-table-xls" />
            
            <Notes />

            <Dates />

            <MainDetails />

            <ClientDetails />

            <Footer />

          </div>
        </div>
      </main>
    </>
  );
}

export default App;
