import React from 'react';
const SidebarPill = props => {
    return (
        <div className="sidebar__pill">
            <img src={props.imgSrc} alt="" />
            <b>{props.pillName}</b>
        </div>
    );
};

export default SidebarPill;
