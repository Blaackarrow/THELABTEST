import { useState } from "react";

export default function AddEvent() {
  const [inputValue, setInputValue] = useState({
    city: "",
    date: "",
    address: "",
    quantity: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInputValue({ ...inputValue, [name]: value });
  };

  const handleSubmitAddEvent = (e) => {
    e.preventDefault();
    fetch(`http://localhost:${import.meta.env.VITE_API_PORT}/events`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputValue),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("data :>> ", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <h3>AJOUTER UN EVENEMENT</h3>
      <form className="addEvent" onSubmit={handleSubmitAddEvent}>
        <input
          type="text"
          name="city"
          value={inputValue.city}
          placeholder="Ville de Event"
          onChange={handleChange}
        />
        <input
          type="date"
          name="date"
          value={inputValue.date}
          placeholder="Date Event"
          onChange={handleChange}
        />
        <input
          type="text"
          name="address"
          value={inputValue.address}
          placeholder="Adresse de Event"
          onChange={handleChange}
        />
        <input
          type="text"
          name="quantity"
          value={inputValue.quantity}
          placeholder="Nombre de Places"
          onChange={handleChange}
        />
        <button type="submit">AJOUTER</button>
      </form>
    </>
  );
}
