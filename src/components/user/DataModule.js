import React from 'react'

const DataModule = props => {
    return (
        <div className={`user__body--data ${props.type}`}>
            <p>{props.headline}</p>
            <b>{props.data}</b>
        </div>
    )
}

export default DataModule