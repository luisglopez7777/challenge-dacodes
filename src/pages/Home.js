import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import axios from 'axios'

const Home = () => {

    const [search, setSearch] = useState('')
    const [filteredCharacters, setFilteredCharacters] = useState([])

    useEffect(() => {
        async function getData() {
            const request = await axios({ url: 'https://rickandmortyapi.com/api/character/', method: 'get' })
            let infoCharacters = request.data.results
            setFilteredCharacters(infoCharacters)
        }
        getData()
    }, [])

    const handleChange = (e) => {
        setSearch(e.target.value)
    }



    const handleFilter = () => {
        async function getData() {
            const url = `https://rickandmortyapi.com/api/character/?name=${search}`
            console.log('url', url)
            const request = await axios({ url, method: 'get' })
            let characters = request.data.results || []
            setFilteredCharacters(characters)
        }
        getData()

    }


    return (
        <>
            <header>
                <h1>Rick and Morty<br />Tabla de personajes</h1>
                <div >
                    <input type="text" placeholder="Search" onChange={handleChange} />
                    <span>
                        <button onClick={handleFilter}>Filtrar por nombre completo</button>
                    </span>
                </div>
            </header>

            <main>
                <section >
                    <div >


                        {filteredCharacters.map((char) => (
                            <div key={char.id}>
                                <figure>
                                    <img src={char.image} alt="" />
                                </figure>
                                <div >
                                    <p>{char.name}</p>
                                </div>
                                <Link to={`/${char.id}`}>
                                    Click para ver mas informacion
                                </Link>
                            </div>
                        ))}
                    </div>

                </section>
            </main>
        </>
    )
}

export default Home
