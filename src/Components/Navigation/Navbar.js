import React from 'react';
import NavbarButton from '../../UI/NavbarButton';

const Navbar = props => {
    const handleSetInterval = () => {
        const intervalBase = [':00 - :15', ':15 - :30', ':30 - :45', ':45 - 00'];
        const interval = intervalBase[props.intervalCounter];
        const data = [...props.data];
        props.setInterval(interval);
        props.setIntervalSurvey(prevState => {
            return [{ interval, survey: data }, ...prevState]
        });
        return props.intervalCounter < 4 ? props.setIntervalCounter(prevState => prevState + 1) : props.setIntervalCounter(0);
    }
    return (
        <div>
            <NavbarButton onClick={handleSetInterval}>Zakończ interwał</NavbarButton>
        </div>
    );
};

export default Navbar;
