import React from 'react';
import ResultCell from './ResultCell';

const ResultTable = props => {
    const { data, pathValue, surveyDirection } = props;
    const type = data.filter(item => item.path == pathValue).map(item => item.survey).map(item => item.map(item => item.type)).pop();
    return (
        <table className='result-table'>
            <thead>
                <tr>
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
                <tr>
                    {
                        surveyDirection.map((item, index) => {
                            return <ResultCell key={type[index]} ammount={item.ammount} />
                        })
                    }
                </tr>
            </tbody>
        </table>
    )
}

export default ResultTable
