import React from 'react';
import ResultCell from './ResultCell';

const Interval = props => {
    const { data, pathValue, surveyDirection } = props;
    const type = data.filter(item => item.path == pathValue).map(item => item.survey).map(item => item.map(item => item.type)).pop();

    return (
        <tr>
            <td>{props.interval}</td>
            {
                props.surveyDirection.map((item, index) => <ResultCell key={type[index]} ammount={item.ammount} />)
            }
        </tr>
    )
};

export default Interval;
