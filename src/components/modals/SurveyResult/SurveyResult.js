import React, { useState, useContext } from 'react'
import ResultNavbar from '../../counter/result/ResultNavbar';
import ResultTable from '../../counter/result/table/ResultTable';

import { ModalCtx } from '../../../contexts/modal/ModalContext';
import Result from '../../counter/result/Result';

const SurveyResult = props => {
    // const [pathValue, setPathValue] = useState(1);
    // const [filterOption, setFilterOption] = useState('UPRIGHT');
    const [isActiveModal, setActiveModal, modalData, setModalData, handleModalVisibility] = useContext(ModalCtx);

    // const setFilter = e => {
    //     setFilterOption(e.target.getAttribute('data-direction'));
    // }

    return (
        <>
            <div className="modal__survey-result">
                <Result data={modalData.activeSurvey.surveyResult} />
                {/* <ResultNavbar filterOption={filterOption} setFilter={setFilter} setPathValue={setPathValue} />
                <ResultTable pathValue={pathValue} filterOption={filterOption} modalData={modalData.activeSurvey} /> */}
            </div>
        </>
    )
}

export default SurveyResult