import React from "react"
import { useState } from "react"

export default function HookF() {

    const [valor, setValor] = useState(0)
    function aumentar(){
        setValor((e) => e + 1)
    }
    function diminuir(){
        setValor((e) => e - 1)
    }
    return(
        <>
            <h3>Valor: {valor}</h3>
            <button onClick={aumentar}>aumentar</button>
            <button onClick={diminuir}>diminuir</button>
        </>
    )
}