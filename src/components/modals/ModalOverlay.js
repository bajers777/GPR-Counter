import React, { useContext } from 'react';
import ReactDOM from 'react-dom'
import Keyshortcuts from './Keyshortcuts';
import SurveyResult from './SurveyResult';
import { ModalCtx } from '../../contexts/modal/ModalContext';

const ModalOverlay = props => {
    const [isActiveModal, setActiveModal, modalData, setModalData] = useContext(ModalCtx);

    const showModal = () => {
        switch (modalData.type) {
            case 'keyshortcuts':
                return <Keyshortcuts />
            case 'survey-result':
                return <SurveyResult modalData={props.activeUserMoviesList.filter(item => item.name === modalData.activeItem).pop()} />
            default:
                break;
        }
    }
    return ReactDOM.createPortal(
        <div className={isActiveModal ? 'modal' : 'hidden'}>
            {isActiveModal && <><div onClick={() => setActiveModal(false)} className='modal__overlay'></div>{showModal()}</>}
        </div>

        , document.getElementById('modal-root'))

}

export default ModalOverlay;
//<div className="modal-overlay"><Keyshortcuts /></div>