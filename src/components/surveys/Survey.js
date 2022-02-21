import React, { useEffect } from 'react';
import { getData } from '../../firebase';
import ModalOverlay from '../modals/ModalOverlay';
import SurveyRow from './SurveyRow';

const Survey = () => {
    const activeUserMoviesList = JSON.parse(localStorage.getItem('ACTIVE_USER_MOVIES_LIST'));
    useEffect(() => {
        getData('completed');
    }, []);

    return (
        <div className="survey">
            {activeUserMoviesList.map(item => <SurveyRow key={item.id} name={item.name} date={item.date} surveyResult={item.surveyResult} id={item.id} status={item.status} />)}
            <ModalOverlay type='survey-result' />;
        </div>
    );
};

export default Survey;
//