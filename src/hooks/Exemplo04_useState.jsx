import React, {useState} from 'react'

const Exemplo04_useState = () => {

    const template = {
        name: '',
        email: '',
        city: ''
    }

    const [form, setForm] = useState(template)

    const handleChangeInfos = (e) => {
        let name = e.target.name
        let value = e.target.value

        setForm({...form, [name]: value})
    }


    return(
        <div>
            <input type="text" name="name" placeholder="Name" onChange={handleChangeInfos}/>
            <input type="text" name="email" placeholder="E-mail" onChange={handleChangeInfos}/>
            <input type="text" name="city" placeholder="City" onChange={handleChangeInfos}/>

            <p>{form.name}</p>
            <p>{form.city}</p>
            <p>{form.email}</p>

            {JSON.stringify(form)}
        </div>
    )
}

export default Exemplo04_useState