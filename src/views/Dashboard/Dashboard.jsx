import React from 'react';

const Dashboard = () => {
  return (
    <div style={{ backgroundColor: '#0a0a0a', color: '#00f2ff', minHeight: '100vh', padding: '20px', fontFamily: 'monospace' }}>
      <header style={{ borderBottom: '2px solid #00f2ff', paddingBottom: '10px', marginBottom: '20px' }}>
        <h2>🛡️ CONDO-CONNECT AI | PANEL OPERATIVO</h2>
        <p>Estatus del Sistema: <span style={{ color: '#0f0' }}>ONLINE</span></p>
      </header>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        <section style={{ border: '1px solid #333', padding: '15px', borderRadius: '8px' }}>
          <h3>📋 Registro de Bitácora</h3>
          <button style={{ backgroundColor: '#00f2ff', color: '#000', border: 'none', padding: '10px', cursor: 'pointer', fontWeight: 'bold' }}>
            NUEVA ENTRADA +
          </button>
        </section>
        
        <section style={{ border: '1px solid #333', padding: '15px', borderRadius: '8px' }}>
          <h3>🚗 Control de Acceso</h3>
          <input type="text" placeholder="Escribir placa..." style={{ backgroundColor: '#222', color: '#fff', border: '1px solid #00f2ff', padding: '10px', width: '80%' }} />
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
