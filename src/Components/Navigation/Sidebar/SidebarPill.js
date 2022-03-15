import React from 'react';
const SidebarPill = props => {
    return (
        <li className='sidebar__pill '>
            <button
                onClick={props.handleNavPillButton}
                data-type={props.dataType}
                className={`sidebar-btn ${props.active === props.dataType ? 'active' : ''}`}
            >
                {props.icon}
            </button>
        </li>
    );
};

export default SidebarPill;
