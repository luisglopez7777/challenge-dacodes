import { useState, useEffect } from 'react'
import { Link, useLocation } from "react-router-dom"
import axios from 'axios'

const Character = () => {
    const location = useLocation();
    const currentPath = location.pathname

    const [character, setCharacter] = useState([])

    useEffect(() => {
        async function getData() {
            const request = await axios({ url: `https://rickandmortyapi.com/api/character/${currentPath}`, method: 'get' })
            let infoCharacter = request.data
            console.log('infoCharacter', infoCharacter)
            setCharacter(infoCharacter)
        }
        getData()
    }, [])

    return (
        <div>
            {character &&
                <div>
                    <div>
                        <Link to="/">
                            <p>Regresar</p>
                        </Link>
                        <h2>{character.name}</h2>
                        <h3>{character.gender}</h3>
                        <h3>{character.species}</h3>
                        <h3>{character.status}</h3>
                    </div>
                    <div>
                        <img src={character.image} alt="" />
                    </div>
                </div>
            }

        </div>
    )
}

export default Character
