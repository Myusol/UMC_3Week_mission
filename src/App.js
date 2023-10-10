import React from 'react';
import Movie from './Components/Movie';
import { movies } from './movieDummy';

function App() {
  return (
    <div className="App">
      <div className="app-container">
          {movies.results.map((item) => (
            <Movie
              key={item.id}
              title={item.title}
              poster={item.poster_path}
              rate={item.vote_average}
              overview={item.overview} />
        ))}
      </div>
    </div>
  );
}

export default App;
