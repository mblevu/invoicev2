import React, { useState, useEffect } from 'react';

const InvoicesTable = () => {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    // Fetch the invoices from your API or database and update the state
    const fetchInvoices = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/invoice/');
        if (response.ok) {
          const data = await response.json();
          setInvoices(data);
        } else {
          console.error('Failed to fetch invoices');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchInvoices();
  }, []);

  return (
    <div>
      <h1>Invoices</h1>
      <table>
        <thead>
          <tr>
            <th>Invoice Number</th>
            <th>Client</th>
            <th>Amount</th>
            {/* Add more table headers as needed */}
          </tr>
        </thead>
        <tbody>
          {invoices.map((invoice) => (
            <tr key={invoice.id}>
              <td>{invoice.invoiceNumber}</td>
              <td>{invoice.client}</td>
              <td>${invoice.amount}</td>
              {/* Add more table cells for other details */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InvoicesTable;
