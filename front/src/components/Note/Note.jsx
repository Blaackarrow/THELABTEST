import { useState, useEffect } from "react";
import "./note.css";

export default function Note() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");
  const [inputValue, setInputValue] = useState({
    note_physique: "",
    note_vitesse: "",
    note_passe: "",
    note_tir: "",
    note_dribble: "",
    note_vista: "",
    note_cf: "",
    note_plongeon: "",
    note_dega: "",
    note_pied_faible: "",
    note_gen: "",
  });

  useEffect(() => {
    fetch(`http://localhost:${import.meta.env.VITE_API_PORT}/users`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
  console.log("users", users);
  const handleChange = (e) => {
    const { name, value } = e.target;

    setInputValue({ ...inputValue, [name]: value });
  };
  const handleUserChange = (e) => {
    setSelectedUser(e.target.value);
    // setSelectedUser(userId);
    // setInputValue({ ...inputValue, user_id: userId });
  };
  console.log("selectedUser", selectedUser);
  const handleSubmit = (e) => {
    e.preventDefault();
    const note = {
      note_physique: inputValue.note_physique,
      note_vitesse: inputValue.note_vitesse,
      note_passe: inputValue.note_passe,
      note_tir: inputValue.note_tir,
      note_dribble: inputValue.note_dribble,
      note_vista: inputValue.note_vista,
      note_cf: inputValue.note_cf,
      note_plongeon: inputValue.note_plongeon,
      note_arrets: inputValue.note_arrets,
      note_dega: inputValue.note_dega,
      note_pied_faible: inputValue.note_pied_faible,
      note_gen: inputValue.note_gen,
      user_id: selectedUser,
    };

    fetch(`http://localhost:${import.meta.env.VITE_API_PORT}/note`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    })
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <div className="note">
        <h2>Notes</h2>
        <label>
          Player :
          <select onChange={handleUserChange}>
            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.nom} {user.prénom}
              </option>
            ))}
          </select>
        </label>
        <form className="form" onSubmit={handleSubmit}>
          <div className="label">
            Note Physique:
            <input
              type="number"
              name="note_physique"
              value={inputValue.note_physique}
              onChange={handleChange}
            />
            Vitesse:
            <input
              type="number"
              name="note_vitesse"
              value={inputValue.note_vitesse}
              onChange={handleChange}
            />
            Passe:
            <input
              type="number"
              name="note_passe"
              value={inputValue.note_passe}
              onChange={handleChange}
            />
            Tir:
            <input
              type="number"
              name="note_tir"
              value={inputValue.note_tir}
              onChange={handleChange}
            />
            Dribble:
            <input
              type="number"
              name="note_dribble"
              value={inputValue.note_dribble}
              onChange={handleChange}
            />
            Vista:
            <input
              type="number"
              name="note_vista"
              value={inputValue.note_vista}
              onChange={handleChange}
            />
            CF:
            <input
              type="number"
              name="note_cf"
              value={inputValue.note_cf}
              onChange={handleChange}
            />
            Plongeon:
            <input
              type="number"
              name="note_plongeon"
              value={inputValue.note_plongeon}
              onChange={handleChange}
            />
            Arrets:
            <input
              type="number"
              name="note_arrets"
              value={inputValue.note_arrets}
              onChange={handleChange}
            />
            Degat:
            <input
              type="number"
              name="note_dega"
              value={inputValue.note_dega}
              onChange={handleChange}
            />
            Pied Faible:
            <input
              type="number"
              name="note_pied_faible"
              value={inputValue.note_pied_faible}
              onChange={handleChange}
            />
            Gen:
            <input
              type="number"
              name="note_gen"
              value={inputValue.note_gen}
              onChange={handleChange}
            />
          </div>
          <button className="note" type="submit">
            Envoyer
          </button>
        </form>
      </div>
    </>
  );
}
