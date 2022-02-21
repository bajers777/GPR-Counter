import React, { useContext } from 'react';
import { getData, postData } from '../../firebase';
import { ModalCtx } from '../../contexts/modal/ModalContext';
import ModalOverlay from '../modals/ModalOverlay';

const SurveyCell = props => {

    const { name, date, status } = props;
    const [isActiveModal, setActiveModal, modalData, setModalData, handleModalVisibility] = useContext(ModalCtx);

    const handleChangeStatusButton = e => {
        //postData(type, activeSurvey, updateType, updateData)
        const activeUserMoviesList = JSON.parse(localStorage.getItem('ACTIVE_USER_MOVIES_LIST'));
        const activeSurvey = activeUserMoviesList.filter(item => item.name === e.target.parentElement.querySelector('.survey__cell--name').innerText).pop();
        // return postData('UPDATE_STATUS', activeSurvey, true);
    }
    return (
        <div className="survey__cell">
            <b>Nazwa punktu:</b> <p className='survey__cell--name'>{name}</p>
            <b>Data:</b> <p>{date}</p>
            <b>Status:</b>{status ? <><p>Pomiar zakończony</p> <button data-type='survey-result' onClick={handleModalVisibility}>Pokaż pomiar</button></> : <><p>W trakcie pomiaru</p> <button onClick={handleChangeStatusButton}>Zakończ pomiar</button></>}
        </div>
    )
}


export default SurveyCell