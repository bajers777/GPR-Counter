import React, { useContext, useState } from 'react';
import { SidebarCtx } from '../../../contexts/sidebar/SidebarContext';
import { postData } from '../../../firebase';
import './Navbar.scss';

const Navbar = props => {
    const { intervalSurvey, setIntervalSurvey, surveyResult, setSurveyResult, setSurveySpotStatus, currentUser } = props;
    const [intervalCounter, setIntervalCounter] = useState(0);
    const [hourCounter, setHourCounter] = useState(1);
    const [isActiveInterval, setActiveInterval] = useState(true);
    const { setSidebarActiveStatus } = useContext(SidebarCtx);
    const handleEndInterval = () => {
        const intervalBase = [':00 - :15', ':15 - :30', ':30 - :45', ':45 - 00'];
        localStorage.setItem('ACTIVE_INTERVAL', intervalBase[intervalCounter])
        props.handleCounterAction('END_INTERVAL');
        return intervalCounter < 3 ? setIntervalCounter(prevState => prevState + 1) : (setIntervalCounter(0), setActiveInterval(false));
    }

    const handleEndHour = () => {
        let hourId;
        setSurveyResult(prevState => {
            prevState.length ? hourId = [...prevState].map(item => item.hourId).pop() + 1 : hourId = 1;
            const countedHour = [...prevState, { hourId, survey: intervalSurvey }];
            setHourCounter(hourCounter + 1);
            return countedHour;
        });
        setIntervalSurvey([]);
        setActiveInterval(true);
        localStorage.removeItem('INTERVAL_SURVEY');
        localStorage.removeItem('ACTIVE_INTERVAL');
    }

    const handleEndSurvey = () => {
        const activeInterval = localStorage.getItem('ACTIVE_INTERVAL');
        if (activeInterval) {
            alert('Musisz zakończyć rozpoczętą godzinę aby wysłać pomiar. Pamiętaj aby po zakończonym pomiarze (wszystkie godziny) zmienić status filmu w zakładce "Moje pomiary"');
        }
        else {
            // postData(type, activeSurvey, updateType, updateData)
            postData('UPDATE_VALUE', props.activeSurvey, surveyResult, props.currentUser.userShortName);
            props.setActiveSurvey([]);
            setSurveyResult([]);
            setSurveySpotStatus(false);
            props.setUpdatedStatus(prevState => !prevState);
            setSidebarActiveStatus(true);
            return localStorage.setItem('isCounterActive', false);
        }
    }

    return (
        <div className='navbar'>
            {isActiveInterval ? <button onClick={handleEndInterval} className='primary-btn'>Zakończ interwał</button> : <button className='inactive'>Zakończ interwał</button>}
            {!isActiveInterval ? <button onClick={handleEndHour} className='primary-btn'>Zakończ godzinę</button> : <button className='inactive'>Zakończ godzinę</button>}

            <button className='primary-btn' onClick={handleEndSurvey}>Zakończ pomiar</button>
        </div>
    );
};

export default Navbar;
