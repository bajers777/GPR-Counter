import React, { useState, useContext } from 'react';
import ResultTable from './table/ResultTable';
import { ModalCtx } from '../../../contexts/modal/ModalContext';
import ResultNavbar from './ResultNavbar';
import ModalOverlay from '../../modals/ModalOverlay';

const Result = props => {
    const [pathValue, setPathValue] = useState(1);
    const [filterOption, setFilterOption] = useState('UPRIGHT');
    const [isActiveModal, setActiveModal, modalData, setModalData, handleModalVisibility] = useContext(ModalCtx);

    const setFilter = e => {
        setFilterOption(e.target.getAttribute('data-direction'));
    }
    return (
        <section className='result'>
            <ResultNavbar filterOption={filterOption} setFilter={setFilter} handleModalVisibility={handleModalVisibility} setPathValue={setPathValue} modalData={modalData} />
            <ResultTable data={props.data} pathValue={pathValue} filterOption={filterOption} isActiveModal={isActiveModal} />
            {modalData.type === 'keyshortcuts' && <ModalOverlay />}
        </section>
    )
}

export default Result
