import React, { useState } from 'react';
import ResultDirection from './ResultDirection';
import ResultButton from '../../UI/ResultButton';
import ResultTable from './ResultTable';


import './Result.css';
const Result = props => {
    const [pathValue, setPathValue] = useState(1);

    // const defaultDirection = props.data.filter(item => item.path == pathValue).map(item => item.survey).map(item => item.map(item => item.directions)).pop().map(item => item.filter(item => item.direction === 'UPRIGHT').pop());
    const [filterOption, setFilterOption] = useState();

    const setFilter = e => {
        // const survey = props.data.filter(item => item.path == pathValue).map(item => item.survey).pop();
        // 0: { type: 'CAR_PERSONAL', directions: Array(3) }
        // 1: { type: 'CAR_DELIVERY', directions: Array(3) }
        // 2: { type: 'CAR_W-TRAILER-TRUCK', directions: Array(3) }
        // 3: { type: 'CAR_TRAILER-TRUCK', directions: Array(3) }
        // 4: { type: 'CAR_TOURING', directions: Array(3) }
        // 5: { type: 'CAR_TRACTOR', directions: Array(3) }


        // const directions = survey.map(item => item.directions).map(item => item.filter(item => item.direction == e.target.getAttribute('data-direction')).pop());
        // 0: { direction: 'UPRIGHT', ammount: 0 }
        // 1: { direction: 'UPRIGHT', ammount: 0 }
        // 2: { direction: 'UPRIGHT', ammount: 0 }
        // 3: { direction: 'UPRIGHT', ammount: 0 }
        // 4: { direction: 'UPRIGHT', ammount: 0 }
        // 5: { direction: 'UPRIGHT', ammount: 0 }
        setFilterOption(e.target.getAttribute('data-direction'));

        // setSurveyDirection(directions);
    }
    return (
        <div>
            <ResultDirection setPathValue={setPathValue} />
            <ResultButton data-direction='LEFT' onClick={setFilter}>LEWO</ResultButton>
            <ResultButton data-direction='UPRIGHT' onClick={setFilter}>PROSTO</ResultButton>
            <ResultButton data-direction='RIGHT' onClick={setFilter}>PRAWO</ResultButton>
            <ResultTable pathValue={pathValue} filterOption={filterOption} />
        </div>
    )
}

export default Result
