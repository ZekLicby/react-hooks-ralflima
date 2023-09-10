import React, {useReducer} from "react";

const Exemplo09_useReducer = () => {

    const handleChangeValue = (state, action) => {
        switch(action){
            case 'increment':
                return state+1
                break

            case 'decrement':
                return state-1
                break

            default:
                return 0
        }
    }

    const [counter, runFunction] = useReducer(handleChangeValue, 0)

    return(
        <div>
            <h1>{counter}</h1>
            <button onClick={e=>runFunction('increment')}> Increment </button>

            <button onClick={e=>runFunction('decrement')}> Decrement </button>
        </div>
    )
}

export default Exemplo09_useReducer