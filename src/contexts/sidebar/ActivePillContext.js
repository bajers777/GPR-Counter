import React, { useState } from "react";


export const ActivePillCtx = React.createContext();


const ActivePillContext = props => {
    const [activePill, setActivePill] = useState('app');

    return (
        <>
            <ActivePillCtx.Provider
                value={[activePill, setActivePill]}
            >
                {props.children}
            </ActivePillCtx.Provider>
        </>
    );
};

export default ActivePillContext;
