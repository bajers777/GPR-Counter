import React from 'react';

const ResultDirection = props => {
    const handleDirectionChange = e => {
        props.setPathValue(e.target.value);
    }
    return (
        <div className="direction-select">
            <select onChange={handleDirectionChange}>
                <option value={1}>Kierunek 1</option>
                <option value={2}>Kierunek 2</option>
                <option value={3}>Kierunek 3</option>
            </select>
        </div>
    )
}

export default ResultDirection
