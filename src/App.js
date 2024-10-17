import React from "react";
import Calculadora from "./componentes/Calculadora.jsx"; // Make sure the case matches
// Make sure the case matches
import Effect from "./componentes/Effect.jsx";
import State from "./componentes/State.jsx";
import Pokemonaxios from "./componentes/Pokemonaxios.jsx";
import PokemonCardFetch from "./componentes/PokemonCardFetch.jsx";
import PokemonSearch from "./componentes/PokemonSearch.jsx";
const App = () => {
  return (
    <>
      <div className="container text-center">
        <hr />
        <PokemonSearch />
        <hr />
      </div>
    </>
    // <State />

    /*<div className="container text-center">
      <h1>calculadora pwa</h1>
      <Calculadora />
    </div>*/
  );
};

export default App;
