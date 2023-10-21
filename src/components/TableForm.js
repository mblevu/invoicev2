import React, { useContext } from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DeleteModal from "./DeleteModal";
import { State } from "../context/stateContext";
// import Papa from "papaparse";
import * as XLSX from "xlsx";
import { v4 as uuidv4 } from "uuid";

export default function TableForm() {
  const {
    ordernumber,
    setOrderNumber,
    description,
    setDescription,
    quantity,
    setQuantity,
    price,
    setPrice,
    status,
    setStatus,
    amount,
    list,
    setList,
    total,
    isEditing,
    showModal,
    // setUploadedData,
    setShowModal,
    handleSubmit,
    editRow,
  } = useContext(State);

  const handleExcelData = (data) => {
    const updatedList = data.slice(1).map((row) => {
      const orderNumber = row[1];
      const title = row[2];
      const pages = row[3];
      const cpp = row[4];
      const amount = row[5];
  
      // Check if all required fields have data
      if (orderNumber && title && pages && cpp && amount) {
        return {
          id: uuidv4(),
          ordernumber: orderNumber,
          description: title,
          quantity: pages,
          price: cpp,
          amount: amount,
          status: "", // You can set the default status here
        };
      }
      return null; // Ignore rows that are missing data in the specified columns
    });
  
    // Remove null entries and add to the list
    setList([...list, ...updatedList.filter((item) => item !== null)]);
  };
  
  

const handleFileUpload = (e) => {
  const file = e.target.files[0];

  if (!file) {
    return;
  }

  const reader = new FileReader();

  reader.onload = (e) => {
    const results = [];

    // Handle Excel files (XLSX)
    if (file.name.endsWith(".xlsx") || file.name.endsWith(".xls")) {
      const workbook = XLSX.read(e.target.result, { type: "array" });
      workbook.SheetNames.forEach((sheetName) => {
        const worksheet = workbook.Sheets[sheetName];
        const data = XLSX.utils.sheet_to_json(worksheet, { header: 1, raw: false });
        results.push(...data);
      });
      handleExcelData(results);
    }
  };

  reader.readAsArrayBuffer(file);
};

  return (
    <>
      <ToastContainer position="top-right" theme="colored" />

      <form onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <label htmlFor="file">Upload Invoice</label>
        <input
          type="file"
          name="file"
          id="file"
          accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
          onChange={handleFileUpload}
          />
        </div>
        <div className="flex flex-col md:flex-row md:mt-5">

        <div className="flex flex-col flex-1 md:mr-4">
            <label htmlFor="ordernumber">Order Number</label>
            <input
              type="text"
              name="ordernumber"
              id="ordernumber"
              className=""
              placeholder="Job ordernumber"
              maxLength={96}
              value={ordernumber}
              onChange={(e) => setOrderNumber(e.target.value)}
            />
          </div>
          <div className="flex flex-col flex-1 md:mr-4">
            <label htmlFor="description">Title</label>
            <input
              type="text"
              name="description"
              id="description"
              className={status === "Pending" ? "text-yellow-500" : status === "Canceled" ? "text-red-500" : ""}
              placeholder="Job description"
              maxLength={96}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

        </div>
        <div>
        <div className="flex flex-col flex-1 ">
            <label htmlFor="quantity">Pages</label>
            <input
              type="text"
              name="quantity"
              id="quantity"
              placeholder="Quantity"
              maxLength={10}
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:mt-4">
          <div className="flex flex-col flex-1 md:mr-4">
            <label htmlFor="price">CPP</label>
            <input
              type="text"
              name="price"
              id="price"
              placeholder="Cost per page"
              maxLength={33}
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="flex flex-col flex-1 md:mr-4">
            <label htmlFor="status">Status</label>
            <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            >
            <option value="">Select Status</option>
            <option value="Pending">Pending</option>
            <option value="Canceled">Canceled</option>
            <option value="Completed">Completed</option>
            </select>

          </div>
          <div className="flex flex-col">
            <label htmlFor="amount">Amount</label>
            <p>{amount}</p>
          </div>
        </div>

        <div className="md:grid grid-cols-3 gap-10"></div>
        
        <button
          type="submit"
          className="bg-green-500 mb-5 text-white font-bold py-2 px-8 rounded hover:bg-black-600 hover:text-white transition-all duration-150 hover:ring-4 hover:ring-blue-400"
        >
          {isEditing ? "Finish Editing" : "Add"}
        </button>
      </form>

      {/* Table items to be displayed in the table */}
      <table width="100%" className="mb-10 overflow-auto">
        <thead>
          <tr className="bg-gray-100 p-1">
            <td className="font-bold">Order No:</td>
            <td className="font-bold">Title</td>
            <td className="font-bold">Pages</td>
            <td className="font-bold">CPP</td>
            <td className="font-bold">Amount</td>
            <td className="font-bold">Status</td>
          </tr>
        </thead>
        {list.map(({ id, ordernumber, description, quantity, price, amount, status }) => (
          <React.Fragment key={id}>
            <tbody>
              <tr className="h-10">
                <td>{ordernumber}</td>
                <td
                  className={
                    status === "Pending" ? "text-yellow-500" : status === "Canceled" ? "text-red-500" : ""
                  }
                >
                  {description}
                </td>
                <td className="">{quantity}</td>
                <td>{price}</td>
                <td className="amount">{amount}</td>
                <td>{status}</td>
                <td>
                  <button onClick={() => editRow(id)}>
                    <AiOutlineEdit className="text-green-500 font-bold text-xl" />
                  </button>
                </td>
                <td>
                  <button onClick={() => setShowModal(true)}>
                    <AiOutlineDelete className="text-red-500 font-bold text-xl" />
                  </button>
                </td>
              </tr>
            </tbody>
            {showModal && <DeleteModal id={id} />}
          </React.Fragment>
        ))}
      </table>

      <div>
        <h2 className="flex items-end justify-end text-gray-800 text-4xl font-bold">
          Kshs. {total.toLocaleString()}
        </h2>
      </div>
    </>
  );
}