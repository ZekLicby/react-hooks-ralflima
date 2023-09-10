import React, {useState} from 'react'

const Exemplo03_useState = () => {

    const [name, setName] = useState('')
    const [age, setAge] = useState()

    const handleChangeName = (e) =>  {
        setName(e.target.value)
    }

    const handleChangeAge = (e) =>  {
        setAge(e.target.value)
    }

    return(
        <div>
            <input type="text" onChange={handleChangeName} placeholder="Name"/>
            <input type="number" onChange={handleChangeAge} placeholder="Age"/>

            {name && age ? <div><p>Nome: {name}</p><p> Idade: {age}</p></div> : ''}
        </div>
    )
}

export default Exemplo03_useState