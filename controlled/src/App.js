import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './CSS/Home.css'

function App() {
  const [pokemon, setPokemon] = useState([]);
  // const [pokeImg, setPokeImg] = useState([])

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

  const nextBtn = async() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?offset=20&limit=21')
    .then(res => {
      const fetches = res.data.results.map(p => axios.get(p.url))

      Promise.all(fetches).then(data => {
        setPokemon(data);
        console.log(data)
      })
    });
  }

  return (
    <div className="App">
      <h1 className="blocks">Example</h1>
      <div className="cards-deck">
        {pokemon.map((p) => (
          <div key={p.data.id}>
            <img
              src={p.data.sprites.front_default}
              alt={p.data.sprites.front_default}
            />
            <h2>{p.data.name}</h2>
          </div>
        ))}
      </div>
      <div className="paginations">
        <button type="button" className="btns-next" onClick={nextBtn}>
          {' '}
          next{' '}
        </button>
      </div>
    </div>
  );
}

export default App;
