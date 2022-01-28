import React, { useContext, useEffect, useState } from 'react';
import Shortcuts from './Shortcuts';
import TimeCounter from './TimeCounter';

import { IntervalCtx } from '../../Contexts/Interval/IntervalContext';
import { SurveyCtx } from '../../Contexts/SurveyContext/SurveyContext';
import './Counter.css';

const Counter = props => {


    const [interval] = useContext(IntervalCtx);
    const [intervalSurvey, setIntervalSurvey, surveyCounter, setSurveyCounter, carSurveyDefault] = useContext(SurveyCtx);
    const addToSurvey = (type, direction, path) => {
        const data = [...carSurveyDefault];
        if (type === 'END_SURVEY') {
            setIntervalSurvey(prevState => {
                return [...prevState, { interval, survey: [...data] }];
            });
        }
        else {
            data.filter(itemPath => itemPath.path === path).map(itemSurvey => itemSurvey.survey.filter(itemType => itemType.type === type)).pop().map(itemDirections => itemDirections.directions.filter(itemDirection => itemDirection.direction === direction)).pop().map(itemAmmount => itemAmmount.ammount++);
        }
    }
    const counterKeyShortcut = e => {
        switch (e.code) {
            case 'KeyQ':
                return e.shiftKey ? addToSurvey('CAR_PERSONAL', 'LEFT', 1) : addToSurvey('CAR_PERSONAL', 'UPRIGHT', 1);

            case 'KeyW':
                return e.shiftKey ? addToSurvey('CAR_DELIVERY', 'LEFT', 1) : addToSurvey('CAR_DELIVERY', 'UPRIGHT', 1);

            case 'KeyE':
                return e.shiftKey ? addToSurvey('CAR_W-TRAILER-TRUCK', 'LEFT', 1) : addToSurvey('CAR_W-TRAILER-TRUCK', 'UPRIGHT', 1);

            case 'KeyR':
                return e.shiftKey ? addToSurvey('CAR_TRAILER-TRUCK', 'LEFT', 1) : addToSurvey('CAR_TRAILER-TRUCK', 'UPRIGHT', 1);

            case 'KeyT':
                return e.shiftKey ? addToSurvey('CAR_TOURING', 'LEFT', 1) : addToSurvey('CAR_TOURING', 'UPRIGHT', 1);

            case 'Digit1':
                return e.shiftKey ? addToSurvey('MOTORCYCLIST', 'LEFT', 1) : addToSurvey('MOTORCYCLIST', 'UPRIGHT', 1);

            case 'Digit2':
                return e.shiftKey ? addToSurvey('CYCLIST', 'LEFT', 1) : addToSurvey('CYCLIST', 'UPRIGHT', 1);

            case 'Digit3':
                return e.shiftKey ? addToSurvey('CAR_TRACTOR', 'LEFT', 1) : addToSurvey('CAR_TRACTOR', 'UPRIGHT', 1);

            case 'KeyY':
                return addToSurvey('CAR_PERSONAL', 'RIGHT', 1);

            case 'KeyU':
                return addToSurvey('CAR_DELIVERY', 'RIGHT', 1);

            case 'KeyI':
                return addToSurvey('CAR_W-TRAILER-TRUCK', 'RIGHT', 1);

            case 'KeyO':
                return addToSurvey('CAR_TRAILER-TRUCK', 'RIGHT', 1);

            case 'KeyP':
                return addToSurvey('CAR_TOURING', 'RIGHT', 1);

            case 'Digit4':
                return e.shiftKey ? addToSurvey('MOTORCYCLIST', 'LEFT', 1) : addToSurvey('MOTORCYCLIST', 'UPRIGHT', 1);

            case 'Digit5':
                return e.shiftKey ? addToSurvey('CYCLIST', 'LEFT', 1) : addToSurvey('CYCLIST', 'UPRIGHT', 1);

            case 'Digit6':
                return e.shiftKey ? addToSurvey('CAR_TRACTOR', 'LEFT', 1) : addToSurvey('CAR_TRACTOR', 'UPRIGHT', 1);

            //PATH 2 - A S D F G H
            case 'KeyA':
                return e.shiftKey ? addToSurvey('CAR_PERSONAL', 'LEFT', 1) : addToSurvey('CAR_PERSONAL', 'UPRIGHT', 2);

            case 'KeyS':
                return e.shiftKey ? addToSurvey('CAR_DELIVERY', 'LEFT', 1) : addToSurvey('CAR_DELIVERY', 'UPRIGHT', 2);

            case 'KeyD':
                return e.shiftKey ? addToSurvey('CAR_W-TRAILER-TRUCK', 'LEFT', 1) : addToSurvey('CAR_W-TRAILER-TRUCK', 'UPRIGHT', 2);

            case 'KeyF':
                return e.shiftKey ? addToSurvey('CAR_TRAILER-TRUCK', 'LEFT', 1) : addToSurvey('CAR_TRAILER-TRUCK', 'UPRIGHT', 2);

            case 'KeyG':
                return e.shiftKey ? addToSurvey('CAR_TOURING', 'LEFT', 1) : addToSurvey('CAR_TOURING', 'UPRIGHT', 2);

            case 'KeyZ':
                return e.shiftKey ? addToSurvey('MOTORCYCLIST', 'LEFT', 1) : addToSurvey('MOTORCYCLIST', 'UPRIGHT', 2);

            case 'KeyX':
                return e.shiftKey ? addToSurvey('CYCLIST', 'LEFT', 1) : addToSurvey('CYCLIST', 'UPRIGHT', 2);

            case 'KeyC':
                return e.shiftKey ? addToSurvey('CAR_TRACTOR', 'LEFT', 1) : addToSurvey('CAR_TRACTOR', 'UPRIGHT', 2);

            case 'KeyH':
                return addToSurvey('CAR_PERSONAL', 'RIGHT', 2);

            case 'KeyJ':
                return addToSurvey('CAR_DELIVERY', 'RIGHT', 2);

            case 'KeyK':
                return addToSurvey('CAR_W-TRAILER-TRUCK', 'RIGHT', 2);

            case 'KeyL':
                return addToSurvey('CAR_TRAILER-TRUCK', 'RIGHT', 2);

            case 'Semicolon':
                return addToSurvey('CAR_TOURING', 'RIGHT', 2);

            case 'KeyV':
                return e.shiftKey ? addToSurvey('MOTORCYCLIST', 'LEFT', 1) : addToSurvey('MOTORCYCLIST', 'UPRIGHT', 2);

            case 'KeyB':
                return e.shiftKey ? addToSurvey('CYCLIST', 'LEFT', 1) : addToSurvey('CYCLIST', 'UPRIGHT', 2);

            case 'KeyN':
                return e.shiftKey ? addToSurvey('CAR_TRACTOR', 'LEFT', 1) : addToSurvey('CAR_TRACTOR', 'UPRIGHT', 2);

            default:
                break;
        }
    }
    //Event listener active
    useEffect(() => {
        window.addEventListener('keydown', counterKeyShortcut)
        return () => {
            window.removeEventListener('keydown', counterKeyShortcut);
        }
    });

    //Reset to default value and start counting from begining

    useEffect(() => {
        interval ? addToSurvey('END_SURVEY') : console.log(interval);
    }, [interval]);

    return (
        <>
        </>
    )
}

export default Counter
