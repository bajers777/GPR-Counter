import React, { useContext, useState } from 'react';
import { IntervalCtx } from '../../../contexts/interval/IntervalContext';
import { SurveyCtx } from '../../../contexts/survey/SurveyContext';


const Navbar = props => {
    const [intervalCounter, setIntervalCounter] = useState(0);
    const [interval, setInterval] = useContext(IntervalCtx);
    const [intervalSurvey, setIntervalSurvey] = useContext(SurveyCtx);

    const handleSetInterval = () => {
        const intervalBase = [':00 - :15', ':15 - :30', ':30 - :45', ':45 - 00'];
        const interval = intervalBase[intervalCounter];
        setInterval(interval);
        return intervalCounter < 4 ? setIntervalCounter(prevState => prevState + 1) : setIntervalCounter(0);
    }
    return (
        <div className='navbar'>
            <button className='primary-btn' onClick={handleSetInterval}>Zakończ interwał</button>
            <button className='inactive' onClick={() => alert('Przycisk nieaktywny!')}>Zakończ godzinę</button>
        </div>
    );
};

export default Navbar;
