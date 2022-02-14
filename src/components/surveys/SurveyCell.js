import React, { useContext } from 'react';
import { handleDatabaseRequest } from '../../firebase';
const SurveyCell = props => {
    const { name, date, status } = props;

    const handleButtonClick = e => {
        const key = e.currentTarget.getAttribute('data-type');
        switch (key) {
            case 'SHOW_SURVEY':
                console.log('show survey modal');
                break;
            case 'CHANGE_STATUS':
                //handleDatabaseRequest(type, activeSurvey, updateType, updateData)
                const activeUserMoviesList = JSON.parse(localStorage.getItem('ACTIVE_USER_MOVIES_LIST'));
                const activeSurvey = activeUserMoviesList.filter(item => item.name === e.target.parentElement.querySelector('.survey__cell--name').innerText).pop();
                return handleDatabaseRequest('UPDATE_SURVEY', activeSurvey, 'UPDATE_STATUS', true);
            default:
                break;
        }
    }
    return (
        <div className="survey__cell">
            <b>Nazwa punktu:</b> <p className='survey__cell--name'>{name}</p>
            <b>Data:</b> <p>{date}</p>
            <b>Status:</b>{status ? <><p>Pomiar zakończony</p> <button data-type="SHOW_SURVEY" onClick={handleButtonClick}>Pokaż pomiar</button></> : <><p>W trakcie pomiaru</p> <button data-type="CHANGE_STATUS" onClick={handleButtonClick}>Zakończ pomiar</button></>}

        </div>
    )
}

export default SurveyCell