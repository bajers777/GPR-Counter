import React from 'react';

const MovieRowCell = props => {
    const { name, date, status, url } = props;
    return (
        <div className="movies__cell">
            <b>Nazwa: </b> <p>{name}</p>
            <b>Data: </b> <p>{date}</p>
            <b>Status: </b> <p>{status ? 'Pomiar zakończony' : 'Do obejrzenia'}</p>

            <button href={url}>Pobierz film</button>
        </div>
    );
};

export default MovieRowCell;
