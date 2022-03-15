import React, { useContext, useEffect, useState } from 'react';
//components
import Navbar from './navigation/Navbar';
import Result from './result/Result';

const Counter = props => {
    const { handleCounterAction } = props;
    const data = [...props.intervalSurvey];
    const counterKeyShortcut = e => {
        switch (e.code) {
            case 'KeyQ':
                return e.shiftKey ? handleCounterAction('CAR_PERSONAL', 'LEFT', 1) : handleCounterAction('CAR_PERSONAL', 'UPRIGHT', 1);

            case 'KeyW':
                return e.shiftKey ? handleCounterAction('CAR_DELIVERY', 'LEFT', 1) : handleCounterAction('CAR_DELIVERY', 'UPRIGHT', 1);

            case 'KeyE':
                return e.shiftKey ? handleCounterAction('CAR_W-TRAILER-TRUCK', 'LEFT', 1) : handleCounterAction('CAR_W-TRAILER-TRUCK', 'UPRIGHT', 1);

            case 'KeyR':
                return e.shiftKey ? handleCounterAction('CAR_TRAILER-TRUCK', 'LEFT', 1) : handleCounterAction('CAR_TRAILER-TRUCK', 'UPRIGHT', 1);

            case 'KeyT':
                return e.shiftKey ? handleCounterAction('CAR_TOURING', 'LEFT', 1) : handleCounterAction('CAR_TOURING', 'UPRIGHT', 1);

            case 'Digit1':
                return e.shiftKey ? handleCounterAction('MOTORCYCLIST', 'LEFT', 1) : handleCounterAction('MOTORCYCLIST', 'UPRIGHT', 1);

            case 'Digit2':
                return e.shiftKey ? handleCounterAction('CYCLIST', 'LEFT', 1) : handleCounterAction('CYCLIST', 'UPRIGHT', 1);

            case 'Digit3':
                return e.shiftKey ? handleCounterAction('CAR_TRACTOR', 'LEFT', 1) : handleCounterAction('CAR_TRACTOR', 'UPRIGHT', 1);

            case 'KeyY':
                return handleCounterAction('CAR_PERSONAL', 'RIGHT', 1);

            case 'KeyU':
                return handleCounterAction('CAR_DELIVERY', 'RIGHT', 1);

            case 'KeyI':
                return handleCounterAction('CAR_W-TRAILER-TRUCK', 'RIGHT', 1);

            case 'KeyO':
                return handleCounterAction('CAR_TRAILER-TRUCK', 'RIGHT', 1);

            case 'KeyP':
                return handleCounterAction('CAR_TOURING', 'RIGHT', 1);

            case 'Digit4':
                return e.shiftKey ? handleCounterAction('MOTORCYCLIST', 'LEFT', 1) : handleCounterAction('MOTORCYCLIST', 'UPRIGHT', 1);

            case 'Digit5':
                return e.shiftKey ? handleCounterAction('CYCLIST', 'LEFT', 1) : handleCounterAction('CYCLIST', 'UPRIGHT', 1);

            case 'Digit6':
                return e.shiftKey ? handleCounterAction('CAR_TRACTOR', 'LEFT', 1) : handleCounterAction('CAR_TRACTOR', 'UPRIGHT', 1);

            //PATH 2 - A S D F G H
            case 'KeyA':
                return e.shiftKey ? handleCounterAction('CAR_PERSONAL', 'LEFT', 1) : handleCounterAction('CAR_PERSONAL', 'UPRIGHT', 2);

            case 'KeyS':
                return e.shiftKey ? handleCounterAction('CAR_DELIVERY', 'LEFT', 1) : handleCounterAction('CAR_DELIVERY', 'UPRIGHT', 2);

            case 'KeyD':
                return e.shiftKey ? handleCounterAction('CAR_W-TRAILER-TRUCK', 'LEFT', 1) : handleCounterAction('CAR_W-TRAILER-TRUCK', 'UPRIGHT', 2);

            case 'KeyF':
                return e.shiftKey ? handleCounterAction('CAR_TRAILER-TRUCK', 'LEFT', 1) : handleCounterAction('CAR_TRAILER-TRUCK', 'UPRIGHT', 2);

            case 'KeyG':
                return e.shiftKey ? handleCounterAction('CAR_TOURING', 'LEFT', 1) : handleCounterAction('CAR_TOURING', 'UPRIGHT', 2);

            case 'KeyZ':
                return e.shiftKey ? handleCounterAction('MOTORCYCLIST', 'LEFT', 1) : handleCounterAction('MOTORCYCLIST', 'UPRIGHT', 2);

            case 'KeyX':
                return e.shiftKey ? handleCounterAction('CYCLIST', 'LEFT', 1) : handleCounterAction('CYCLIST', 'UPRIGHT', 2);

            case 'KeyC':
                return e.shiftKey ? handleCounterAction('CAR_TRACTOR', 'LEFT', 1) : handleCounterAction('CAR_TRACTOR', 'UPRIGHT', 2);

            case 'KeyH':
                return handleCounterAction('CAR_PERSONAL', 'RIGHT', 2);

            case 'KeyJ':
                return handleCounterAction('CAR_DELIVERY', 'RIGHT', 2);

            case 'KeyK':
                return handleCounterAction('CAR_W-TRAILER-TRUCK', 'RIGHT', 2);

            case 'KeyL':
                return handleCounterAction('CAR_TRAILER-TRUCK', 'RIGHT', 2);

            case 'Semicolon':
                return handleCounterAction('CAR_TOURING', 'RIGHT', 2);

            case 'KeyV':
                return e.shiftKey ? handleCounterAction('MOTORCYCLIST', 'LEFT', 1) : handleCounterAction('MOTORCYCLIST', 'UPRIGHT', 2);

            case 'KeyB':
                return e.shiftKey ? handleCounterAction('CYCLIST', 'LEFT', 1) : handleCounterAction('CYCLIST', 'UPRIGHT', 2);

            case 'KeyN':
                return e.shiftKey ? handleCounterAction('CAR_TRACTOR', 'LEFT', 1) : handleCounterAction('CAR_TRACTOR', 'UPRIGHT', 2);

            default:
                break;
        }
    }
    useEffect(() => {
        window.addEventListener('keydown', counterKeyShortcut)
        return () => {
            window.removeEventListener('keydown', counterKeyShortcut);
        }
    });

    return (
        <>
            <Navbar {...props} />
            <Result data={data === null ? [] : data} />
        </>
    )
}

export default Counter
