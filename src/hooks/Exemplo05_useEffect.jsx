import React, {useState, useEffect} from "react";

const Exemplo05_useEffect = () => {

    const [text, setText] = useState('heLLo woRLd!')

    useEffect(() => {

        setInterval(() => {
            setText('Did u program me?')
        }, 3000);

    })

    return(
        <div>

            <p>{text}</p>
            
        </div>
    )
}


export default Exemplo05_useEffect