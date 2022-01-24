import React, { useState } from 'react';
import NavbarButton from '../../UI/NavbarButton';

const Navbar = props => {
    const handleSetInterval = () => {
        const interval = [':00 - :15', ':15 - :30', ':30 - :45', ':45 - 00'];
        props.setInterval(interval[props.intervalCounter]);
        props.setIntervalSurvey(props.data.map(item => item));
        props.dispatch('END_SURVEY');
        return props.intervalCounter === 3 ? props.setIntervalCounter(0) : props.setIntervalCounter(props.intervalCounter + 1);
    }
    return (
        <div>
            <NavbarButton onClick={handleSetInterval}>Zakończ interwał</NavbarButton>
        </div>
    );
};

export default Navbar;
