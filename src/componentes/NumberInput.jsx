import React, { useState } from "react";
import PropTypes from "prop-types";
import Resultado from "./Resultado.jsx";
import { operaciones } from "../helpers/operaciones.js";

const NumberInput = () => {
  const [numeros, setNumeros] = useState({
    numero1: 1,
    numero2: 2,
  });
  const { handleChange, suma, resta, multi, divi, numero1, numero2 } =
    operaciones(numeros, setNumeros);

  return (
    <>
      <label className="mx-2">
        Numero 1:
        <input
          name="numero1"
          value={numero1}
          onChange={handleChange}
          type="number"
        />
      </label>

      <label>
        Numero 2:
        <input
          name="numero2"
          value={numero2}
          onChange={handleChange}
          type="number"
        />
      </label>
      <br />
      <br />
      <Resultado operacion="Suma" calculo={suma()} />
      <br />
      <Resultado operacion="Resta" calculo={resta()} />
      <br />
      <span>
        <Resultado operacion="Multiplicacion" calculo={multi()} />
      </span>
      <br />
      <span>
        <Resultado operacion="Division" calculo={divi()} />
      </span>
      <br />
    </>
  );
};

NumberInput.propTypes = {
  name: PropTypes.string,
};

export default NumberInput;
