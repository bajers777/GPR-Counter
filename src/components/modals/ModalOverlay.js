import React, { useContext } from 'react';
import ReactDOM from 'react-dom'
import Keyshortcuts from './Keyshortcuts';
import SurveyResult from './SurveyResult/SurveyResult';
import { ModalCtx } from '../../contexts/modal/ModalContext';

const ModalOverlay = props => {
    const [isActiveModal, setActiveModal, modalData, setModalData] = useContext(ModalCtx);
    const modalOverlay = <div onClick={() => setActiveModal(false)} className="modal-overlay"></div>;

    const showModal = () => {
        switch (modalData.type) {
            case 'keyshortcuts':
                return <Keyshortcuts />
            case 'survey-result':
                return <SurveyResult modalData={modalData.activeSurvey} />
            default:
                break;
        }
    }
    return ReactDOM.createPortal(
        <>

            {isActiveModal && showModal()}
            {isActiveModal && modalOverlay}
        </>, document.getElementById('modal'))

}

export default ModalOverlay;
//<div className="modal-overlay"><Keyshortcuts /></div>