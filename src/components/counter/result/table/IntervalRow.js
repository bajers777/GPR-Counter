import React from 'react';
import ResultCell from './ResultCell';
const IntervalRow = props => {
    return (
        <>
            {
                props.data.map((item, index) => {
                    const resultCellValue = item.survey.filter(itemPath => itemPath.path === props.pathValue).pop().survey.map(item => item.directions.filter(itemDirection => itemDirection.direction === props.filterOption).map(item => item.ammount));
                    const type = item.survey.filter(itemPath => itemPath.path === props.pathValue).pop().survey.map(item => item.type);
                    return (
                        <tr key={`intervalRowTr ${index} ${item.activeInterval}`} className='result-table__interval'>
                            <td key={`intervalRowTd ${index} ${item.activeInterval} ${props.hourId && props.hourId}`} className='result-table__interval--interval'>
                                {item.activeInterval}
                            </td>
                            <ResultCell key={'intervalResultCell' + item.activeInterval} type={type} activeInterval={item.activeInterval} data={resultCellValue} />
                        </tr>
                    )
                }
                )
            }
        </>

    )
}
export default IntervalRow
