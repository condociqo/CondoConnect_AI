import React, { useState } from 'react';
import LoginCaseta from './screens/LoginCaseta';
import DashboardGuardia from './screens/DashboardGuardia';
import DashboardAdmin from './screens/DashboardAdmin';
import DashboardFundadorSaaS from './screens/founder/DashboardFundadorSaaS';
import MarinaAssistant from './screens/MarinaAssistant';

export default function App() {
  // Estado bloqueado por defecto. Nadie entra sin pasar por LoginCaseta.
  const [rolUsuario, setRolUsuario] = useState(null);

  // Si no hay rol (no ha escaneado su rostro), mostramos ÚNICAMENTE la cámara.
  if (!rolUsuario) {
    return <LoginCaseta onLogin={setRolUsuario} />;
  }

  // El enrutador: Dependiendo de tu rostro, te manda a tu imperio.
  return (
    <>
      {rolUsuario === 'Guardia' && <DashboardGuardia />}
      {rolUsuario === 'Admin' && <DashboardAdmin />}
      {rolUsuario === 'Fundador' && <DashboardFundadorSaaS />}
      
      {/* Marina siempre activa, observando e interactuando en todas las pantallas */}
      <MarinaAssistant usuario={rolUsuario} />
    </>
  );
}
