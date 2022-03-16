import React, { useState } from "react";


export const ModalCtx = React.createContext();

const ModalContext = props => {
    const [isActiveModal, setActiveModal] = useState(false);
    const [modalData, setModalData] = useState({ type: null });

    const handleModalVisibility = e => {
        const type = e.currentTarget.getAttribute('data-type');
        if (type === 'survey-result') {
            const currentTarget = e.currentTarget.parentElement.parentElement.querySelector('.survey__row--name').innerText;

            setModalData({
                type,
                activeItem: currentTarget
            })
        } else {
            setModalData({ type });
        }
        setActiveModal(true);
    }
    const value = {
        isActiveModal,
        setActiveModal,
        modalData,
        setModalData,
        handleModalVisibility
    }
    return (
        <>
            <ModalCtx.Provider
                value={value}
            >
                {props.children}
            </ModalCtx.Provider>
        </>
    );
};

export default ModalContext;
