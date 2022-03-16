import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//routes
//components
import PrivateRoutes from './components/routes/PrivateRoutes';
import Login from './pages/Login/Login';
//Contexts
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