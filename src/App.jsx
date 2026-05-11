// ====================== APP.JSX ======================

import { useState } from "react";

export default function App() {
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

    const pending = Number(customerAmount) - Number(paidAmount);

    const newCustomer = {
      serial: customerData.length + 1,
      name: customerName,
      phone: customerPhone,
      amount: customerAmount,
      paid: paidAmount,
      pending: pending,
    };

    setCustomerData([...customerData, newCustomer]);

    setCustomerName("");
    setCustomerPhone("");
    setCustomerAmount("");
    setPaidAmount("");
  };

  // ================= SEARCH FILTER =================

  const filteredPaint = paintData.filter((item) =>
    item.name.toLowerCase().includes(paintSearch.toLowerCase())
  );

  const filteredTimber = timberData.filter((item) =>
    item.name.toLowerCase().includes(timberSearch.toLowerCase())
  );

  const filteredCustomer = customerData.filter((item) =>
    item.name.toLowerCase().includes(customerSearch.toLowerCase())
  );

  // ================= TOTALS =================

  const totalProducts =
    paintData.length + timberData.length;

  const totalPending = customerData.reduce(
    (total, item) => total + item.pending,
    0
  );

  return (
    <div style={styles.container}>
      {/* ================= SIDEBAR ================= */}

      <div style={styles.sidebar}>
        <img
          src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
          alt=""
          style={styles.sidebarImage}
        />

        <h1 style={styles.sidebarTitle}>
          MAHALESHWAR PAINTS AND TIMBERS
        </h1>

        <h2 style={styles.owner}>SATISH SAINI</h2>

        <button style={styles.sidebarBtn}>
          Dashboard
        </button>

        <button style={styles.sidebarBtn}>
          Customers
        </button>
      </div>

      {/* ================= MAIN ================= */}

      <div style={styles.main}>
        {/* HEADER */}

        <div style={styles.header}>
          <h1 style={styles.headerTitle}>
            MAHALESHWAR PAINTS AND TIMBERS
          </h1>

          <h2>
            Owner: SATISH SAINI | +91 9828087208
          </h2>

          <h3>Jaipur</h3>
        </div>

        {/* SECTION CARDS */}

        <div style={styles.cardContainer}>
          <div style={styles.card}>
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd"
              alt=""
              style={styles.cardImage}
            />

            <button style={styles.paintBtn}>
              🎨 Paint Section
            </button>
          </div>

          <div style={styles.card}>
            <img
              src="https://images.unsplash.com/photo-1513694203232-719a280e022f"
              alt=""
              style={styles.cardImage}
            />

            <button style={styles.timberBtn}>
              🪵 Timber Section
            </button>
          </div>
        </div>

        {/* TOTAL BOXES */}

        <div style={styles.totalContainer}>
          <div style={styles.totalBoxBlue}>
            <h2>Total Products</h2>
            <h1>{totalProducts}</h1>
          </div>

          <div style={styles.totalBoxGreen}>
            <h2>Customers</h2>
            <h1>{customerData.length}</h1>
          </div>

          <div style={styles.totalBoxRed}>
            <h2>Pending Payment</h2>
            <h1>₹{totalPending}</h1>
          </div>
        </div>

        {/* ================= PAINT SECTION ================= */}

        <div style={styles.section}>
          <h1 style={styles.blueHeading}>
            🎨 Paint Section
          </h1>

          {/* SEARCH */}

          <input
            type="text"
            placeholder="Search Paint..."
            value={paintSearch}
            onChange={(e) =>
              setPaintSearch(e.target.value)
            }
            style={styles.search}
          />

          {/* INPUTS */}

          <input
            type="text"
            placeholder="Paint Name"
            value={paintName}
            onChange={(e) =>
              setPaintName(e.target.value)
            }
            style={styles.input}
          />

          <input
            type="number"
            placeholder="Quantity"
            value={paintQty}
            onChange={(e) =>
              setPaintQty(e.target.value)
            }
            style={styles.input}
          />

          <input
            type="number"
            placeholder="Price"
            value={paintPrice}
            onChange={(e) =>
              setPaintPrice(e.target.value)
            }
            style={styles.input}
          />

          <button
            onClick={savePaint}
            style={styles.saveBtn}
          >
            Save Paint
          </button>

          {/* TABLE */}

          <div style={styles.tableWrapper}>
            <table style={styles.table}>
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

        <div style={styles.section}>
          <h1 style={styles.orangeHeading}>
            🪵 Timber Section
          </h1>

          {/* SEARCH */}

          <input
            type="text"
            placeholder="Search Timber..."
            value={timberSearch}
            onChange={(e) =>
              setTimberSearch(e.target.value)
            }
            style={styles.search}
          />

          {/* INPUTS */}

          <input
            type="text"
            placeholder="Timber Name"
            value={timberName}
            onChange={(e) =>
              setTimberName(e.target.value)
            }
            style={styles.input}
          />

          <input
            type="number"
            placeholder="Quantity"
            value={timberQty}
            onChange={(e) =>
              setTimberQty(e.target.value)
            }
            style={styles.input}
          />

          <input
            type="number"
            placeholder="Price"
            value={timberPrice}
            onChange={(e) =>
              setTimberPrice(e.target.value)
            }
            style={styles.input}
          />

          <button
            onClick={saveTimber}
            style={styles.saveBtn}
          >
            Save Timber
          </button>

          {/* TABLE */}

          <div style={styles.tableWrapper}>
            <table style={styles.table}>
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

        <div style={styles.section}>
          <h1 style={styles.greenHeading}>
            👨 Customer Section
          </h1>

          {/* SEARCH */}

          <input
            type="text"
            placeholder="Search Customer..."
            value={customerSearch}
            onChange={(e) =>
              setCustomerSearch(e.target.value)
            }
            style={styles.search}
          />

          {/* INPUTS */}

          <input
            type="text"
            placeholder="Customer Name"
            value={customerName}
            onChange={(e) =>
              setCustomerName(e.target.value)
            }
            style={styles.input}
          />

          <input
            type="number"
            placeholder="Phone Number"
            value={customerPhone}
            onChange={(e) =>
              setCustomerPhone(e.target.value)
            }
            style={styles.input}
          />

          <input
            type="number"
            placeholder="Total Amount"
            value={customerAmount}
            onChange={(e) =>
              setCustomerAmount(e.target.value)
            }
            style={styles.input}
          />

          <input
            type="number"
            placeholder="Paid Amount"
            value={paidAmount}
            onChange={(e) =>
              setPaidAmount(e.target.value)
            }
            style={styles.input}
          />

          <button
            onClick={saveCustomer}
            style={styles.saveBtn}
          >
            Save Customer
          </button>

          {/* TABLE */}

          <div style={styles.tableWrapper}>
            <table style={styles.table}>
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
                {filteredCustomer.map((item, index) => (
                  <tr key={index}>
                    <td>{item.serial}</td>
                    <td>{item.name}</td>
                    <td>{item.phone}</td>
                    <td>₹{item.amount}</td>
                    <td>₹{item.paid}</td>
                    <td>₹{item.pending}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

// ====================== STYLES ======================

const styles = {
  container: {
    display: "flex",
    minHeight: "100vh",
    background: "#0f172a",
    fontFamily: "Arial",
  },

  sidebar: {
    width: "300px",
    background: "#1e3a8a",
    padding: "20px",
    color: "white",
    textAlign: "center",
  },

  sidebarImage: {
    width: "100%",
    borderRadius: "20px",
  },

  sidebarTitle: {
    marginTop: "20px",
    fontSize: "38px",
    fontWeight: "bold",
  },

  owner: {
    marginTop: "20px",
  },

  sidebarBtn: {
    width: "100%",
    padding: "15px",
    marginTop: "20px",
    borderRadius: "12px",
    border: "none",
    background: "#2563eb",
    color: "white",
    fontSize: "20px",
    fontWeight: "bold",
    cursor: "pointer",
  },

  main: {
    flex: 1,
    background: "#e5e7eb",
    padding: "20px",
  },

  header: {
    background:
      "linear-gradient(to right,#2563eb,#d97706)",
    padding: "30px",
    borderRadius: "20px",
    color: "white",
    textAlign: "center",
  },

  headerTitle: {
    fontSize: "48px",
  },

  cardContainer: {
    display: "flex",
    gap: "20px",
    marginTop: "30px",
    flexWrap: "wrap",
  },

  card: {
    position: "relative",
    width: "350px",
  },

  cardImage: {
    width: "100%",
    height: "300px",
    objectFit: "cover",
    borderRadius: "20px",
  },

  paintBtn: {
    position: "absolute",
    bottom: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    padding: "15px 30px",
    border: "none",
    borderRadius: "15px",
    background: "#2563eb",
    color: "white",
    fontSize: "24px",
    fontWeight: "bold",
  },

  timberBtn: {
    position: "absolute",
    bottom: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    padding: "15px 30px",
    border: "none",
    borderRadius: "15px",
    background: "#d97706",
    color: "white",
    fontSize: "24px",
    fontWeight: "bold",
  },

  totalContainer: {
    display: "flex",
    gap: "20px",
    marginTop: "30px",
    flexWrap: "wrap",
  },

  totalBoxBlue: {
    flex: 1,
    minWidth: "220px",
    background: "white",
    padding: "30px",
    borderRadius: "20px",
    borderTop: "6px solid #2563eb",
    textAlign: "center",
  },

  totalBoxGreen: {
    flex: 1,
    minWidth: "220px",
    background: "white",
    padding: "30px",
    borderRadius: "20px",
    borderTop: "6px solid #059669",
    textAlign: "center",
  },

  totalBoxRed: {
    flex: 1,
    minWidth: "220px",
    background: "white",
    padding: "30px",
    borderRadius: "20px",
    borderTop: "6px solid red",
    textAlign: "center",
  },

  section: {
    background: "white",
    marginTop: "40px",
    padding: "30px",
    borderRadius: "20px",
  },

  blueHeading: {
    color: "#2563eb",
    fontSize: "45px",
    textAlign: "center",
  },

  orangeHeading: {
    color: "#d97706",
    fontSize: "45px",
    textAlign: "center",
  },

  greenHeading: {
    color: "#059669",
    fontSize: "45px",
    textAlign: "center",
  },

  search: {
    width: "100%",
    padding: "15px",
    marginTop: "20px",
    borderRadius: "10px",
    border: "2px solid #cbd5e1",
    fontSize: "18px",
    boxSizing: "border-box",
  },

  input: {
    width: "100%",
    padding: "15px",
    marginTop: "20px",
    borderRadius: "10px",
    border: "2px solid #cbd5e1",
    fontSize: "18px",
    boxSizing: "border-box",
  },

  saveBtn: {
    marginTop: "20px",
    padding: "15px 30px",
    border: "none",
    borderRadius: "12px",
    background: "green",
    color: "white",
    fontSize: "20px",
    fontWeight: "bold",
    cursor: "pointer",
  },

  tableWrapper: {
    overflowX: "auto",
    marginTop: "30px",
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
};