import s from './HomePage.module.css';
import PropTypes from "prop-types";
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { fetchTrendingFilms } from '../../services/api';
import Loader from '../Loader';

const HomePage = () => {

    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

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
                                <NavLink to={`/movies/${id}`} className={s.link} >{ title ? title : original_name }</NavLink>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default HomePage;