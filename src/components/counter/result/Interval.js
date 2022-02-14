import React from 'react';
import ResultCell from './IntervalCell';


const Interval = props => {

    const type = props.data.filter(item => item.path == props.pathValue).map(item => item.survey).map(item => item.map(item => item.type)).pop();
    const intervalSurvey = props.data.filter(itemPath => itemPath.path == props.pathValue).map(itemSurvey => itemSurvey.survey).map(item => item.map(itemDirections => itemDirections)).pop();

    return (
        <tr>
            <td>
                {props.interval}
            </td>
            {intervalSurvey.map(item => <ResultCell key={item.type} data={item.directions.filter(item => item.direction === props.filterOption).pop()} />)}

        </tr>
    )
};

export default Interval;
