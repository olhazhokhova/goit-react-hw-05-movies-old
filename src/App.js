import './App.css';
import { lazy, Suspense } from 'react';
import { Routes, NavLink, Route, Outlet, Navigate } from 'react-router-dom';
// import HomePage from './components/HomePage';
// import MoviesPage from './components/MoviesPage';
// import MovieDetailsPage from './components/MovieDetailsPage';
// import Cast from './components/Cast';
// import Reviews from './components/Reviews';

const HomePage = lazy(() => import('./components/HomePage'));
const MoviesPage = lazy(() => import('./components/MoviesPage'));
const MovieDetailsPage = lazy(() => import('./components/MovieDetailsPage'));
const Cast = lazy(() => import('./components/Cast'));
const Reviews = lazy(() => import('./components/Reviews'));

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
      <Suspense fallback={<></>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="/movies/:movieId/cast" element={<Cast />} />
            <Route path="/movies/:movieId/reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default App;
