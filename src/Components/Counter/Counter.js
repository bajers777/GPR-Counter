import React, { useEffect } from 'react';


const Counter = props => {
    const counterKeyShortcut = e => {
        switch (e.code) {
            case 'KeyQ':
                return e.shiftKey ? props.dispatch({ type: 'CAR_PERSONAL', direction: 'LEFT', path: 1 }) : props.dispatch({ type: 'CAR_PERSONAL', direction: 'UPRIGHT', path: 1 });
            case 'KeyW':
                return e.shiftKey ? props.dispatch({ type: 'CAR_DELIVERY', direction: 'LEFT', path: 1 }) : props.dispatch({ type: 'CAR_DELIVERY', direction: 'UPRIGHT', path: 1 });

            case 'KeyE':
                return e.shiftKey ? props.dispatch({ type: 'CAR_W-TRAILER-TRUCK', direction: 'LEFT', path: 1 }) : props.dispatch({ type: 'CAR_W-TRAILER-TRUCK', direction: 'UPRIGHT', path: 1 });

            case 'KeyR':
                return e.shiftKey ? props.dispatch({ type: 'CAR_TRAILER-TRUCK', direction: 'LEFT', path: 1 }) : props.dispatch({ type: 'CAR_TRAILER-TRUCK', direction: 'UPRIGHT', path: 1 });

            case 'KeyT':
                return e.shiftKey ? props.dispatch({ type: 'CAR_TOURING', direction: 'LEFT', path: 1 }) : props.dispatch({ type: 'CAR_TOURING', direction: 'UPRIGHT', path: 1 });

            case 'KeyY':
                return e.shiftKey ? props.dispatch({ type: 'CAR_TRACTOR', direction: 'LEFT', path: 1 }) : props.dispatch({ type: 'CAR_TRACTOR', direction: 'UPRIGHT', path: 1 });

            case 'KeyU':
                return props.dispatch({ type: 'CAR_PERSONAL', direction: 'RIGHT', path: 1 });

            case 'KeyI':
                return props.dispatch({ type: 'CAR_DELIVERY', direction: 'RIGHT', path: 1 });

            case 'KeyO':
                return props.dispatch({ type: 'CAR_W-TRAILER-TRUCK', direction: 'RIGHT', path: 1 });

            case 'KeyP':
                return props.dispatch({ type: 'CAR_TRAILER-TRUCK', direction: 'RIGHT', path: 1 });

            case 'BracketLeft':
                return props.dispatch({ type: 'CAR_TOURING', direction: 'RIGHT', path: 1 });

            case 'BracketRight':
                return props.dispatch({ type: 'CAR_TRACTOR', direction: 'RIGHT', path: 1 });

            //PATH 2 - A S D F G H
            case 'KeyA':
                return e.shiftKey ? props.dispatch({ type: 'CAR_PERSONAL', direction: 'LEFT', path: 2 }) : props.dispatch({ type: 'CAR_PERSONAL', direction: 'UPRIGHT', path: 2 });

            case 'KeyS':
                return e.shiftKey ? props.dispatch({ type: 'CAR_DELIVERY', direction: 'LEFT', path: 2 }) : props.dispatch({ type: 'CAR_DELIVERY', direction: 'UPRIGHT', path: 2 });

            case 'KeyD':
                return e.shiftKey ? props.dispatch({ type: 'CAR_W-TRAILER-TRUCK', direction: 'LEFT', path: 2 }) : props.dispatch({ type: 'CAR_W-TRAILER-TRUCK', direction: 'UPRIGHT', path: 2 });

            case 'KeyF':
                return e.shiftKey ? props.dispatch({ type: 'CAR_TRAILER-TRUCK', direction: 'LEFT', path: 2 }) : props.dispatch({ type: 'CAR_TRAILER-TRUCK', direction: 'UPRIGHT', path: 2 });

            case 'KeyG':
                return e.shiftKey ? props.dispatch({ type: 'CAR_TOURING', direction: 'LEFT', path: 2 }) : props.dispatch({ type: 'CAR_TOURING', direction: 'UPRIGHT', path: 2 });

            case 'KeyH':
                return e.shiftKey ? props.dispatch({ type: 'CAR_TRACTOR', direction: 'LEFT', path: 2 }) : props.dispatch({ type: 'CAR_TRACTOR', direction: 'UPRIGHT', path: 2 });

            case 'KeyJ':
                return props.dispatch({ type: 'CAR_PERSONAL', direction: 'RIGHT', path: 2 });

            case 'KeyK':
                return props.dispatch({ type: 'CAR_DELIVERY', direction: 'RIGHT', path: 2 });

            case 'KeyL':
                return props.dispatch({ type: 'CAR_W-TRAILER-TRUCK', direction: 'RIGHT', path: 2 });

            case 'Semicolon':
                return props.dispatch({ type: 'CAR_TRAILER-TRUCK', direction: 'RIGHT', path: 2 });

            case 'Quote':
                return props.dispatch({ type: 'CAR_TOURING', direction: 'RIGHT', path: 2 });

            case 'Backslash':
                return props.dispatch({ type: 'CAR_TRACTOR', direction: 'RIGHT', path: 2 });

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
        <div>
            Counter working....
        </div>
    )
}

export default Counter
