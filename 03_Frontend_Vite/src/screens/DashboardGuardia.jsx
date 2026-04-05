import React from 'react';
export default function DashboardGuardia() {
  return (
    <div style={{ backgroundColor: '#020617', color: 'white', minHeight: '100vh', padding: '20px', fontFamily: 'sans-serif' }}>
      <header style={{ borderBottom: '1px solid #1e293b', paddingBottom: '15px', display: 'flex', justifyContent: 'space-between' }}>
        <h2 style={{ color: '#38bdf8' }}>🛡️ CASETA DE CONTROL | VIGILANCIA CF</h2>
        <span style={{ color: '#22c55e' }}>● SISTEMA ACTIVO</span>
      </header>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '20px' }}>
        <div style={{ background: '#0f172a', padding: '20px', borderRadius: '10px', border: '1px solid #334155' }}>
          <h3 style={{color: '#38bdf8'}}>📹 Monitor Hikvision</h3>
          <div style={{ height: '150px', background: '#000', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#475569' }}>
             [ CONECTANDO A STREAM ZTE... ]
          </div>
        </div>
        <div style={{ background: '#0f172a', padding: '20px', borderRadius: '10px', border: '1px solid #334155' }}>
          <h3 style={{color: '#38bdf8'}}>📝 Registro de Acceso</h3>
          <p style={{fontSize: '14px'}}>Esperando escaneo de QR o Placas...</p>
        </div>
      </div>
    </div>
  );
}
