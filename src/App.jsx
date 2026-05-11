// ====================== APP.JSX ======================

import "./App.css";
import { useState } from "react";

function App() {
  // ================= PAINT =================

  const [paintName, setPaintName] = useState("");
  const [paintQty, setPaintQty] = useState("");
  const [paintPrice, setPaintPrice] = useState("");
  const [paintSearch, setPaintSearch] = useState("");

  const [paintData, setPaintData] = useState([]);

  // ================= TIMBER =================

  const [timberName, setTimberName] = useState("");
  const [timberQty, setTimberQty] = useState("");
  const [timberPrice, setTimberPrice] = useState("");
  const [timberSearch, setTimberSearch] = useState("");

  const [timberData, setTimberData] = useState([]);

  // ================= CUSTOMER =================

  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerAmount, setCustomerAmount] = useState("");
  const [paidAmount, setPaidAmount] = useState("");
  const [customerSearch, setCustomerSearch] = useState("");

  const [customerData, setCustomerData] = useState([]);

  // ================= SAVE FUNCTIONS =================

  const savePaint = () => {
    if (!paintName || !paintQty || !paintPrice) return;

    const newPaint = {
      serial: paintData.length + 1,
      name: paintName,
      qty: paintQty,
      price: paintPrice,
    };

    setPaintData([...paintData, newPaint]);

    setPaintName("");
    setPaintQty("");
    setPaintPrice("");
  };

  const saveTimber = () => {
    if (!timberName || !timberQty || !timberPrice) return;

    const newTimber = {
      serial: timberData.length + 1,
      name: timberName,
      qty: timberQty,
      price: timberPrice,
    };

    setTimberData([...timberData, newTimber]);

    setTimberName("");
    setTimberQty("");
    setTimberPrice("");
  };

  const saveCustomer = () => {
    if (
      !customerName ||
      !customerPhone ||
      !customerAmount ||
      !paidAmount
    )
      return;

    const pending =
      Number(customerAmount) - Number(paidAmount);

    const newCustomer = {
      serial: customerData.length + 1,
      name: customerName,
      phone: customerPhone,
      total: customerAmount,
      paid: paidAmount,
      pending: pending,
    };

    setCustomerData([...customerData, newCustomer]);

    setCustomerName("");
    setCustomerPhone("");
    setCustomerAmount("");
    setPaidAmount("");
  };

  // ================= FILTERS =================

  const filteredPaint = paintData.filter((item) =>
    item.name
      .toLowerCase()
      .includes(paintSearch.toLowerCase())
  );

  const filteredTimber = timberData.filter((item) =>
    item.name
      .toLowerCase()
      .includes(timberSearch.toLowerCase())
  );

  const filteredCustomer = customerData.filter(
    (item) =>
      item.name
        .toLowerCase()
        .includes(customerSearch.toLowerCase())
  );

  // ================= TOTALS =================

  const totalProducts =
    paintData.length + timberData.length;

  const totalPending = customerData.reduce(
    (total, item) => total + item.pending,
    0
  );

  return (
    <div className="main-container">
      {/* ================= SIDEBAR ================= */}

      <div className="sidebar">
        <img
          src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
          alt=""
        />

        <h1>
          MAHALESHWAR PAINTS AND TIMBERS
        </h1>

        <h2>SATISH SAINI</h2>

        <button>Dashboard</button>
        <button>Customers</button>
      </div>

      {/* ================= MAIN ================= */}

      <div className="main-content">
        {/* HEADER */}

        <div className="header">
          <h1>
            MAHALESHWAR PAINTS AND TIMBERS
          </h1>

          <h2>
            Owner: SATISH SAINI | +91 9828087208
          </h2>

          <h3>Jaipur</h3>
        </div>

        {/* SECTION CARDS */}

        <div className="cards">
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd"
              alt=""
            />

            <button className="paint-btn">
              🎨 Paint Section
            </button>
          </div>

          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1513694203232-719a280e022f"
              alt=""
            />

            <button className="timber-btn">
              🪵 Timber Section
            </button>
          </div>
        </div>

        {/* TOTAL BOXES */}

        <div className="total-boxes">
          <div className="total-box">
            <h2>Total Products</h2>
            <h1>{totalProducts}</h1>
          </div>

          <div className="total-box">
            <h2>Customers</h2>
            <h1>{customerData.length}</h1>
          </div>

          <div className="total-box">
            <h2>Pending Payment</h2>
            <h1>₹{totalPending}</h1>
          </div>
        </div>

        {/* ================= PAINT SECTION ================= */}

        <div className="section">
          <h1 className="section-title paint-title">
            🎨 Paint Section
          </h1>

          <input
            type="text"
            placeholder="Search Paint..."
            className="search"
            value={paintSearch}
            onChange={(e) =>
              setPaintSearch(e.target.value)
            }
          />

          <input
            type="text"
            placeholder="Paint Name"
            className="input"
            value={paintName}
            onChange={(e) =>
              setPaintName(e.target.value)
            }
          />

          <input
            type="number"
            placeholder="Quantity"
            className="input"
            value={paintQty}
            onChange={(e) =>
              setPaintQty(e.target.value)
            }
          />

          <input
            type="number"
            placeholder="Price"
            className="input"
            value={paintPrice}
            onChange={(e) =>
              setPaintPrice(e.target.value)
            }
          />

          <button
            className="save-btn"
            onClick={savePaint}
          >
            Save Paint
          </button>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Sr No.</th>
                  <th>Paint Name</th>
                  <th>Qty</th>
                  <th>Price</th>
                </tr>
              </thead>

              <tbody>
                {filteredPaint.map((item, index) => (
                  <tr key={index}>
                    <td>{item.serial}</td>
                    <td>{item.name}</td>
                    <td>{item.qty}</td>
                    <td>₹{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ================= TIMBER SECTION ================= */}

        <div className="section">
          <h1 className="section-title timber-title">
            🪵 Timber Section
          </h1>

          <input
            type="text"
            placeholder="Search Timber..."
            className="search"
            value={timberSearch}
            onChange={(e) =>
              setTimberSearch(e.target.value)
            }
          />

          <input
            type="text"
            placeholder="Timber Name"
            className="input"
            value={timberName}
            onChange={(e) =>
              setTimberName(e.target.value)
            }
          />

          <input
            type="number"
            placeholder="Quantity"
            className="input"
            value={timberQty}
            onChange={(e) =>
              setTimberQty(e.target.value)
            }
          />

          <input
            type="number"
            placeholder="Price"
            className="input"
            value={timberPrice}
            onChange={(e) =>
              setTimberPrice(e.target.value)
            }
          />

          <button
            className="save-btn"
            onClick={saveTimber}
          >
            Save Timber
          </button>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Sr No.</th>
                  <th>Timber Name</th>
                  <th>Qty</th>
                  <th>Price</th>
                </tr>
              </thead>

              <tbody>
                {filteredTimber.map((item, index) => (
                  <tr key={index}>
                    <td>{item.serial}</td>
                    <td>{item.name}</td>
                    <td>{item.qty}</td>
                    <td>₹{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ================= CUSTOMER SECTION ================= */}

        <div className="section">
          <h1 className="section-title customer-title">
            👨 Customers
          </h1>

          <input
            type="text"
            placeholder="Search Customer..."
            className="search"
            value={customerSearch}
            onChange={(e) =>
              setCustomerSearch(e.target.value)
            }
          />

          <input
            type="text"
            placeholder="Customer Name"
            className="input"
            value={customerName}
            onChange={(e) =>
              setCustomerName(e.target.value)
            }
          />

          <input
            type="number"
            placeholder="Phone Number"
            className="input"
            value={customerPhone}
            onChange={(e) =>
              setCustomerPhone(e.target.value)
            }
          />

          <input
            type="number"
            placeholder="Total Amount"
            className="input"
            value={customerAmount}
            onChange={(e) =>
              setCustomerAmount(e.target.value)
            }
          />

          <input
            type="number"
            placeholder="Paid Amount"
            className="input"
            value={paidAmount}
            onChange={(e) =>
              setPaidAmount(e.target.value)
            }
          />

          <button
            className="save-btn"
            onClick={saveCustomer}
          >
            Save Customer
          </button>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Sr No.</th>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Total</th>
                  <th>Paid</th>
                  <th>Pending</th>
                </tr>
              </thead>

              <tbody>
                {filteredCustomer.map(
                  (item, index) => (
                    <tr key={index}>
                      <td>{item.serial}</td>
                      <td>{item.name}</td>
                      <td>{item.phone}</td>
                      <td>₹{item.total}</td>
                      <td>₹{item.paid}</td>
                      <td>₹{item.pending}</td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;