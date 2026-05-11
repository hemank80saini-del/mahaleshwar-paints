import React, { useState, useEffect } from "react";

export default function App() {
  const BUSINESS_NAME = "MAHALESHWAR PAINTS AND TIMBERS";
  const OWNER = "SATISH SAINI";
  const PHONE = "+91 9828087208";
  const LOCATION = "Jaipur";

  const [page, setPage] = useState("dashboard");

  const [paints, setPaints] = useState([]);
  const [timbers, setTimbers] = useState([]);
  const [customers, setCustomers] = useState([]);

  const [paintForm, setPaintForm] = useState({
    name: "",
    quantity: "",
    price: "",
  });

  const [timberForm, setTimberForm] = useState({
    name: "",
    quantity: "",
    price: "",
  });

  const [customerForm, setCustomerForm] = useState({
    name: "",
    phone: "",
    pending: "",
  });

  useEffect(() => {
    setPaints(JSON.parse(localStorage.getItem("paints")) || []);
    setTimbers(JSON.parse(localStorage.getItem("timbers")) || []);
    setCustomers(JSON.parse(localStorage.getItem("customers")) || []);
  }, []);

  useEffect(() => {
    localStorage.setItem("paints", JSON.stringify(paints));
  }, [paints]);

  useEffect(() => {
    localStorage.setItem("timbers", JSON.stringify(timbers));
  }, [timbers]);

  useEffect(() => {
    localStorage.setItem("customers", JSON.stringify(customers));
  }, [customers]);

  const totalProducts = paints.length + timbers.length;

  const totalPending = customers.reduce(
    (acc, cur) => acc + Number(cur.pending || 0),
    0
  );

  const savePaint = () => {
    if (!paintForm.name) return;

    setPaints([...paints, paintForm]);

    setPaintForm({
      name: "",
      quantity: "",
      price: "",
    });
  };

  const saveTimber = () => {
    if (!timberForm.name) return;

    setTimbers([...timbers, timberForm]);

    setTimberForm({
      name: "",
      quantity: "",
      price: "",
    });
  };

  const saveCustomer = () => {
    if (!customerForm.name) return;

    setCustomers([...customers, customerForm]);

    setCustomerForm({
      name: "",
      phone: "",
      pending: "",
    });
  };

  const deletePaint = (index) => {
    setPaints(paints.filter((_, i) => i !== index));
  };

  const deleteTimber = (index) => {
    setTimbers(timbers.filter((_, i) => i !== index));
  };

  const deleteCustomer = (index) => {
    setCustomers(customers.filter((_, i) => i !== index));
  };

  const whatsappCustomer = (customer) => {
    const msg = `Hello ${customer.name},
Your pending payment is ₹${customer.pending}

${BUSINESS_NAME}
${PHONE}`;

    window.open(
      `https://wa.me/${customer.phone.replace(
        /\D/g,
        ""
      )}?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  };

  const callCustomer = (customer) => {
    window.open(`tel:${customer.phone}`);
  };

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "#0f172a",
        fontFamily: "Arial",
      }}
    >
      {/* SIDEBAR */}

      <div
        style={{
          width: "300px",
          background: "#1e3a8a",
          padding: "20px",
          color: "white",
        }}
      >
        <img
          src="https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg"
          style={{
            width: "100%",
            height: "180px",
            objectFit: "cover",
            borderRadius: "20px",
          }}
        />

        <h1
          style={{
            textAlign: "center",
            marginTop: "20px",
            fontSize: "24px",
            lineHeight: "40px",
          }}
        >
          MAHALESHWAR PAINTS AND TIMBERS
        </h1>

        <h2 style={{ textAlign: "center" }}>{OWNER}</h2>

        <button style={menuBtn} onClick={() => setPage("dashboard")}>
          Dashboard
        </button>

        <button style={menuBtn} onClick={() => setPage("customers")}>
          Customers
        </button>
      </div>

      {/* MAIN */}

      <div
        style={{
          flex: 1,
          background: "#e5e7eb",
          padding: "20px",
          overflowX: "hidden",
        }}
      >
        {/* HEADER */}

        <div
          style={{
            background:
              "linear-gradient(to right,#2563eb,#d97706)",
            padding: "40px",
            borderRadius: "25px",
            textAlign: "center",
            color: "white",
          }}
        >
          <h1
            style={{
              margin: 0,
              fontSize: "34px",
              lineHeight: "50px",
              fontWeight: "bold",
            }}
          >
            {BUSINESS_NAME}
          </h1>

          <h2>👤 {OWNER}</h2>

          <h2>📞 {PHONE}</h2>

          <h3>📍 {LOCATION}</h3>
        </div>

        {/* DASHBOARD */}

        {page === "dashboard" && (
          <>
            <div
              style={{
                display: "flex",
                gap: "20px",
                marginTop: "25px",
                flexWrap: "wrap",
              }}
            >
              {/* PAINT */}

              <div
                style={{
                  flex: 1,
                  minWidth: "300px",
                  position: "relative",
                }}
              >
                <img
                  src="https://images.pexels.com/photos/6474475/pexels-photo-6474475.jpeg"
                  style={{
                    width: "100%",
                    height: "320px",
                    objectFit: "cover",
                    borderRadius: "25px",
                  }}
                />

                <button
                  onClick={() => setPage("paint")}
                  style={{
                    position: "absolute",
                    bottom: "20px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    padding: "18px 35px",
                    border: "none",
                    borderRadius: "20px",
                    background: "#2563eb",
                    color: "white",
                    fontSize: "26px",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                >
                  🎨 Paint Section
                </button>
              </div>

              {/* TIMBER */}

              <div
                style={{
                  flex: 1,
                  minWidth: "300px",
                  position: "relative",
                }}
              >
                <img
                  src="https://images.pexels.com/photos/5974339/pexels-photo-5974339.jpeg"
                  style={{
                    width: "100%",
                    height: "320px",
                    objectFit: "cover",
                    borderRadius: "25px",
                  }}
                />

                <button
                  onClick={() => setPage("timber")}
                  style={{
                    position: "absolute",
                    bottom: "20px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    padding: "18px 35px",
                    border: "none",
                    borderRadius: "20px",
                    background: "#d97706",
                    color: "white",
                    fontSize: "26px",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                >
                  🪵 Timber Section
                </button>
              </div>
            </div>

            {/* STATS */}

            <div
              style={{
                display: "flex",
                gap: "20px",
                marginTop: "35px",
                flexWrap: "wrap",
              }}
            >
              <div
                style={{
                  ...card,
                  borderTop: "8px solid #2563eb",
                }}
              >
                <h2 style={{ color: "#111827" }}>
                  Total Products
                </h2>

                <h1
                  style={{
                    color: "#2563eb",
                    fontSize: "55px",
                  }}
                >
                  {totalProducts}
                </h1>
              </div>

              <div
                style={{
                  ...card,
                  borderTop: "8px solid green",
                }}
              >
                <h2 style={{ color: "#111827" }}>
                  Customers
                </h2>

                <h1
                  style={{
                    color: "green",
                    fontSize: "55px",
                  }}
                >
                  {customers.length}
                </h1>
              </div>

              <div
                style={{
                  ...card,
                  borderTop: "8px solid red",
                }}
              >
                <h2 style={{ color: "#111827" }}>
                  Pending Payment
                </h2>

                <h1
                  style={{
                    color: "red",
                    fontSize: "55px",
                  }}
                >
                  ₹{totalPending}
                </h1>
              </div>
            </div>
          </>
        )}

        {/* PAINT SECTION */}

        {page === "paint" && (
          <>
            <h1 style={headingBlue}>
              🎨 Paint Section
            </h1>

            <input
              placeholder="Paint Name"
              style={input}
              value={paintForm.name}
              onChange={(e) =>
                setPaintForm({
                  ...paintForm,
                  name: e.target.value,
                })
              }
            />

            <input
              placeholder="Quantity"
              style={input}
              value={paintForm.quantity}
              onChange={(e) =>
                setPaintForm({
                  ...paintForm,
                  quantity: e.target.value,
                })
              }
            />

            <input
              placeholder="Price"
              style={input}
              value={paintForm.price}
              onChange={(e) =>
                setPaintForm({
                  ...paintForm,
                  price: e.target.value,
                })
              }
            />

            <button style={saveBtn} onClick={savePaint}>
              Save Paint
            </button>

            {paints.map((item, index) => (
              <div key={index} style={listCard}>
                <h2>{item.name}</h2>

                <p>Quantity: {item.quantity}</p>

                <p>Price: ₹{item.price}</p>

                <button
                  style={deleteBtn}
                  onClick={() => deletePaint(index)}
                >
                  Delete
                </button>
              </div>
            ))}
          </>
        )}

        {/* TIMBER */}

        {page === "timber" && (
          <>
            <h1 style={headingOrange}>
              🪵 Timber Section
            </h1>

            <input
              placeholder="Timber Name"
              style={input}
              value={timberForm.name}
              onChange={(e) =>
                setTimberForm({
                  ...timberForm,
                  name: e.target.value,
                })
              }
            />

            <input
              placeholder="Quantity"
              style={input}
              value={timberForm.quantity}
              onChange={(e) =>
                setTimberForm({
                  ...timberForm,
                  quantity: e.target.value,
                })
              }
            />

            <input
              placeholder="Price"
              style={input}
              value={timberForm.price}
              onChange={(e) =>
                setTimberForm({
                  ...timberForm,
                  price: e.target.value,
                })
              }
            />

            <button style={saveBtn} onClick={saveTimber}>
              Save Timber
            </button>

            {timbers.map((item, index) => (
              <div key={index} style={listCard}>
                <h2>{item.name}</h2>

                <p>Quantity: {item.quantity}</p>

                <p>Price: ₹{item.price}</p>

                <button
                  style={deleteBtn}
                  onClick={() => deleteTimber(index)}
                >
                  Delete
                </button>
              </div>
            ))}
          </>
        )}

        {/* CUSTOMERS */}

        {page === "customers" && (
          <>
            <h1 style={headingGreen}>
              👥 Customers
            </h1>

            <input
              placeholder="Customer Name"
              style={input}
              value={customerForm.name}
              onChange={(e) =>
                setCustomerForm({
                  ...customerForm,
                  name: e.target.value,
                })
              }
            />

            <input
              placeholder="Phone Number"
              style={input}
              value={customerForm.phone}
              onChange={(e) =>
                setCustomerForm({
                  ...customerForm,
                  phone: e.target.value,
                })
              }
            />

            <input
              placeholder="Pending Amount"
              style={input}
              value={customerForm.pending}
              onChange={(e) =>
                setCustomerForm({
                  ...customerForm,
                  pending: e.target.value,
                })
              }
            />

            <button style={saveBtn} onClick={saveCustomer}>
              Save Customer
            </button>

            {customers.map((customer, index) => (
              <div key={index} style={listCard}>
                <h2>{customer.name}</h2>

                <p>{customer.phone}</p>

                <h3 style={{ color: "red" }}>
                  Pending ₹{customer.pending}
                </h3>

                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    flexWrap: "wrap",
                  }}
                >
                  <button
                    style={{
                      ...actionBtn,
                      background: "green",
                    }}
                    onClick={() =>
                      whatsappCustomer(customer)
                    }
                  >
                    WhatsApp
                  </button>

                  <button
                    style={{
                      ...actionBtn,
                      background: "#2563eb",
                    }}
                    onClick={() =>
                      callCustomer(customer)
                    }
                  >
                    Call
                  </button>

                  <button
                    style={deleteBtn}
                    onClick={() =>
                      deleteCustomer(index)
                    }
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

const menuBtn = {
  width: "100%",
  padding: "18px",
  border: "none",
  borderRadius: "15px",
  background: "#2563eb",
  color: "white",
  fontSize: "24px",
  marginTop: "15px",
  cursor: "pointer",
  fontWeight: "bold",
};

const input = {
  width: "calc(100% - 40px)",
  boxSizing: "border-box",
  padding: "16px",
  marginTop: "15px",
  borderRadius: "12px",
  border: "1px solid gray",
  fontSize: "18px",
  background: "#3f3f46",
  color: "white",
  display: "block",
};

const saveBtn = {
  marginTop: "20px",
  padding: "15px 30px",
  border: "none",
  borderRadius: "12px",
  background: "green",
  color: "white",
  fontSize: "20px",
  cursor: "pointer",
};

const deleteBtn = {
  padding: "10px 20px",
  border: "none",
  borderRadius: "10px",
  background: "red",
  color: "white",
  cursor: "pointer",
  marginTop: "10px",
};

const actionBtn = {
  padding: "10px 20px",
  border: "none",
  borderRadius: "10px",
  color: "white",
  cursor: "pointer",
};

const listCard = {
  background: "white",
  padding: "20px",
  borderRadius: "15px",
  marginTop: "20px",
};

const card = {
  flex: 1,
  minWidth: "220px",
  background: "white",
  padding: "30px",
  borderRadius: "20px",
  textAlign: "center",
  boxShadow: "0 5px 15px rgba(0,0,0,0.15)",
};

const headingBlue = {
  color: "#2563eb",
  fontSize: "48px",
  fontWeight: "bold",
  marginBottom: "25px",
  textAlign: "center",
};

const headingOrange = {
  color: "#d97706",
  fontSize: "48px",
  fontWeight: "bold",
  marginBottom: "25px",
  textAlign: "center",
};

const headingGreen = {
  color: "#059669",
  fontSize: "48px",
  fontWeight: "bold",
  marginBottom: "25px",
  textAlign: "center",
};