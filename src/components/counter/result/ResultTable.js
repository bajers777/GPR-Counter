import React, { useContext } from 'react';
import Interval from './Interval';
import { SurveyCtx } from '../../../contexts/survey/SurveyContext';

const ResultTable = props => {
    const [intervalSurvey, setIntervalSurvey, surveyCounter, setSurveyCounter, carSurveyDefault] = useContext(SurveyCtx);
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
                {
                    intervalSurvey.map(item => <Interval key={item.interval} interval={item.interval} data={item.survey} pathValue={props.pathValue} filterOption={props.filterOption} />)
                }

            </tbody>
        </table>
    )
}
// surveyDirection.map((item, index) => <ResultCell key={type[index]} ammount={item.ammount} />)

export default ResultTable
