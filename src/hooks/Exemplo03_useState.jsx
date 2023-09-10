import React, {useState} from 'react'

const Exemplo03_useState = () => {

    const [firstGrade, setFirstGrade] = useState()
    const [secondGrade, setSecondGrade] = useState()

    const handleChangeFirstGrade = (e) => {
        setFirstGrade(parseInt(e.target.value))
    }

    const handleChangeSecondGrade = (e) => {
        setSecondGrade(parseInt(e.target.value))
    }

    const average = (firstGrade+secondGrade)/2
    const result = average >= 7 ? 'Approved' : 'Disapproved'

    return(
        <div>
            <input type="number" onChange={handleChangeFirstGrade} placeholder="First grade"/>

            <input type="number" onChange={handleChangeSecondGrade} placeholder="Second grade"/>

            {firstGrade && secondGrade ? <div> <p>Average: {average}</p> <p>Result: {result}</p> </div> : ''}
        </div>
    )

}

export default Exemplo03_useState