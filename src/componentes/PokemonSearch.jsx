// src/components/PokemonSearch.jsx
import React, { useState } from "react";

const PokemonSearch = () => {
  const [searchTerm, setSearchTerm] = useState(""); // Para almacenar el término de búsqueda
  const [pokemonData, setPokemonData] = useState(null); // Para almacenar los datos del Pokémon
  const [error, setError] = useState(""); // Para almacenar errores

  // Función para buscar el Pokémon
  const searchPokemon = () => {
    // Limpiar errores y datos anteriores
    setError("");
    setPokemonData(null);

    // Consumir la API con fetch
    fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Pokémon no encontrado"); // Si no se encuentra el Pokémon
        }
        return response.json();
      })
      .then((data) => {
        setPokemonData(data); // Guardar los datos del Pokémon
      })
      .catch((error) => {
        setError(error.message); // Guardar el mensaje de error
      });
  };

  return (
    <div className="pokemon-search">
      <h2>Buscar Pokémon</h2>
      <input
        type="text"
        placeholder="Ingresa el nombre del Pokémon"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={searchPokemon}>Buscar</button>

      {/* Mostrar error si ocurre */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Mostrar los datos del Pokémon si existe */}
      {pokemonData && (
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
      )}
    </div>
  );
};

export default PokemonSearch;
