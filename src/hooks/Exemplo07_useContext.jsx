import React, {createContext, useContext, useState} from "react";

const Context = createContext()

const Exemplo07_useContext = () => {

    const text = 'Muaide a core do fuaindo'

    const [background, setBackGround] = useState('yellow')

    const handleChangeBackGroundColor = () => {
        setBackGround(background === 'yellow' ? 'blue' : 'yellow')
    }

    return(
        <Context.Provider value={{text, background, handleChangeBackGroundColor}}>
            <Camada1/>
        </Context.Provider>
    )
}

const Camada1 = () => {
    return(
        <div style={{backgroundColor: 'red', width: '500px', height: '500px', display: 'inline-block'}}>
            <Camada2/>
        </div>
    )
}
const Camada2 = () => {
    return(
        <div style={{backgroundColor: 'green', width: '400px', height: '400px', margin: '50px', display: 'inline-block'}}>
            <Camada3/>
        </div>
    )
}
const Camada3 = () => {

    const {text, background, handleChangeBackGroundColor} = useContext(Context)

    return(
        <div style={{backgroundColor: background, width: '300px', height: '300px', margin: '50px'}}>
            <button onClick={handleChangeBackGroundColor}>{text}</button>
        </div>
    )
}

export default Exemplo07_useContext