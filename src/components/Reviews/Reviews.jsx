import s from './Reviews.module.css';
import PropTypes from "prop-types";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../../services/api';

const Reviews = () => { 

    const [reviews, setReviews] = useState([]);
    const { movieId } = useParams();
    
    useEffect(() => {
       fetchMovieReviews(movieId).then(data => setReviews(data.results)).finally();
    }, [movieId]);

    return (
        <ul className={s.review}>
            {
                reviews.map(({ id, author, content, updated_at }) => {
                    return <li key={id} className={s.item}>
                        <h3 className={s.name}>Author: {author}</h3>
                        <p>{content}</p>
                        <p>{updated_at}</p>
                    </li>
                })
            }
        </ul>  
    )
}

export default Reviews;