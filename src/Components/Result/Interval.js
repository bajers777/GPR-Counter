import React from 'react';
import ResultCell from './ResultCell';

const Interval = props => {
    const { data, pathValue, surveyDirection } = props;
    const type = data.filter(item => item.path == pathValue).map(item => item.survey).map(item => item.map(item => item.type)).pop();
    const intervalSurvey = props.intervalSurvey.map(item => item.survey.filter(itemPath => item)).pop();
    console.log(intervalSurvey);
    // intervalSurvey.map((item, index) => <ResultCell key={type[index]} ammount={item.ammount} />)



    return (
        <>
            {
                props.intervalSurvey.map(item => {
                    return (
                        <tr>
                            <td>
                                {item.interval}
                            </td>
                            {
                                intervalSurvey.filter(item => item.path == pathValue).map(itemSurvey => itemSurvey.survey).pop().map(itemDirections => itemDirections.directions.map((item, index) => <ResultCell key={type[index]} ammount={item.ammount} />))
                            }
                        </tr>
                    )
                })
            }
        </>
    )
};

export default Interval;
