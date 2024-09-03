import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "../styles/Card.css";

function Card({ id }) {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("https://pokeapi.co/api/v2/pokemon/4");
      const json = await data.json();

      setPokemon(json);
    };

    fetchData().catch(console.error);
  }, []);

  return (
    <>
      <div className="card">
        {/* <div className="placeholder"></div> */}
        <img src={pokemon.sprites.front_default}></img>
        <p className="name">{pokemon === null ? "loading..." : pokemon.name}</p>
      </div>
    </>
  );
}

Card.propTypes = {
  id: PropTypes.string,
};

export default Card;
