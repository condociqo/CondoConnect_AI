import React, { useState } from 'react';

export default function DashboardFundadorSaaS() {
  const [herramienta, setHerramienta] = useState('mrr');

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#020617', color: 'white', fontFamily: 'sans-serif' }}>
      <div style={{ width: '260px', backgroundColor: '#0f172a', padding: '20px', borderRight: '1px solid #334155' }}>
        <h3 style={{ color: '#8b5cf6', marginBottom: '30px', fontFamily: 'Orbitron' }}>🚀 CEO SAAS</h3>
        <button onClick={() => setHerramienta('mrr')} style={{ width: '100%', padding: '12px', marginBottom: '10px', background: herramienta==='mrr'?'#4c1d95':'transparent', color: 'white', border: 'none', borderRadius: '5px', textAlign: 'left', cursor: 'pointer' }}>📈 Ingresos MRR</button>
        <button onClick={() => setHerramienta('aws')} style={{ width: '100%', padding: '12px', marginBottom: '10px', background: herramienta==='aws'?'#4c1d95':'transparent', color: 'white', border: 'none', borderRadius: '5px', textAlign: 'left', cursor: 'pointer' }}>☁️ Auditoría AWS Cloud</button>
        <button onClick={() => setHerramienta('roles')} style={{ width: '100%', padding: '12px', marginBottom: '10px', background: herramienta==='roles'?'#4c1d95':'transparent', color: 'white', border: 'none', borderRadius: '5px', textAlign: 'left', cursor: 'pointer' }}>👑 SuperAdmin Roles</button>
        <button onClick={() => setHerramienta('marketplace')} style={{ width: '100%', padding: '12px', marginBottom: '10px', background: herramienta==='marketplace'?'#4c1d95':'transparent', color: 'white', border: 'none', borderRadius: '5px', textAlign: 'left', cursor: 'pointer' }}>🧩 Marketplace Integraciones</button>
      </div>
      <div style={{ flex: 1, padding: '30px' }}>
        <h2 style={{ color: '#a78bfa' }}>Centro de Mando Global</h2>
        <div style={{ marginTop: '20px', background: '#1e293b', padding: '20px', borderRadius: '10px', minHeight: '400px' }}>
          {herramienta === 'mrr' && <div><h3>Métricas de Crecimiento</h3><p style={{fontSize: '30px', color: '#34d399'}}>.00 USD / Mes</p><p>Listo para sincronizar con Stripe/Mercado Pago.</p></div>}
          {herramienta !== 'mrr' && <div><h3>Módulo: {herramienta.toUpperCase()}</h3><p>Sistemas listos para recibir datos.</p></div>}
        </div>
      </div>
    </div>
  );
}
