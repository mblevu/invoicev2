import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ShowAllButton = () => {
  const [invoiceDetails, setInvoiceDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const fetchInvoiceDetails = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://127.0.0.1:8000/invoice/all?skip=0&limit=10");
      if (response.ok) {
        const data = await response.json();
        setInvoiceDetails(data);
        navigate('/invoices')
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button
        onClick={fetchInvoiceDetails}
        disabled={loading}
        className={`btn ${loading ? "btn-loading" : ""}`}
      >
        {loading ? "Loading..." : "Show All"}
      </button>
      {invoiceDetails && (
        <div className="invoice-details">
          {/* Render the invoice details here */}
        </div>
      )}
    </div>
  );
};

export default ShowAllButton;
