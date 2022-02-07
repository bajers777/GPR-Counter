import React from 'react';

const MovieRowCell = props => {
    const { name, size, url } = props;
    return (
        <div className="movies__cell">
            <b>Name: </b> <p>{name}</p>
            <b>Size: </b> <p>{size}</p>
            <button>Download </button>

        </div>
    );
};

export default MovieRowCell;
