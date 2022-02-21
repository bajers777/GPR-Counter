import React from 'react';
import IntervalRow from './IntervalRow';
const HourCell = props => {
    return (
        <>
            {props.data.map(item =>
                <>
                    <tr>
                        <td>
                            <b>Godzina: {item.hourId}</b>
                        </td>
                    </tr>
                    <IntervalRow data={item.survey} pathValue={props.pathValue} filterOption={props.filterOption} />
                </>)}

        </>
    )
}

export default HourCell

// data={item.directions.map(data => data).filter(surveyDirection => surveyDirection.direction === props.filterOption).pop()}
// const surveyResult = props.data.survey.filter(itemPath => itemPath.path === props.pathValue).pop().survey.map(itemDirections => itemDirections);
