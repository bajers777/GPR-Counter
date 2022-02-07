import React, { useState, useContext } from 'react';
import ResultDirection from './ResultDirection';
import ResultTable from './ResultTable';

import { ModalCtx } from '../../../contexts/modal/ModalContext';

import { ShortcutsIcon } from '../../../assets/icons/icons';

const Result = props => {
    const [pathValue, setPathValue] = useState(1);
    const [filterOption, setFilterOption] = useState('UPRIGHT');
    const [isActive, setActive] = useContext(ModalCtx);

    const setFilter = e => {
        setFilterOption(e.target.getAttribute('data-direction'));
    }

    const handleKeyshortcutsButton = () => {
        setActive(prevState => !prevState)
    }

    return (
        <section className='result'>
            <div className="result-navbar">
                <div className="result-navbar__main-group">
                    <ResultDirection setPathValue={setPathValue} />


                    <button className='primary-btn' data-direction='LEFT' onClick={setFilter}>Lewo</button>
                    <button className='primary-btn' data-direction='UPRIGHT' onClick={setFilter}>Prosto</button>
                    <button className='primary-btn' data-direction='RIGHT' onClick={setFilter}>Prawo</button>
                </div>
                <button className='secondary-btn' onClick={handleKeyshortcutsButton}><img src={ShortcutsIcon} alt="Shortcut icon" /> Skróty klawiszowe</button>
            </div>
            <ResultTable pathValue={pathValue} filterOption={filterOption} />
        </section>
    )
}

export default Result
