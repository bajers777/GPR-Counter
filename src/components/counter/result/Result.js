import React, { useState, useContext } from 'react';
import ResultTable from './table/ResultTable';
import { ModalCtx } from '../../../contexts/modal/ModalContext';
import ResultNavbar from './ResultNavbar';

const Result = props => {
    const [pathValue, setPathValue] = useState(1);
    const [filterOption, setFilterOption] = useState('UPRIGHT');
    const [isActiveModal, setActiveModal, modalData, setModalData, handleModalVisibility] = useContext(ModalCtx);

    const setFilter = e => {
        setFilterOption(e.target.getAttribute('data-direction'));
    }

    return (
        <section className='result'>
            <ResultNavbar filterOption={filterOption} setFilter={setFilter} handleModalVisibility={handleModalVisibility} setPathValue={setPathValue} />
            <ResultTable data={props.data} pathValue={pathValue} filterOption={filterOption} isActiveModal={isActiveModal} />
        </section>
    )
}

export default Result
