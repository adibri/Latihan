import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './CSS/Home.css'

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [pokeCount, setPokeCount] = useState(0)
  const [pokeSearch, setPokeSearch] = useState('')

  useEffect(() => {
      axios.get('https://pokeapi.co/api/v2/pokemon/')
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
      console.log(pokeSearch)
      console.log(res)
    })
  }

  const nextBtn = async() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${pokeCount}&limit=20`)
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
    axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${pokeCount}&limit=20`)
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
          className='d-flex justify-content-center'
          onSubmit={searchPokemon}  
        >
            <input 
                type="text"
                value={pokeSearch}
                onChange={(e) => setPokeSearch(e.target.value)}
            />
            <button type='submit'> Search </button>
        </form>
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

export default App;
