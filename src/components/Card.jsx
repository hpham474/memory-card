import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "../styles/Card.css";

function Card({ id }) {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("https://pokeapi.co/api/v2/pokemon/" + id);
      const json = await data.json();

      setPokemon(json);
    };

    fetchData().catch(console.error);
  }, [id]);

  return (
    <>
      <div className="card">
        {pokemon === null ? (
          <div className="placeholder"></div>
        ) : (
          <img src={pokemon.sprites.front_default}></img>
        )}
        <p className="name">{pokemon === null ? "loading..." : pokemon.name}</p>
      </div>
    </>
  );
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Card;
