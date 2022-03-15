import React, { useEffect, useState } from 'react';
import PrivateRoutes from './components/routes/PrivateRoutes';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//routes
import PublicRoutes from './components/routes/PublicRoutes';
//components
import Sidebar from './components/navigation/sidebar/Sidebar';
import Display from './components/counter/Display';
import Login from './pages/Login';
//Contexts
import ModalContext from './contexts/modal/ModalContext';
import SidebarContext from './contexts/sidebar/SidebarContext';
import AuthContext from './contexts/auth/AuthContext';
//CSS
import './styles/style.scss';

const App = () => {
  return (
    <Router>
      <AuthContext>
        <Routes>
          <Route
            path='/'
            exact
            element={<Login />}
          />
          <Route
            path='/counter-app'
            element={<PrivateRoutes />}
          />
        </Routes>
      </AuthContext>
    </Router>

  )
}
export default App;