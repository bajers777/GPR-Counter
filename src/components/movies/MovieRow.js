import React from 'react';
import MovieRowCell from './MovieRowCell';

const MovieRow = () => {
    const uploadedFile = JSON.parse(localStorage.getItem('NEW_MOVIE'));
    console.log(uploadedFile);
    return (
        <div className="movies__row">
            <MovieRowCell name={uploadedFile.name} size={uploadedFile.size} url={uploadedFile.url} />
        </div>
    );
};

export default MovieRow;
