import s from './Cast.module.css';
import PropTypes from "prop-types";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from '../../services/api';
import defaultImage from '../../images/no_photo.jpg';

const Cast = () => { 

    const PROFILE_URL = 'https://image.tmdb.org/t/p/w500';
    const [actors, setActors] = useState([]);
    const { movieId } = useParams();
    
    useEffect(() => {
        fetchMovieCast(movieId).then(data => setActors(data.cast)).finally();
    }, [movieId]);

    return (
        <ul className={s.cast}>
            {
                actors.map(({id, name, profile_path, character}) => {
                    return <li key={id} className={s.item}>
                        <img className={s.img} src={profile_path ? PROFILE_URL + profile_path : defaultImage} alt={name} />
                        <div>
                            <h3 className={s.name}>{name}</h3>
                            <p>Character: { character }</p>
                        </div>
                    </li>
                })
            }
        </ul>  
    )
}

export default Cast;