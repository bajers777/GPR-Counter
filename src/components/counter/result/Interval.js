import React from 'react';
import ResultCell from './ResultCell';


const Interval = props => {

    // const { data, pathValue } = props;
    const type = props.data.filter(item => item.path == props.pathValue).map(item => item.survey).map(item => item.map(item => item.type)).pop();
    const intervalSurvey = props.data.filter(itemPath => itemPath.path == props.pathValue).map(itemSurvey => itemSurvey.survey).map(item => item.map(itemDirections => itemDirections)).pop();
    // const intervalSurvey = props.data.map(item => item.survey.filter(itemPath => item)).pop();
    // console.log(intervalSurvey);



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
