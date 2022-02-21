import React from 'react'

const ResultCell = props => {
    return (
        <>
            {
                props.data.map(item => <td className='result-table__body--cell'>{item}</td>)
            }

        </>

    )
}

export default ResultCell