import { useEffect, useState } from "react";
import "./discount.css";

export default function Discount() {
  const [inputPromo, setInputPromo] = useState("");
  const [dataPromo, setDataPromo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [user, setUsers] = useState("");

  // const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setInputPromo(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  // const handleClick = (e) => {
  //   // setInputPromo(e.target.value);
  // };
  useEffect(() => {
    fetch(`http://localhost:${import.meta.env.VITE_API_PORT}/users`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);
        setUsers(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
  // console.log("user", user);
  useEffect(() => {
    fetch(`http://localhost:${import.meta.env.VITE_API_PORT}/discount`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);
        setDataPromo(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [isLoading]);

  const handleRegisterAnDiscount = (e, user_id, discount_id) => {
    e.preventDefault();
    setIsLoading(true);
    fetch(`http://localhost:${import.meta.env.VITE_API_PORT}/userDiscount`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user_id, discount_id }),
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

  const prix = 60;
  const isValidPromo = dataPromo.some(
    (promo) => promo.promo_code === inputPromo
  );
  // const correspondingUser = user.find((users) => users.email === email);
  // console.log("dataPromo.promo_code", dataPromo[0].promo_code);
  // console.log("inputPromo", inputPromo);
  // console.log("correspondingUser", correspondingUser);
  return (
    <>
      <h2>Code promo</h2>
      <input
        type="text"
        placeholder="Votre Adresse mail"
        onChange={handleChangeEmail}
        value={email}
      />
      <input
        type="text"
        placeholder="Saisir un code promo"
        onChange={handleChange}
        value={inputPromo}
      />

      {isValidPromo ? (
        dataPromo.map(
          (promo, index) =>
            // user.map((users) =>
            inputPromo === promo.promo_code ? (
              <div key={index}>
                <button
                  onClick={(e) =>
                    handleRegisterAnDiscount(e, user[1].id, promo.id)
                  }
                >
                  SELECTIONNER
                </button>
                <p>ok</p>
                <p>
                  Le prix sera de {prix - prix * (promo.percent_value / 100)}€
                </p>
              </div>
            ) : null
          // )
        )
      ) : (
        <p>Code promo invalide</p>
      )}
    </>
  );
}
