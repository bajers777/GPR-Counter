import React, { useEffect, useState } from "react";


export const SidebarCtx = React.createContext();


const SidebarContext = props => {
    const [activePill, setActivePill] = useState('app');
    const [isSidebarActive, setSidebarActiveStatus] = useState(true);
    useEffect(() => {
        const isActive = JSON.parse(localStorage.getItem('isCounterActive'));
        return isActive ? setSidebarActiveStatus(false) : setSidebarActiveStatus(true);
    }, [])
    const value = { activePill, setActivePill, isSidebarActive, setSidebarActiveStatus }
    return (
        <>
            <SidebarCtx.Provider
                value={value}
            >
                {props.children}
            </SidebarCtx.Provider>
        </>
    );
};

export default SidebarContext;
