import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from '../views/LandingPage/LandingPage';
import Dashboard from '../views/Dashboard/Dashboard';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* Ruta de la Landing Page Principal */}
        <Route path="/" element={<LandingPage />} />
        
        {/* Ruta del Software (Lo que hoy se ve negro) */}
        <Route path="/portal" element={<Dashboard />} />
        
        {/* Ruta de Seguridad (Login) */}
        <Route path="/login" element={<div>Pantalla de Login</div>} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
