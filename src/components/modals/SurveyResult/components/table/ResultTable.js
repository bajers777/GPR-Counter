import React from 'react'

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
                {/* {activeSurveyResult.map(item => <TableRow key={item.hourId} hourId={item.hourId} survey={item.survey} />)} */}
            </tbody>
        </table>

    )
}

export default ResultTable