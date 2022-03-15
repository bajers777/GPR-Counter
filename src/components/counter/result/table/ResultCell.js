import React from 'react'

const ResultCell = props => {
    return (
        <>
            {
                props.data.map((item, index) => {

                    return <td key={'intervalRowTd' + props.activeInterval + props.type[index]} className='result-table__interval--value'>{item}</td>
                })
            }

        </>

    )
}

export default ResultCell