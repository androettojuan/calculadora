import React from "react";
import "./pantalla.css";

const Pantalla = ({ numeroUno, numeroDos, operacion }) => {
  const clasesNum1 = `numero ${!numeroDos ? "grande" : ""}`
  const clasesNum2 = `numero ${numeroDos ? "grande" : ""}`

  return (
    <div className="pantalla">
      <div className={clasesNum1}>{numeroUno} {operacion}</div>      
      <div className={clasesNum2}>{numeroDos}</div>      
    </div>
  );
};

export default Pantalla;
