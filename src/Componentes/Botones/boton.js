import React from "react";
import "./boton.css"

const numeros = ["1","2","3","4","5","6","7","8","9","0","."]
const operaciones = ["+","-","*","/"]
const borrar = ["←", "AC"]
const igual = ["="]

const boton = ["7", "8", "9", "+", "4", "5", "6", "-", "1", "2", "3", "*", "0", ".","AC", "/", "←", "="]

const Botones = ({onClickNumero,onClickOperacion,onClickBorrar,onClickIgual, numUno,numDos}) => {

    const onClick = (relleno) => {
        if(numeros.includes(relleno)){
            onClickNumero(relleno)
        }else if (operaciones.includes(relleno)){
            onClickOperacion(relleno)
        }else if (borrar.includes(relleno)){
            onClickBorrar(relleno)
        }else if (igual.includes(relleno)){
            onClickIgual()
        }
    }

    const estaDesabilitado = (relleno) => {
        if (operaciones.includes(relleno)){
            return !numUno || Number.isNaN(Number(numUno));
        }else if (igual.includes(relleno)){
            return !numDos || Number.isNaN(Number(numDos));
        } else {
            return false;
        }
    }

    return <div className="content">
        <div className="relleno">
            {boton.map((relleno) => (
                <button disabled={estaDesabilitado(relleno)} onClick={() => onClick(relleno)} className={`boton ${relleno === "←" || relleno === "=" ? "grande" : ""}`}>{relleno}</button>
            ))}
        </div>
    </div>
}

export default Botones