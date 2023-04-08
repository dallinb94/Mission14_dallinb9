import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Podcast from './pages/Podcast';
import MovieList from './pages/MovieListPage';

function App() {
  return (
    <div className="App">
      <nav>
        <a href="/">Home | </a>
        <a href="/Podcast">Podcast | </a>
        <a href="/MovieList">Movie List</a>
      </nav>

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Podcast" element={<Podcast />} />
          <Route path="/MovieList" element={<MovieList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
