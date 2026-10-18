import { useState } from "react";
export default function Contador(){
    const[valor, setValor] =   useState(0);

    return(
        <div>
            <button onClick={()=> setValor(v=> v +1)}>+1</button>
            <span>{valor}</span>
            <button onClick={()=> setValor(v=> v-1)}>-1</button>
        </div>
    );
}