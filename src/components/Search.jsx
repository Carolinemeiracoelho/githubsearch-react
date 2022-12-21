import {useState, useEffect} from 'react'
import Axios from 'axios'

export function Search() {
    const [inputValue, setInputValue] = useState('')
    const [dataFromApi, setDataFromApi] = useState([])

    function handleInput(event) {
        setInputValue(event.target.value)
    }
    
    console.log('valor dentro do estado input value', inputValue)

    useEffect(() => {
        async function getData() {
            const response = await Axios.get('https://api.github.com/users/Carolinemeiracoelho/repos')
        console.log(response.data)
        }

        getData()
    }, [])

    console.log('valor dentro do estado da lista que veio da API', dataFromApi)

    return(
        <>
         <input placeholder="Digite sua busca" onChange={handleInput} />
        </>
    )
}