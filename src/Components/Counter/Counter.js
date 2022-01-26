import React, { useEffect } from 'react';
import Shortcuts from './Shortcuts';
import TimeCounter from './TimeCounter';
import './Counter.css';

const Counter = props => {
    const addToSurvey = (type, direction, path) => {
        const data = [...props.data]
        data.filter(itemPath => itemPath.path === path).map(itemSurvey => itemSurvey.survey.filter(itemType => itemType.type === type)).pop().map(itemDirections => itemDirections.directions.filter(itemDirection => itemDirection.direction === direction)).pop().map(itemAmmount => itemAmmount.ammount++);

        props.setCarSurvey(data);
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
                return e.shiftKey ? addToSurvey({ type: 'CAR_TOURING', direction: 'LEFT', path: 1 }) : addToSurvey({ type: 'CAR_TOURING', direction: 'UPRIGHT', path: 1 });

            case 'KeyY':
                return e.shiftKey ? addToSurvey({ type: 'CAR_TRACTOR', direction: 'LEFT', path: 1 }) : addToSurvey({ type: 'CAR_TRACTOR', direction: 'UPRIGHT', path: 1 });

            case 'KeyU':
                return addToSurvey({ type: 'CAR_PERSONAL', direction: 'RIGHT', path: 1 });

            case 'KeyI':
                return addToSurvey({ type: 'CAR_DELIVERY', direction: 'RIGHT', path: 1 });

            case 'KeyO':
                return addToSurvey({ type: 'CAR_W-TRAILER-TRUCK', direction: 'RIGHT', path: 1 });

            case 'KeyP':
                return addToSurvey({ type: 'CAR_TRAILER-TRUCK', direction: 'RIGHT', path: 1 });

            case 'BracketLeft':
                return addToSurvey({ type: 'CAR_TOURING', direction: 'RIGHT', path: 1 });

            case 'BracketRight':
                return addToSurvey({ type: 'CAR_TRACTOR', direction: 'RIGHT', path: 1 });

            //PATH 2 - A S D F G H
            case 'KeyA':
                return e.shiftKey ? addToSurvey({ type: 'CAR_PERSONAL', direction: 'LEFT', path: 2 }) : addToSurvey({ type: 'CAR_PERSONAL', direction: 'UPRIGHT', path: 2 });

            case 'KeyS':
                return e.shiftKey ? addToSurvey({ type: 'CAR_DELIVERY', direction: 'LEFT', path: 2 }) : addToSurvey({ type: 'CAR_DELIVERY', direction: 'UPRIGHT', path: 2 });

            case 'KeyD':
                return e.shiftKey ? addToSurvey({ type: 'CAR_W-TRAILER-TRUCK', direction: 'LEFT', path: 2 }) : addToSurvey({ type: 'CAR_W-TRAILER-TRUCK', direction: 'UPRIGHT', path: 2 });

            case 'KeyF':
                return e.shiftKey ? addToSurvey({ type: 'CAR_TRAILER-TRUCK', direction: 'LEFT', path: 2 }) : addToSurvey({ type: 'CAR_TRAILER-TRUCK', direction: 'UPRIGHT', path: 2 });

            case 'KeyG':
                return e.shiftKey ? addToSurvey({ type: 'CAR_TOURING', direction: 'LEFT', path: 2 }) : addToSurvey({ type: 'CAR_TOURING', direction: 'UPRIGHT', path: 2 });

            case 'KeyH':
                return e.shiftKey ? addToSurvey({ type: 'CAR_TRACTOR', direction: 'LEFT', path: 2 }) : addToSurvey({ type: 'CAR_TRACTOR', direction: 'UPRIGHT', path: 2 });

            case 'KeyJ':
                return addToSurvey({ type: 'CAR_PERSONAL', direction: 'RIGHT', path: 2 });

            case 'KeyK':
                return addToSurvey({ type: 'CAR_DELIVERY', direction: 'RIGHT', path: 2 });

            case 'KeyL':
                return addToSurvey({ type: 'CAR_W-TRAILER-TRUCK', direction: 'RIGHT', path: 2 });

            case 'Semicolon':
                return addToSurvey({ type: 'CAR_TRAILER-TRUCK', direction: 'RIGHT', path: 2 });

            case 'Quote':
                return addToSurvey({ type: 'CAR_TOURING', direction: 'RIGHT', path: 2 });

            case 'Backslash':
                return addToSurvey({ type: 'CAR_TRACTOR', direction: 'RIGHT', path: 2 });

            default:
                break;
        }
    }
    useEffect(() => {
        window.addEventListener('keydown', counterKeyShortcut)
        return () => {
            window.removeEventListener('keydown', counterKeyShortcut);
        }
    })
    return (
        <div className='counter'>
            <TimeCounter />
            <Shortcuts />
        </div>
    )
}

export default Counter
