import React, { useState } from 'react';
import LoginCaseta from './screens/LoginCaseta';
import DashboardAdmin from './screens/DashboardAdmin';
import MarinaAssistant from './screens/MarinaAssistant';

export default function App() {
  const [rolUsuario, setRolUsuario] = useState(null);

  // Función maestra para cerrar sesión y regresar al login
  const cerrarSesion = () => {
    setRolUsuario(null);
  };

  if (!rolUsuario) {
    return <LoginCaseta onLogin={setRolUsuario} />;
  }

  return (
    <>
      {rolUsuario === 'Admin' && <DashboardAdmin onLogout={cerrarSesion} />}
      {rolUsuario === 'Guardia' && <div style={{padding:'50px', color:'white'}}><h2>Panel Guardia (En desarrollo)</h2><button onClick={cerrarSesion} style={{padding:'10px', background:'#ef4444', color:'white', border:'none'}}>⬅ Regresar</button></div>}
      <MarinaAssistant usuario={rolUsuario} />
    </>
  );
}
