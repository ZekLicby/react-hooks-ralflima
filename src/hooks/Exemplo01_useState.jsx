import React, {useState} from 'react'

function Exemplo01_useState(){

    const [text, setText]  = useState('Hello world!')

    const handleChangeText = (e) => {
        if(e.target.value === ''){
            setText('Did u program me?')
        }else{
            setText(e.target.value)
        }
    }

    return(
        <div>
            <input id='inp' type="text" onChange={handleChangeText}/>

            <p>
                {text}
            </p>
        </div>
    )

}

export default Exemplo01_useState