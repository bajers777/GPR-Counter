import React, { useContext } from 'react';

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
