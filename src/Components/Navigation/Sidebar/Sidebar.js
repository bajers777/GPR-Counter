import React, { useContext } from 'react';
//Components
import SidebarPill from './SidebarPill';
//Assets
import { CounterIcon, SurveyIcon, FilmIcon, RegistrationIcon } from '../../../assets/icons/icons';
//Contexts
import { ActivePillCtx } from '../../../contexts/sidebar/ActivePillContext';

const Sidebar = props => {
  const sidebarPills = ['Aplikacja', 'Pomiary', 'Filmy', 'Zgłoszenie'];
  const activePillType = ['app', 'survey', 'movies', 'request'];
  const icons = [CounterIcon, SurveyIcon, FilmIcon, RegistrationIcon];
  const [activePill, setActivePill] = useContext(ActivePillCtx);

  const handleNavPillButton = item => {
    const key = item.currentTarget.getAttribute('data-type');
    return setActivePill(key);
  }

  return (
    <div className="sidebar">
      <h2>GPR - Counter</h2>
      {
        sidebarPills.map((item, index) => <SidebarPill handleNavPillButton={handleNavPillButton} dataType={activePillType[index]} key={activePillType[index]} pillName={item} imgSrc={icons[index]} />)


      }

    </div>
  );
};

export default Sidebar;

