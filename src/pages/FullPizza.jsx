import React from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const FullPizza = () => {
  const [pizza, setPizza] = React.useState();
  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get("https://64b926cd79b7c9def6c0a704.mockapi.io/items/" + id);
        setPizza(data);
      } catch (error) {
        alert("ERROR");
        navigate("/");
      }
    }

    fetchPizza();
  }, []);

  if (!pizza) {
    return "Loading...";
  }

  return (
    <div className="container">
      <img src={pizza.imageUrl} alt="Pizza" />
      <h2>{pizza.title}</h2>
      <h4>{pizza.price} ₽</h4>
    </div>
  );
};

export default FullPizza;
