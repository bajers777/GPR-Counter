import React from 'react';
import IntervalRow from './IntervalRow';
const HourCell = props => {
    return (
        <>
            {props.data.map((item, index) => {
                return (
                    <>
                        <tr className='result-table__hour' key={'hour' + item.hourId}>
                            <td key={'hourTd' + item.hourId}>
                                <b key={'hourTdchild' + item.hourId}>Godzina: {item.hourId}</b>
                            </td>
                        </tr>
                        <IntervalRow key={'intervalRow' + item.hourId} hourId={item.hourId} data={item.survey} pathValue={props.pathValue} filterOption={props.filterOption} />
                    </>

                )
            })}
        </>
    )
}

export default HourCell