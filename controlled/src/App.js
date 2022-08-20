import React from 'react';

function App() {
  const [{ data, loading, error }, setState] = React.useState({
    data: null || {},
    loading: false,
    error: null,
  });
  const [search, setSearch] = React.useState('');

  React.useEffect(() => {
    setState({ data: null, loading: true, error: null });
    fetch('https://pokeapi.co/api/v2/pokemon/')
      .then((res) => res.json())
      .then((data) => setState({ data, loading: false, error: null }))
      .catch((error) => setState({ data: null, loading: false, error }));
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setState({ data: null, loading: true, error: null });
    fetch(`https://pokeapi.co/api/v2/pokemon/${search}`)
      .then((res) => res.json())
      .then((data) => setState({ data, loading: false, error: null }))
      .catch((error) => setState({ data: null, loading: false, error }));
    if (search === '') {
      setState({ data: null, loading: false, error: null });
    }
  };

  return (
    <div>
      <h1
        style={{
          textAlign: 'center',
        }}
      >
        LIST - P🅞KEM🅞N
      </h1>
      <p>{error ? error.message : null}</p>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={search}
          onChange={handleSearch}
          style={{
            width: '70%',
            marginBottom: '10px',
            backgroundColor: '#282c34',
            borderRadius: '5px',
            color: 'white',
            borderColor: '#ffd700',
          }}
        />
        <button
          type="submit"
          onClick={handleSubmit}
          style={{
            width: '30%',
            marginBottom: '10px',
            backgroundColor: '#ffd700',
          }}
        >
          Search
        </button>
      </form>

      {loading ? null : (
        <div>
          {data?.results?.map((item) => (
            <ul key={item.url}>
              <li>
                {/* <a href={item.url}> */}
                <div
                  className="poke-box"
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    textAlign: 'center',
                    alignItems: 'center',
                    width: '100%',
                    height: '100px',
                    backgroundColor: '#f5f5f5',
                    borderRadius: '5px',
                  }}
                >
                  <h2>{item.name}</h2>
                </div>
                {/* </a> */}
              </li>
            </ul>
          ))}
        </div>
      )}
      {search ? (
        <div>
          {loading ? null : (
            <div className="poke-rs">
              <h3>{data?.name}</h3>
              <img src={data?.sprites?.front_default} alt={data?.name} />
              <p>{data?.weight}</p>
              <p>{data?.height}</p>
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
}

export default App;
