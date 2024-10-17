import React, { useState } from "react";
import { useEffect } from "react";

const State = () => {
  const [state, setState] = useState(0);
  console.log(state);
  //useEffect ciclo de vida de react
  useEffect(() => {
    console.log(state);
  }, []);
  const handleClick = () => {
    setState(state + 1);
  };
  return (
    <div className=" container text-center">
      <h1>useState</h1>
      <hr />
      cuenta:{state}
      <hr />
      <h2>useEffect</h2>
      <button onClick={handleClick}>+1</button>
    </div>
  );
};

export default State;
