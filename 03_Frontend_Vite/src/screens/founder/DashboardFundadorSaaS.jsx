import React from 'react';
export default function DashboardFundadorSaaS() {
  return (
    <div style={{ backgroundColor: '#020617', color: 'white', minHeight: '100vh', padding: '20px', fontFamily: 'sans-serif' }}>
      <div style={{ background: 'linear-gradient(90deg, #1e40af, #3b82f6)', padding: '20px', borderRadius: '12px', marginBottom: '30px' }}>
        <h1>🚀 Panel Maestro del Fundador</h1>
        <p>Estatus Global de CondoConnect AI</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        <div style={{ border: '1px solid #1d4ed8', padding: '20px', borderRadius: '10px' }}>
          <h2 style={{color: '#60a5fa'}}>📈 Crecimiento SaaS</h2>
          <p>Condominios Suscritos: 5</p>
          <p>Ingresos Mensuales (MRR): ,500 MXN</p>
        </div>
        <div style={{ border: '1px solid #1d4ed8', padding: '20px', borderRadius: '10px' }}>
          <h2 style={{color: '#60a5fa'}}>🛠️ Infraestructura AWS</h2>
          <p>Presupuesto: <span style={{color: '#22c55e'}}>.00 USD Límite OK</span></p>
          <p>Uptime de Servidores: 99.9%</p>
        </div>
      </div>
    </div>
  );
}
