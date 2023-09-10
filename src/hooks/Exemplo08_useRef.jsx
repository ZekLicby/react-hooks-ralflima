import React, {useRef} from "react";


const Exemplo08_useRef = () => {

    const element = useRef()

    const action = () => {
        element.current.focus()
        element.current.style.backgroundColor = 'lightgreen'
        element.current.value = 'Tá funfando'
    }

    return(
        <div>
            <input type="text" ref={element}/>
            <input type="button" value="Clica aqui rapidão pra eu ver o que acontece" onClick={action}/>
        </div>
    )

}

export default Exemplo08_useRef