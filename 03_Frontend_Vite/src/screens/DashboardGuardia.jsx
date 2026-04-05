import React, { useState, useEffect } from 'react';
export default function DashboardGuardia() {
  const [eventos, setEventos] = useState([{id: 1, msg: 'Sistema Iniciado', hora: '14:00'}]);
  
  return (
    <div style={{ backgroundColor: '#020617', color: 'white', minHeight: '100vh', padding: '20px' }}>
      <h2 style={{ borderBottom: '2px solid #38bdf8' }}>🛡️ CENTRO DE MANDO: VIGILANCIA CF</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '20px', marginTop: '20px' }}>
        <div style={{ background: '#000', height: '400px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #1e293b' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ color: '#ef4444', fontWeight: 'bold' }}>LIVE - CÁMARA ACCESO PRINCIPAL</div>
            <p style={{ color: '#64748b' }}>[ CONECTANDO A ZTE GATEWAY: 192.168.1.1 ]</p>
          </div>
        </div>
        <div style={{ background: '#0f172a', padding: '15px', borderRadius: '10px' }}>
          <h3 style={{ color: '#38bdf8' }}>Bitácora de Paz</h3>
          {eventos.map(e => <div key={e.id} style={{ fontSize: '12px', padding: '5px', borderBottom: '1px solid #1e293b' }}>{e.hora} - {e.msg}</div>)}
        </div>
      </div>
    </div>
  );
}
