import { useEffect, useState } from "react";
import "./event.css";

export default function Event() {
  const [events, setEvents] = useState([]);
  // const [disabled, setDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  // console.log('selectedEvent', selectedEvent);
  // console.log('email :>>', email);

  useEffect(() => {
    fetch(`http://localhost:${import.meta.env.VITE_API_PORT}/events`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);
        setEvents(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [isLoading]);

  const handleRegisterAnEvent = (e, event_id, user_id) => {
    e.preventDefault();
    setIsLoading(true);
    fetch(`http://localhost:${import.meta.env.VITE_API_PORT}/stockEvent`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ event_id, user_id }),
    })
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        console.log("succes", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <h2>EVENEMENT</h2>
      <input
        type="text"
        placeholder="Votre Adresse mail"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <div className="event">
        {events.map((event, index) => (
          <div key={index} className="event-card">
            <h3>{event.city}</h3>
            <p>{event.date}</p>
            <p>{event.address}</p>
            <p>QUANTITE : {event.quantity}</p>
            <button onClick={(e) => handleRegisterAnEvent(e, event.id, 20)}>
              SELECTIONNER
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
