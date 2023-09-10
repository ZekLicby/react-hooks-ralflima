import React from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";

const Exemplo11_useCallback = () => {

    const [color, setColor] = useState('blue')
    const [number, setNumber] = useState(0)

    const handleChangeColor = () => {
        setColor(color === 'blue' ? 'gray' : 'blue')
    }

    const listNumbers = useCallback(() => {
        return[number-1, number, number+1]
    }, [number])

    return(
        <div style={{backgroundColor: color}}>
            <button onClick={handleChangeColor}>Change color</button>

            <input type="number" value={number} onChange={e=>setNumber(parseInt(e.target.value))}/>

            <ListNumbersComponent list={listNumbers}/>
        </div>
    )
}

const ListNumbersComponent = ({list}) => {
    const [vetor, setVetor] = useState([])

    useEffect(() => {
        setVetor(list)
    }, [list])

    return(
        <ul>
            {vetor.map(n => (<li key={n}>{n}</li>))}
        </ul>
    )
}

export default Exemplo11_useCallback