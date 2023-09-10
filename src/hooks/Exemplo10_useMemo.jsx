import React, {useState, useMemo} from "react";

const Exemplo10_useMemo = () => {

    const [counter, setCounter] = useState(0)
    const [names, setNames] = useState(['Carlin', 'Rrrrrramon', 'Flip', 'HulkBR'])

    const listWithOutRender = useMemo(()=>{
        return <ListNames list={names}/>
    }, [names])

    return(
        <div>

        <div>{counter}</div>
        <button onClick={e=>setCounter(counter+1)}>Aumente</button>

        {listWithOutRender}
        </div>
    )
}

const ListNames = ({list}) => {
    console.log('ListNames successfully created!')
    return(
        <ul>
            {list.map(name=>(<li key={name}>{name}</li>))}
        </ul>
    )
}

export default Exemplo10_useMemo