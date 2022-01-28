import React from 'react';
import SidebarPill from './SidebarPill';
import { CounterIcon, SurveyIcon, FilmIcon, RegistrationIcon } from '../../../assets/icons/icons';
const Sidebar = () => {
  const sidebarPills = ['Aplikacja', 'Pomiary', 'Filmy', 'Zgłoszenie'];
  const icons = [CounterIcon, SurveyIcon, FilmIcon, RegistrationIcon];
  return (
    <div className="sidebar">
      <h2>GPR - Counter</h2>
      {sidebarPills.map((item, index) => <SidebarPill key={item} pillName={item} imgSrc={icons[index]} />)}
    </div>
  );
};

export default Sidebar;

