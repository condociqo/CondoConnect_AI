import React from 'react';
export default function DashboardAdmin() {
  return (
    <div style={{ backgroundColor: '#0f172a', color: 'white', minHeight: '100vh', padding: '20px' }}>
      <h1 style={{ color: '#38bdf8' }}>🏢 Administración Central</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px', marginTop: '20px' }}>
        <div style={{ background: '#1e293b', padding: '15px', borderRadius: '8px' }}><h4>💰 Mercado Pago</h4><p>Sincronizado</p></div>
        <div style={{ background: '#1e293b', padding: '15px', borderRadius: '8px' }}><h4>👥 Residentes</h4><p>145 Activos</p></div>
        <div style={{ background: '#1e293b', padding: '15px', borderRadius: '8px' }}><h4>🚨 Alertas</h4><p>0 Pendientes</p></div>
      </div>
    </div>
  );
}
