import React from 'react';
import HourCell from './HourCell';
import IntervalRow from './IntervalRow';

const Body = props => {

    return (
        <tbody className='result-table__body'>
            {props.isActiveModal ? <HourCell key={props.pathValue} {...props} /> : <IntervalRow {...props} />}

        </tbody>
    )
}

export default Body