import React, { useContext } from 'react';
import { ActivePillCtx } from './contexts/sidebar/ActivePillContext';
import CounterApp from './components/counter/CounterApp';
import Survey from './components/surveys/Survey';
import Movies from './components/movies/Movies';
const Display = props => {
    const [activePill, setActivePill] = useContext(ActivePillCtx);
    const handleDisplayShow = () => {
        switch (activePill) {
            case 'app':
                return <CounterApp />
            case 'survey':
                return <Survey />
            case 'movies':
                return <Movies />
            case 'request':
                props.picker.open();
                break;
            default:
                break;
        }
    }
    return (
        <>
            {handleDisplayShow()}
        </>
    );
};

export default Display;
