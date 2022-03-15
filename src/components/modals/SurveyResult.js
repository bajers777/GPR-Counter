import React, { useState, useContext } from 'react';
import Result from '../counter/result/Result';

const SurveyResult = props => {
    const { modalData } = props;
    return (
        <>
            <div className="modal__survey-result">
                <b className='modal__survey-result--title'>{modalData.name}</b>
                <Result data={modalData.surveyResult} />
            </div>
        </>
    )
}

export default SurveyResult