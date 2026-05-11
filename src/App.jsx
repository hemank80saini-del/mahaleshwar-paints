import React, { useState } from "react";
import "./App.css";

function App() {

  // PAGE

  const [page, setPage] = useState("dashboard");

  // PAINT

  const [paintName, setPaintName] = useState("");
  const [paintQty, setPaintQty] = useState("");
  const [paintPrice, setPaintPrice] = useState("");
  const [paintData, setPaintData] = useState([]);

  // TIMBER

  const [timberName, setTimberName] = useState("");
  const [timberQty, setTimberQty] = useState("");
  const [timberPrice, setTimberPrice] = useState("");
  const [timberData, setTimberData] = useState([]);

  // SAVE PAINT

  const savePaint = () => {

    if (
      paintName === "" ||
      paintQty === "" ||
      paintPrice === ""
    ) {
      alert("Fill all fields");
      return;
    }

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

  // SAVE TIMBER

  const saveTimber = () => {

    if (
      timberName === "" ||
      timberQty === "" ||
      timberPrice === ""
    ) {
      alert("Fill all fields");
      return;
    }

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

  return (

    <div className="main-container">

      {/* SIDEBAR */}

      <div className="sidebar">

        <img
          src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
          alt=""
          className="sidebar-image"
        />

        <h2>
          MAHALESHWAR
          <br />
          PAINTS AND TIMBERS
        </h2>

        <h1 className="owner-name">
          SATISH SAINI
        </h1>

        <button
          className="sidebar-btn"
          onClick={() => setPage("dashboard")}
        >
          Dashboard
        </button>

        <button
          className="sidebar-btn"
          onClick={() => setPage("paint")}
        >
          Paint
        </button>

        <button
          className="sidebar-btn"
          onClick={() => setPage("timber")}
        >
          Timber
        </button>

      </div>

      {/* CONTENT */}

      <div className="content">

        {/* TOP BANNER */}

        <div className="top-banner">

          <h1 className="main-heading">
            MAHALESHWAR PAINTS
            <br />
            AND TIMBERS
          </h1>

          <h2>👤 SATISH SAINI</h2>

          <h2>
            📞 +91 9828087208
          </h2>

          <h2>📍 Jaipur</h2>

        </div>

        {/* DASHBOARD */}

        {page === "dashboard" && (

          <div className="cards">

            {/* PAINT CARD */}

            <div className="card">

              <img
                src="https://images.unsplash.com/photo-1562259949-e8e7689d7828"
                alt=""
              />

              <button
                className="paint-btn"
                onClick={() =>
                  setPage("paint")
                }
              >
                🎨 Paint Section
              </button>

            </div>

            {/* TIMBER CARD */}

            <div className="card">

              <img
                src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
                alt=""
              />

              <button
                className="timber-btn"
                onClick={() =>
                  setPage("timber")
                }
              >
                🪵 Timber Section
              </button>

            </div>

          </div>

        )}

        {/* PAINT PAGE */}

        {page === "paint" && (

          <div className="section">

            <h1 className="paint-title">
              🎨 Paint Section
            </h1>

            <input
              type="text"
              placeholder="Paint Name"
              value={paintName}
              onChange={(e) =>
                setPaintName(e.target.value)
              }
            />

            <input
              type="number"
              placeholder="Quantity"
              value={paintQty}
              onChange={(e) =>
                setPaintQty(e.target.value)
              }
            />

            <input
              type="number"
              placeholder="Price"
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

                {paintData.map((item, index) => (

                  <tr key={index}>

                    <td>{item.serial}</td>

                    <td>{item.name}</td>

                    <td>{item.qty}</td>

                    <td>
                      ₹{item.price}
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        )}

        {/* TIMBER PAGE */}

        {page === "timber" && (

          <div className="section">

            <h1 className="timber-title">
              🪵 Timber Section
            </h1>

            <input
              type="text"
              placeholder="Timber Name"
              value={timberName}
              onChange={(e) =>
                setTimberName(e.target.value)
              }
            />

            <input
              type="number"
              placeholder="Quantity"
              value={timberQty}
              onChange={(e) =>
                setTimberQty(e.target.value)
              }
            />

            <input
              type="number"
              placeholder="Price"
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

                {timberData.map((item, index) => (

                  <tr key={index}>

                    <td>{item.serial}</td>

                    <td>{item.name}</td>

                    <td>{item.qty}</td>

                    <td>
                      ₹{item.price}
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        )}

      </div>

    </div>

  );
}

export default App;