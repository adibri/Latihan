import React, { useState, useEffect } from 'react';
import axios from 'axios'
import '../CSS/Home.css'

function Home() {
  const [pokemon, setPokemon] = useState([]);
  const [pokeCount, setPokeCount] = useState(0)
  const [pokeSearch, setPokeSearch] = useState('')
  const [pokeRes, setPokeRes] = useState([])
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
        console.log(res.data)
        setPokeRes(res.data)
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
      <h1 className="blocks">Poke Center</h1>
      <form
        onSubmit={searchPokemon} 
        className='d-flex justify-content-center'>
            <input 
                type="text"
                value={pokeSearch}
                onChange={(e) => setPokeSearch(e.target.value)}
            />
            <button 
                type='submit'
            > 
                Search 
            </button>
        </form>
        {
            loading ? (
                <p> ... </p>
            ) : (
            <div className='poke-result'>
                    <div 
                        key={pokeRes.id}
                        className='poke-card d-flex flex-column justify-content-center'>
                            <h2>{pokeRes.name}</h2>
                    </div>
            </div>
            )
        }
        <div className="cards-deck">
              {pokemon.map((p) => (
                <div className='poke-card' key={p.data.id}>
                  <img
                    src={p.data.sprites.front_default}
                    alt={p.data.sprites.front_default}
                  />
                  <h2>{p.data.name}</h2>
                </div>
              ))}
        </div>
      <div className="paginations">
      <button 
          type="button" 
          className="btns-next" 
          onClick={prevBtn}
          disabled={pokeCount === 0}
        >
          {' '}
          previous{' '}
        </button>
        <button type="button" className="btns-next" onClick={nextBtn}>
          {' '}
          next{' '}
        </button>
      </div>
    </div>
  );
}

export default Home;
