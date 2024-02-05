import { useEffect, useState } from "react";
import "./App.css";
import reactLogo from "./assets/react.svg";
import AddEvent from "./components/AddEvent/AddEvent";
import Event from "./components/Evenement/event";

function App() {
  const [inputNameValue, setInputNameValue] = useState("");
  const [inputMailValue, setInputMailValue] = useState("");
  const [inputPasswordValue, setInputPasswordValue] = useState("");
  const [inputAgeValue, setInputAgeValue] = useState("");
  const [inputLastNameValue, setInputLastNameValue] = useState("");
  const [users, setUsers] = useState({});

  const handleNameChange = (e) => {
    setInputNameValue(e.target.value);
  };
  const handleMailChange = (e) => {
    setInputMailValue(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setInputPasswordValue(e.target.value);
  };
  const handleAgeChange = (e) => {
    setInputAgeValue(e.target.value);
  };
  const handleLastNameChange = (e) => {
    setInputLastNameValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleClick = () => {
    const user = {
      nom: inputLastNameValue,
      prénom: inputNameValue,
      email: inputMailValue,
      password: inputPasswordValue,
      is_admin: false,
      date_de_naissance: inputAgeValue,
    };
    setUsers(user);
  };
  useEffect(() => {
    // console.log(users);
    // fetch(`http://localhost:${import.meta.env.VITE_API_PORT}/users`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(users),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //   });
  }, []);

  return (
    <>
      <img src={reactLogo} alt="react logo" />
      <h1 className="title">THE LAB</h1>
      <div className="formulaire">
        <form onSubmit={handleSubmit}>
          <input
            type="texe"
            placeholder="prenom"
            value={inputNameValue}
            onChange={handleNameChange}
          />
          <input
            type="text"
            placeholder="nom"
            value={inputLastNameValue}
            onChange={handleLastNameChange}
          />
          <input
            type="date"
            placeholder="age"
            value={inputAgeValue}
            onChange={handleAgeChange}
          />
          <input
            type="mail"
            placeholder="mail"
            value={inputMailValue}
            onChange={handleMailChange}
          />
          <input
            type="password"
            placeholder="password"
            value={inputPasswordValue}
            onChange={handlePasswordChange}
          />
          <button onClick={handleClick}>valider</button>
        </form>
      </div>
      <Event />
      <AddEvent />
    </>
  );
}

export default App;
