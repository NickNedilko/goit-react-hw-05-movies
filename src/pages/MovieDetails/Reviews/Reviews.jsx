import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { apiFilmReview } from 'services/ApiFilms';
import css from './Reviews.module.css'

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { filmId } = useParams();

  useEffect(() => {
    apiFilmReview(filmId).then(({ data }) => {
      setReviews(data.results);
    });
  }, [filmId]);

  return (
    <ul>
      {reviews.length > 0 ? (
        reviews?.map(({ author, content, id }) => {
          return (
            <li key={id}>
              <p className={css.avtor}>{author} :</p>
              <p className={css.content}>{content}</p>
            </li>
          );
        })
      ) : (
        <div>{'Sorry! We do not have any reviews for this film'}</div>
      )}
    </ul>
  );
};

export default Reviews;
