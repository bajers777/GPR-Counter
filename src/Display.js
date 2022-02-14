import React, { useContext, useEffect } from 'react';
import { ActivePillCtx } from './contexts/sidebar/ActivePillContext';
import CounterApp from './components/counter/CounterApp';
import Survey from './components/surveys/Survey';
import Movies from './components/movies/Movies';
import Request from './components/request/Request';
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
                return <Request />
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
