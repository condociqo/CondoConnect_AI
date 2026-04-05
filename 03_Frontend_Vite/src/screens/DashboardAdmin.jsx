import React from 'react';
export default function DashboardAdmin() {
  return (
    <div style={{ backgroundColor: '#0f172a', color: 'white', minHeight: '100vh', padding: '20px', fontFamily: 'sans-serif' }}>
      <header style={{ borderBottom: '2px solid #334155', paddingBottom: '10px', marginBottom: '20px' }}>
        <h1 style={{ color: '#38bdf8' }}>🏢 Administración CondoConnect</h1>
        <p style={{ fontSize: '14px', color: '#94a3b8' }}>Panel de Control de Residencia | Configuración Global</p>
      </header>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px' }}>
        <div style={{ background: '#1e293b', padding: '20px', borderRadius: '10px' }}>
          <h3>💰 Finanzas</h3>
          <p style={{ color: '#22c55e' }}>Mercado Pago: Conectado</p>
          <p>Recaudación: ,000 MXN</p>
        </div>
        <div style={{ background: '#1e293b', padding: '20px', borderRadius: '10px' }}>
          <h3>👥 Residentes</h3>
          <p>Activos: 145 unidades</p>
          <p>Morosos: 12 unidades</p>
        </div>
        <div style={{ background: '#1e293b', padding: '20px', borderRadius: '10px' }}>
          <h3>⚙️ Dispositivos</h3>
          <p>Cámaras IP: 8 Online</p>
          <p>Lectores QR: Operativos</p>
        </div>
      </div>
    </div>
  );
}
