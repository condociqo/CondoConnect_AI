import React, { useState } from 'react';
import LoginCaseta from './screens/LoginCaseta';
import DashboardAdmin from './screens/DashboardAdmin';
import DashboardGuardia from './screens/DashboardGuardia';
import DashboardFundadorSaaS from './screens/founder/DashboardFundadorSaaS';

export default function App() {
  const [usuarioAutenticado, setUsuarioAutenticado] = useState(null);
  const [rolUsuario, setRolUsuario] = useState('');

  const iniciarSesion = (rol) => {
    setUsuarioAutenticado(true);
    setRolUsuario(rol);
  };

  if (!usuarioAutenticado) {
    return <LoginCaseta onLogin={iniciarSesion} />;
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#F1F5F9' }}>
      {rolUsuario === 'Guardia' && <DashboardGuardia />}
      {rolUsuario === 'Admin' && <DashboardAdmin />}
      {rolUsuario === 'Fundador' && <DashboardFundadorSaaS />}
      
      <button 
        onClick={() => setUsuarioAutenticado(null)}
        style={{ position: 'fixed', bottom: 20, right: 20, padding: '10px 20px', backgroundColor: '#EF4444', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
        Cerrar Sesión
      </button>
    </div>
  );
}
