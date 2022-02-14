import React, { useEffect } from 'react';
import { handleDatabaseRequest } from '../../firebase';
import SurveyRow from './SurveyRow';

const Survey = () => {
    const activeUserMoviesList = JSON.parse(localStorage.getItem('ACTIVE_USER_MOVIES_LIST'));

    //handleDatabaseRequest(type, activeSurvey, updateType, updateData)
    handleDatabaseRequest('GET_DATA');

    return (
        <div className="survey">
            {activeUserMoviesList.map(item => <SurveyRow key={item.id} name={item.name} date={item.date} surveyResult={item.surveyResult} id={item.id} status={item.status} />)}
        </div>
    );
};

export default Survey;
//