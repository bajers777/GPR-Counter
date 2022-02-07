import React, { useState } from "react";


export const ModalCtx = React.createContext();


const ModalContext = props => {
    const [isActive, setActive] = useState(false);
    return (
        <>
            <ModalCtx.Provider
                value={[isActive, setActive]}
            >
                {props.children}
            </ModalCtx.Provider>
        </>
    );
};

export default ModalContext;
