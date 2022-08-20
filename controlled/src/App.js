import React from 'react';

function App() {
  const [{ data, loading, error }, setState] = React.useState({
    data: null || {},
    loading: false,
    error: null,
  });

  React.useEffect(() => {
    setState({ data: null, loading: true, error: null });
    fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
      .then((res) => res.json())
      .then((data) => setState({ data, loading: false, error: null }))
      .catch((error) => setState({ data: null, loading: false, error }));
  }, []);

  return (
    <div>
      <h1>LIST - P🅞KEM🅞N</h1>
      <p>{error ? error.message : null}</p>
      {loading ? null : (
        <div>
          {data.results?.map((item) => (
            <ul key={item.url}>
              <li>
                <a href={item.url}>{item.name} </a>
              </li>
            </ul>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
