import React, { useState, useContext, useEffect } from 'react';
//Components
import SidebarPill from './SidebarPill';
//Assets
import { SidebarCounter, SidebarSurveys } from '../../../assets/icons/icons';
//Contexts
import { SidebarCtx } from '../../../contexts/sidebar/SidebarContext';
import './Sidebar.scss';

const Sidebar = props => {
  const { isSidebarActive, setActivePill } = useContext(SidebarCtx);
  const sidebarControl = JSON.parse(localStorage.getItem('isCounterActive'));
  const [active, setActive] = useState('app');

  const handleNavPillButton = item => {
    const key = item.currentTarget.getAttribute('data-type');
    setActive(key);
    item.target.classList.add('active');
    return setActivePill(key);
  }
  return (
    <>
      {isSidebarActive && <nav className="sidebar">
        <ul>
          <SidebarPill
            handleNavPillButton={handleNavPillButton}
            dataType={'app'}
            active={active}
            icon={<SidebarCounter />} />

          <SidebarPill
            handleNavPillButton={handleNavPillButton}
            dataType={'survey'}
            active={active}
            icon={<SidebarSurveys />} />

        </ul>
      </nav>}
    </>
  );
};

export default Sidebar;

