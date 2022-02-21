import React, { useContext, useState } from 'react';
import { IntervalCtx } from '../../../contexts/interval/IntervalContext';
import { SurveyCtx } from '../../../contexts/survey/SurveyContext';
import { postData } from '../../../firebase';

const Navbar = props => {
    const [intervalCounter, setIntervalCounter] = useState(0);
    const [hourCounter, setHourCounter] = useState(1);
    const [interval, setInterval, isActiveInterval, setActiveInterval] = useContext(IntervalCtx);
    const [intervalSurvey, setIntervalSurvey, surveyCounter, setSurveyCounter, carSurveyDefault, surveyResult, setSurveyResult, surveySpot, setSurveySpot, isSurveySpotSet, setSurveySpotStatus] = useContext(SurveyCtx);

    const handleEndInterval = () => {
        const intervalBase = [':00 - :15', ':15 - :30', ':30 - :45', ':45 - 00'];
        localStorage.setItem('ACTIVE_INTERVAL', intervalBase[intervalCounter])
        props.handleCounterAction('END_INTERVAL');
        return intervalCounter < 3 ? setIntervalCounter(prevState => prevState + 1) : (setIntervalCounter(0), setActiveInterval(false));
    }

    const handleEndHour = () => {
        const interval = JSON.parse(localStorage.getItem('INTERVAL_SURVEY'));
        setSurveyResult(prevState => {
            const countedHour = [...prevState, { hourId: hourCounter, survey: interval }];
            // localStorage.setItem('SURVEY_RESULT', JSON.stringify(countedHour));
            localStorage.setItem('ACTIVE_SURVEY', JSON.stringify(countedHour));
            return countedHour;
        });
        setHourCounter(hourCounter + 1);
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
            postData('UPDATE_VALUE', JSON.parse(localStorage.getItem('ACTIVE_ITEM')));
            setSurveySpotStatus(false);
            localStorage.removeItem("ACTIVE_SURVEY");
            return localStorage.removeItem('ACTIVE_ITEM');
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
