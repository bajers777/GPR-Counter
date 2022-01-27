import React, { useContext, useState } from 'react';
import NavbarButton from '../../UI/NavbarButton';
import { IntervalCtx } from '../../Contexts/Interval/IntervalContext';
import { SurveyCtx } from '../../Contexts/SurveyContext/SurveyContext';


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
        <div>
            <NavbarButton onClick={handleSetInterval}>Zakończ interwał</NavbarButton>
        </div>
    );
};

export default Navbar;
