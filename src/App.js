import './App.css';
import { Routes, NavLink, Route, Outlet } from 'react-router-dom';
import HomePage from './components/HomePage';
import MoviesPage from './components/MoviesPage';
import MovieDetailsPage from './components/MovieDetailsPage';
import Cast from './components/Cast';
import Reviews from './components/Reviews';

const App = () => {
  return (
    <div className="app-content">
      <header className="header">
        <NavLink to="/" className="header-link">
          Home
        </NavLink>
        <NavLink to="/movies" className="header-link">
          Movies
        </NavLink>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="/movies/:movieId/cast" element={<Cast />} />
          <Route path="/movies/:movieId/reviews" element={<Reviews />} />
        </Route>
      </Routes>
      <Outlet />
    </div>
  );
};

export default App;