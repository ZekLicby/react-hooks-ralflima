import React, {useState, useEffect} from "react";

const Exemplo06_useEffect = () => {

    const [vetor, setVetor] = useState([])
    const [status, setStatus] = useState('Loading...')

    useEffect(() => {
        getData()
    })

    const getData = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/photos')
        const convert = await data.json()
        setVetor(convert)
        setStatus('Successful loaded data!')
    }

    return(
        <div>

            <h1>{status}</h1>

            <ul>
                {vetor.map(obj => (
                    <li key={obj.id}>{obj.title}</li>
                ))}
            </ul>

        </div>
    )
}

export default Exemplo06_useEffect

