import s from './Reviews.module.css';
import PropTypes from "prop-types";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../../services/api';

const Reviews = () => { 

    const [reviews, setReviews] = useState([]);
    const [empty, setEmpty] = useState(true);
    const { movieId } = useParams();
    
    useEffect(() => {
        setEmpty(false);
        fetchMovieReviews(movieId).then(data => {
            data.total_results === 0 && setEmpty(true);
            setReviews(data.results);
        }).finally();
    }, [movieId]);

    return (
        empty ?  
            <div> This movie hasn't any review yet. </div>
            :
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