import React from 'react';
import Header from '../Header';
import './App.css';
import MovieList from '../Movie/MovieList';

function App() {
  return (
    <div className="App">
        <Header slogan="Eva is the best" />
      <MovieList/>
    </div>
  );
}

export default App;
