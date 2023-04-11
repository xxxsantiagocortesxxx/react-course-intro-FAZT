import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { Button } from "./button";
import { Greeting, UserCard } from "./Greeting";
import { TaskCard } from "./Task";
import { Posts } from "./Post";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Counter = () => {
  //esto es destructuacion de un array
  const [message, setMessage] = useState("");
  const [counter, setCounter] = useState(0);
  //    variable, funcion()

  useEffect(() => {
    console.log("render");
  }, [counter,message]);

  return (
    <div>

      <input type="text" onChange={(e) => setMessage(e.target.value)} />

      <button
        onClick={() => {
          alert(`el mensaje es: ${message}`);
        }}
      >save</button>

      <hr />

      <h1>Counter: {counter}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >Increment</button>

    
      
    </div>
  );
};

root.render(
  <>
    <Counter />
  </>
);


//esto es un comentario de prueba