import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { apiFilmReview } from 'services/ApiFilms';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { filmId } = useParams();

  useEffect(() => {
    apiFilmReview(filmId).then(({ data }) => {
      setReviews(data.results);
    });
  }, []);

  return (
    <ul>
      {reviews.length > 0 ? (
        reviews?.map(({ author, content, id }) => {
          return (
            <li key={id}>
              <p>{author}</p>
              <p>{content}</p>
            </li>
          );
        })
      ) : (
        <div>{'We do not have any reviews for this film'}</div>
      )}
    </ul>
  );
};

export default Reviews;
