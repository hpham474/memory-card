import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "../styles/Card.css";

function Card({ id, seen, onChange }) {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("https://pokeapi.co/api/v2/pokemon/" + (id + 1));
      const json = await data.json();

      setPokemon(json);
    };

    fetchData().catch(console.error);
  }, [id]);

  return (
    <>
      <button className="card" onClick={() => onChange(id, seen)}>
        {pokemon === null ? (
          <div className="placeholder"></div>
        ) : (
          <img src={pokemon.sprites.front_default}></img>
        )}
        <p className="name">{pokemon === null ? "" : pokemon.name}</p>
      </button>
    </>
  );
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  seen: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Card;
