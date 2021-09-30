import React, { useState, useEffect } from "react";
import "./index.css";

function CustomerList() {
  const [name, setName] = useState("");
  const [customers, setCustomers] = useState([]);

  const OnChange = (e) => {
    setName(e.target.value);
  };

  const OnClick = (e) => {
    e.preventDefault();
    setCustomers((prev) => [...prev, name]);
  };

  useEffect(() => {
    console.log(name);
  }, [name]);

  useEffect(() => {
    console.log(customers);
  }, [customers]);

  return (
    <div className="mt-75 layout-column justify-content-center align-items-center">
      <section className="layout-row align-items-center justify-content-center">
        <input
          onChange={OnChange}
          type="text"
          className="large"
          placeholder="Name"
          data-testid="app-input"
        />
        <button
          onClick={OnClick}
          type="submit"
          className="ml-30"
          data-testid="submit-button"
        >
          Add Customer
        </button>
      </section>

      {customers.length != 0 && (
        <ul className="styled mt-50" data-testid="customer-list">
          {customers.map((val, i) => {
            return (
              <li
                className="slide-up-fade-in"
                data-testid="list-item1"
                key="list-item1"
              >
                {val}
              </li>
            );
          })}{" "}
        </ul>
      )}
    </div>
  );
}

export default CustomerList;
