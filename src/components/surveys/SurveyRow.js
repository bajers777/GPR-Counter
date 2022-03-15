import React from 'react';
import SurveyCell from './SurveyCell';
const SurveyRow = props => {
    return (
        <div className="survey__row">
            <SurveyCell {...props} />
        </div>
    )
}

export default SurveyRow