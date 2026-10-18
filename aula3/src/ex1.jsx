import { useState } from "react";
export default function BotaoLike(){
    const[curtido, setCurtido]=useState(false);

    return(
        <button onClick={()=> setCurtido(!curtido)}>
            {curtido ? "Curtido ❤️" : "Curtir 🤍"}
        </button>
    );
}