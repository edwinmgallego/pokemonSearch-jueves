// src/components/PokemonCardFetch.jsx
import React, { useEffect, useState } from "react";

const PokemonCardFetch = () => {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    // Consumir la API con fetch
    fetch("https://pokeapi.co/api/v2/pokemon/ditto")
      .then((response) => response.json())
      .then((data) => {
        setPokemonData(data);
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

export default PokemonCardFetch;
