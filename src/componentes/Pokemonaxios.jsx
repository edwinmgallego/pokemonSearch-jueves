// src/components/PokemonCard.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const Pokemonaxios = () => {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    // Consumir la API
    axios
      .get("https://pokeapi.co/api/v2/pokemon/ditto")
      .then((response) => {
        setPokemonData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching the Pokémon data: ", error);
      });
  }, []);

  return (
    <div>
      {pokemonData ? (
        <div className="card">
          <img
            src={pokemonData.sprites.front_default}
            alt={pokemonData.name}
            className="pokemon-image"
          />
          <h3>{pokemonData.name}</h3>
          <p>Height: {pokemonData.height}</p>
          <p>Weight: {pokemonData.weight}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Pokemonaxios;
