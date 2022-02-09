import s from './HomePage.module.css';
import PropTypes from "prop-types";
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchTrendingFilms } from '../../services/api';
import Loader from '../Loader';

const HomePage = () => {

    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const location = useLocation();

    useEffect(() => {
        setIsLoading(true);
        fetchTrendingFilms().then(data => setMovies(data.results)).finally(() => {
            setIsLoading(false);
        });
    }, []);
   
    return (
        <div className={s.trending}>
            <h1>Trending today</h1>
            { isLoading && <Loader />}
            <ul className={s.unstyled}>
                {
                    movies.map(({id, title, original_name}) => {
                        return (
                            <li key={id}>
                                <Link to={`/movies/${id}`} state={{ from: location}} className={s.link} >{ title ? title : original_name }</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default HomePage;