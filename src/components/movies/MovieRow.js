import React from 'react';
import MovieRowCell from './MovieRowCell';

const MovieRow = () => {
    const userMoviesList = JSON.parse(localStorage.getItem('ACTIVE_USER_MOVIES_LIST'));
    return (
        <div className="movies__row">
            {userMoviesList.map(item => <MovieRowCell key={item.id} name={item.name} date={item.date} status={item.status} url={item.url} />)}
        </div>
    );
};

export default MovieRow;

