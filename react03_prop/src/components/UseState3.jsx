import React from "react"
import { useState } from "react"

export default function Hook3() {

    const [valor1, setValor1] = useState(0)

    function aumentar1(){
        setValor1((e) => e + 1)
    }
    function diminuir1(){
        setValor1((e) => e - 1)
    }
    
    const [valor2, setValor2] = useState(0)

    function aumentar2(){
        setValor2((e) => e + 1)
    }
    function diminuir2(){
        setValor2((e) => e - 1)
    }

    return(
        <>
            <h2>Valor: {valor1}</h2>
            <button onClick={aumentar1}>+</button>
            <button onClick={diminuir1}>-</button>

            <hr />

            <h2>Valor: {valor2}</h2>
            <button onClick={aumentar2}>+</button>
            <button onClick={diminuir2}>-</button>

            <hr />

            <h1>O resultado de {valor1} x {valor2} é = {valor1 * valor2}</h1>
        </>
    )
}