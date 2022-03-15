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

export default ResultTable
