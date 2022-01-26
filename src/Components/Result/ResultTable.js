import React from 'react';
import Interval from './Interval';

const ResultTable = props => {
    return (
        <table className='result-table'>
            <thead>
                <tr>
                    <td>
                        Interwał
                    </td>
                    <td>
                        Motocykle
                    </td>
                    <td>
                        Osobowe
                    </td>
                    <td>
                        Dostawcze
                    </td>
                    <td>
                        Ciężarowe bez naczepy
                    </td>
                    <td>
                        Ciężarowe z naczepą
                    </td>
                    <td>
                        Autobusy
                    </td>
                    <td>
                        Ciągniki
                    </td>
                    <td>
                        Rowery (jezdnia)
                    </td>

                </tr>
            </thead>
            <tbody>

                <Interval data={props.data} interval={props.interval} pathValue={props.pathValue} surveyDirection={props.surveyDirection} intervalSurvey={props.intervalSurvey} />

            </tbody>
        </table>
    )
}
// surveyDirection.map((item, index) => <ResultCell key={type[index]} ammount={item.ammount} />)

export default ResultTable
