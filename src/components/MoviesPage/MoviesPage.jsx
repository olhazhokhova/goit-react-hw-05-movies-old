import { useState, useEffect } from 'react';
import { NavLink, useSearchParams } from 'react-router-dom';
import s from './MoviesPage.module.css';
import PropTypes from "prop-types";
import { fetchMoviesByQuery } from '../../services/api';
import Loader from '../Loader';

const MoviesPage = () => {

    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [notFound, setNotFound] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        searchParams.get('query') && fetchMoviesByQuery(searchParams.get('query')).then(data => {
            setMovies(data.results);
            data.total_results === 0 && setNotFound(true);
        }).finally(() => {
            setIsLoading(false);
        })
    }, [searchParams])

    const onInputChange = (e) => {
        setQuery(e.currentTarget.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setNotFound(false);
        fetchMoviesByQuery(query).then(data => {
            setMovies(data.results);
            data.total_results === 0 && setNotFound(true);
        }).finally(() => {
            setIsLoading(false);
        });
        setSearchParams({ query });
        setQuery('');
    }

    return (
        <>
            <form className={s.form} onSubmit={onSubmit}>
                <input type="text" className={s.input} value={query} onChange={onInputChange} />
                <button className={s.button}>Search</button>
            </form>
            {isLoading && <Loader />}
            {!isLoading && movies.length > 0 &&
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
            }
            {
                !isLoading && notFound &&  <div className={s.notFound}>Movies with query {searchParams.get('query')} not found</div>
            }
            
        </>
    )
}

export default MoviesPage;