import React, { useState } from "react";
import { getData } from "../../firebase";


export const ModalCtx = React.createContext();

const ModalContext = props => {
    const [isActiveModal, setActiveModal] = useState(false);
    const [modalData, setModalData] = useState([]);

    const handleModalVisibility = e => {
        const completedList = JSON.parse(localStorage.getItem('ACTIVE_USER_COMPLETED_LIST'));
        const type = e.target.getAttribute('data-type');
        if (type === 'survey-result') {
            const currentTarget = e.target.parentElement.querySelector('.survey__cell--name').innerText;
            const activeSurvey = completedList.filter(item => item.name === currentTarget).pop();
            setModalData({
                type,
                activeSurvey
            });
        } else {
            setModalData({
                type
            });
        }
        //active item:
        //{status: true, id: '1', survey: Array(0), name: 'Grodzisk #Marszałkowska', date: '01-01-2020'}
        setActiveModal(true);
    }

    return (
        <>
            <ModalCtx.Provider
                value={[isActiveModal, setActiveModal, modalData, setModalData, handleModalVisibility]}
            >
                {props.children}
            </ModalCtx.Provider>
        </>
    );
};

export default ModalContext;
