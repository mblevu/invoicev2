import { createContext, useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import collect from "collect.js";

export const State = createContext();

export default function StateContext({ children }) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [bankName, setBankName] = useState("");
  const [bankAccount, setBankAccount] = useState("");
  const [website, setWebsite] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientAddress, setClientAddress] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [notes, setNotes] = useState("");
  const [advanceAmount, setAdvanceAmount] = useState("");
  const [paidAmount, setPaidAmount] = useState("");
  const [sendingAmount, setSendingAmount] = useState(0);
  const [description, setDescription] = useState("");
  const [ordernumber, setOrderNumber] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [status, setStatus] = useState("");
  const [amount, setAmount] = useState("");
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);
  const [width] = useState(641);
  // const [invoices, setInvoices] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [uploadedData, setUploadedData] = useState([]);

  
  useEffect(() => {
    if (uploadedData.length > 0) {
      setList([...list, ...uploadedData]);
    }
  }, [uploadedData, list, setList]);
  const componentRef = useRef();

  const handlePrint = () => {
    window.print();
  };

  useEffect(() => {
    if (window.innerWidth < width) {
      alert("Rotate your phone for the best experience");
    }
  }, [width]);

  // Submit form function
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!ordernumber || !description || !quantity || !price) {
      toast.error("Fill in all details");
    } else {
      const newItems = {
        id: uuidv4(),
        ordernumber,
        description,
        quantity,
        price,
        status,
        amount,

      };
      setOrderNumber("");
      setDescription("");
      setQuantity("");
      setPrice("");
      setStatus("");
      setAmount("");
      setList([...list, newItems]);
      setIsEditing(false);
      console.log(list);
    }
  };

  
  // Calculate items amount function
  useEffect(() => {
    const calculateAmount = (amount) => {
      setAmount(quantity * price);
    };

    calculateAmount(amount);
  }, [amount, price, quantity, setAmount]);

  // Use collect.js to calculate the total amount of items in the table
  const calculateTotal = () => {
      const allItems = list
    .filter((item) => item.status !== "Canceled") // Filter out "Canceled" items
    .map((item) => item.amount);

    setTotal(collect(allItems).sum());
    };

    useEffect(() => {
      calculateTotal();
    });

    useEffect(() => {
      const calculateSendingAmount = () => {
        const advance = parseFloat(advanceAmount || 0);
        const paid = parseFloat(paidAmount || 0);
  
        const sending = paid - advance;
        setSendingAmount(sending);
      };
  
      calculateSendingAmount();
    }, [advanceAmount, paidAmount])

  // Edit function
  const editRow = (id) => {
    const editingRow = list.find((row) => row.id === id);
    setList(list.filter((row) => row.id !== id));
    setIsEditing(true);
    setOrderNumber(editingRow.ordernumber);
    setDescription(editingRow.description);
    setQuantity(editingRow.quantity);
    setPrice(editingRow.price);
    setStatus(editingRow.status);
  };

  // Delete function
  const deleteRow = (id) => {
    setList(list.filter((row) => row.id !== id));
    // CalcSum();
    setShowModal(false);
  };

  const context = {
    name,
    setName,
    address,
    setAddress,
    email,
    setEmail,
    phone,
    setPhone,
    bankName,
    setBankName,
    bankAccount,
    setBankAccount,
    website,
    setWebsite,
    clientName,
    setClientName,
    clientAddress,
    setClientAddress,
    invoiceNumber,
    setInvoiceNumber,
    invoiceDate,
    setInvoiceDate,
    dueDate,
    setDueDate,
    notes,
    setNotes,
    paidAmount,
    setPaidAmount,
    advanceAmount,
    setAdvanceAmount,
    sendingAmount,
    setSendingAmount,
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
    setAmount,
    list,
    setList,
    total,
    setTotal,
    width,
    componentRef,
    handlePrint,
    isEditing,
    setIsEditing,
    setUploadedData,
    showModal,
    setShowModal,
    handleSubmit,
    editRow,
    deleteRow,
    showLogoutModal,
    setShowLogoutModal,
  };

  return <State.Provider value={context}>{children}</State.Provider>;
}
