import React from 'react';
import ModalOverlay from '../../modals/ModalOverlay';
import ResultDirection from './ResultDirection';
import { ShortcutsIcon } from '../../../assets/icons/icons';

const ResultNavbar = props => {
    const { filterOption, setFilter, handleModalVisibility, setPathValue, modalData } = props;

    return (
        <div className="result-navbar">
            <div className="result-navbar__main-group">
                <ResultDirection setPathValue={setPathValue} />
                <button className='primary-btn' data-direction='LEFT' onClick={setFilter}>Lewo</button>
                <button className='primary-btn' data-direction='UPRIGHT' onClick={setFilter}>Prosto</button>
                <button className='primary-btn' data-direction='RIGHT' onClick={setFilter}>Prawo</button>
            </div>
            {(modalData.type === null || modalData.type === 'keyshortcuts') && <button className='secondary-btn' data-type='keyshortcuts' onClick={handleModalVisibility}><img src={ShortcutsIcon} alt="Shortcut icon" /> Skróty klawiszowe</button>}

        </div>
    )
}

export default ResultNavbar