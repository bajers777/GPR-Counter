import React, { useContext } from 'react';
import '../../../../styles/_result-table.scss';

import Header from './Header';
import Body from './Body';
const ResultTable = props => {

    return (
        <table className='result-table'>
            <Header />
            <Body {...props} />
        </table>
    )
}
// <IntervalResult key={index + item} data={item.survey} pathValue={props.pathValue} filterOption={props.filterOption} />
// surveyDirection.map((item, index) => <ResultCell key={type[index]} ammount={item.ammount} />)

export default ResultTable
