import React, { useContext } from 'react';
import { ModalCtx } from '../../contexts/modal/ModalContext';
import { postData } from '../../firebase';
import ModalOverlay from '../modals/ModalOverlay';
import SurveyRow from './SurveyRow';
import './Survey.scss';
const Survey = props => {
    const activeUserMoviesList = [...props.userMoviesList];
    const { handleModalVisibility } = useContext(ModalCtx);

    const handleChangeStatusButton = e => {
        const inProgressMovieList = [...activeUserMoviesList].filter(item => !item.status);
        const activeSurvey = inProgressMovieList.filter(item => item.name === e.currentTarget.parentElement.parentElement.querySelector('.survey__row--name').innerText).pop();
        return postData('UPDATE_STATUS', activeSurvey, true, props.currentUser.userShortName);
    }
    return (
        <section className="survey">
            <h3>Moje pomiary</h3>
            <i>Pamiętaj, że w polu data jest OSTATECZNY termin oddania filmu do weryfikacji.</i>
            <div className="wrapper">
                <div className="survey__head">
                    <div className="survey__head--cell">
                        Nazwa punktu
                    </div>
                    <div className="survey__head--cell">
                        Data
                    </div>
                    <div className="survey__head--cell">
                        Status
                    </div>
                    <div className="survey__head--cell">

                    </div>
                </div>
                {activeUserMoviesList.map(item =>
                    <SurveyRow handleModalVisibility={handleModalVisibility}
                        handleChangeStatusButton={handleChangeStatusButton}
                        key={item.id + item.name} name={item.name}
                        date={item.date} surveyResult={item.surveyResult}
                        id={item.id}
                        status={item.status}
                        link={item.link}
                    />)}
            </div>
            <ModalOverlay activeUserMoviesList={activeUserMoviesList} type='survey-result' />
        </section>
    );
};

export default Survey;
//