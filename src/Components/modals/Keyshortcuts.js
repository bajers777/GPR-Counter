import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import ModalOverlay from './ModalOverlay';

import { ModalCtx } from '../../contexts/modal/ModalContext';

import { ShortcutsImage } from '../../assets/img/images';

const Keyshortcuts = () => {
  const [isActive, setActive] = useContext(ModalCtx);
  return (
    <>
      {ReactDOM.createPortal(
        <React.Fragment>
          <ModalOverlay />
          <div className={`modal modal__keyshortcuts ${isActive ? '' : 'hidden'}`}>
            <img src={ShortcutsImage} alt="Skróty klawiszowe" />
          </div>
        </React.Fragment>
        , document.getElementById('modal'))}
    </>
  );
};

export default Keyshortcuts;
