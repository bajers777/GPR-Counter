import React from 'react';
import SurveyCell from './SurveyCell';
const SurveyRow = props => {
    const { name, date, id, surveyResult, status } = props;


    return (
        <div className="survey__row">
            <SurveyCell name={name} date={date} id={id} surveyResult={surveyResult} status={status} />
        </div>
    )
}

export default SurveyRow