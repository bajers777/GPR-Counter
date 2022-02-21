import React from 'react';
import HourCell from './HourCell';
import IntervalRow from './IntervalRow';

const Body = props => {

    // const modalData = props.data.map(item => item.survey);
    return (
        <tbody className='result-table__body'>
            {props.isActiveModal ? <HourCell {...props} /> : <IntervalRow {...props} />}

        </tbody>
    )
}

export default Body