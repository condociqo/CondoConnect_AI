import React, { useState } from 'react';
// Aquí importaremos las 68 pantallas que ya creamos. Por ahora, un ejemplo de las principales:
import LoginCaseta from './screens/LoginCaseta';
import DashboardAdmin from './screens/DashboardAdmin';
import DashboardGuardia from './screens/DashboardGuardia';
import DashboardFundadorSaaS from './screens/founder/DashboardFundadorSaaS';

export default function App() {
  // Estado que controla quién está usando la app
  const [usuarioAutenticado, setUsuarioAutenticado] = useState(null);
  const [rolUsuario, setRolUsuario] = useState(''); // Puede ser: 'Guardia', 'Admin', 'Fundador'

  // Función puente para simular el inicio de sesión
  const iniciarSesion = (rol) => {
    setUsuarioAutenticado(true);
    setRolUsuario(rol);
  };

  // Si no ha iniciado sesión, mostrar la puerta de entrada (Login)
  if (!usuarioAutenticado) {
    return <LoginCaseta onLogin={iniciarSesion} />;
  }

  // El Enrutador: Muestra la pantalla correcta según el gafete (Rol) del usuario
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#F1F5F9' }}>
      {rolUsuario === 'Guardia' && <DashboardGuardia />}
      {rolUsuario === 'Admin' && <DashboardAdmin />}
      {rolUsuario === 'Fundador' && <DashboardFundadorSaaS />}
      
      {/* Botón temporal de seguridad para cerrar sesión */}
      <button 
        onClick={() => setUsuarioAutenticado(null)}
        style={{ position: 'fixed', bottom: 20, right: 20, padding: '10px 20px', backgroundColor: '#EF4444', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
        Cerrar Sesión
      </button>
    </div>
  );
}