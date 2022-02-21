import React from 'react';
import ResultCell from './ResultCell';
const IntervalRow = props => {
    // filterOption={props.filterOption} pathValue={props.pathValue}
    return (
        <>
            {
                props.data.map(item => {
                    const resultCellValue = item.survey.filter(itemPath => itemPath.path === props.pathValue).pop().survey.map(item => item.directions.filter(itemDirection => itemDirection.direction === props.filterOption).map(item => item.ammount));
                    return (
                        <tr>
                            <td className='result-table__body--interval'>
                                {item.activeInterval}
                            </td>
                            <ResultCell data={resultCellValue} />

                        </tr>
                    )
                }
                )
            }
        </>

    )
}
export default IntervalRow
