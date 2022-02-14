import React from 'react';
const SidebarPill = props => {
    return (
        <>
            <button onClick={props.handleNavPillButton} data-type={props.dataType} className="sidebar__pill" ><img src={props.imgSrc} alt="" /><b>{props.pillName}</b></button >
        </>
    );
};

export default SidebarPill;
