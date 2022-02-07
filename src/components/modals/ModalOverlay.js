import React, { useContext } from 'react';
import { ModalCtx } from '../../contexts/modal/ModalContext';

const ModalOverlay = props => {
    const [isActive, setActive] = useContext(ModalCtx);
    return (
        <div onClick={() => setActive(prevState => !prevState)} className={`modal-overlay ${isActive ? '' : 'hidden'}`}>{props.children}</div>
    )
}

export default ModalOverlay;