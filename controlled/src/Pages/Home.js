import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import '../CSS/Home.css'

function Home() {
  const [pokemon, setPokemon] = useState([]);
  const [pokeCount, setPokeCount] = useState(0)
  const [pokeSearch, setPokeSearch] = useState('')
  const [pokeRes, setPokeRes] = useState({
      name: null,
      images: null
  })
  const [loading, setLoading] = useState(false)

  useEffect(() => {
      axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${pokeCount}&limit=52`)
      .then(res => {
        const fetches = res.data.results.map(p => axios.get(p.url))

        Promise.all(fetches).then(data => {
          setPokemon(data);
          console.log(data)
        })
      });
  }, []);

  const searchPokemon = async(e) => {
    e.preventDefault()
    await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeSearch}`)
    .then(res => {
        setLoading(true)
        setPokeRes({
          name: res.data.name,
          images: res.data.sprites.front_default
        })
        console.log(pokeRes)
        setLoading(false)
    })
  }

  const nextBtn = async() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${pokeCount}&limit=52`)
    .then(res => {
      setPokeCount(pokeCount + 1)
      const fetches = res.data.results.map(p => axios.get(p.url))

      Promise.all(fetches).then(data => {
        setPokemon(data);
        console.log(data)
      })
    });
  }

  const prevBtn = async() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${pokeCount}&limit=52`)
    .then(res => {
      setPokeCount(pokeCount - 1)
      const fetches = res.data.results.map(p => axios.get(p.url))

      Promise.all(fetches).then(data => {
        setPokemon(data);
        console.log(data)
      })
    });
  }

  return (
    <div className="App">
      <h1 className="text-5xl font-bold text-center p-20">Poke Center</h1>
      <form
        onSubmit={searchPokemon} 
        className='flex justify-center justify-between mx-auto w-72'>
            <input 
                type="text"
                className='shadow appearance-none border rounded w-full py-2 px-3  text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                value={pokeSearch}
                onChange={(e) => setPokeSearch(e.target.value)}
            />
            <button 
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                type='submit'
            > 
                Search 
            </button>
        </form>
        {
            loading ? (
                <p> ... </p>
            ) : (
            <div className='poke-result flex justify-center'>
                    <div 
                        key={pokeRes.id}
                        className='poke-card flex flex-col justify-center'>
                            <img
                              src={pokeRes.images}
                              alt={pokeRes.images}
                            />
                            <h2 className='text-center'>{pokeRes.name}</h2>
                    </div>
            </div>
            )
        }
        <div className="cards-deck">
              {pokemon.map((p) => (
                <Link 
                    to={`/${p.data.id}`} 
                    className='poke-card' key={p.data.id}
                    state={{
                      dataParams: p.data
                     }}
                    >
                  <img
                    src={p.data.sprites.front_default}
                    alt={p.data.sprites.front_default}
                  />
                  <h2 className='text-center'>{p.data.name}</h2>
                </Link>
              ))}
        </div>
      <div className="flex justify-between mx-auto w-96">
      <button 
          type="button" 
          className="bg-green-500 text-white font-bold py-2 px-4 rounded" 
          onClick={prevBtn}
          disabled={pokeCount === 0}
        >
          {' '}
          previous{' '}
        </button>
        <button type="button" className="bg-blue-500 text-white font-bold py-2 px-4 rounded" onClick={nextBtn}>
          {' '}
          next{' '}
        </button>
      </div>
    </div>
  );
}

export default Home;
