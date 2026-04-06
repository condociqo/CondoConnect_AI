import React, { useState } from 'react';

export default function DashboardAdmin() {
  const [herramienta, setHerramienta] = useState('finanzas');

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f8fafc', color: '#0f172a', fontFamily: 'sans-serif' }}>
      <div style={{ width: '280px', backgroundColor: '#ffffff', padding: '20px', borderRight: '1px solid #e2e8f0', overflowY: 'auto' }}>
        <h3 style={{ color: '#0369a1', marginBottom: '20px' }}>🏢 Gobernanza</h3>
        
        <p style={{fontSize: '11px', color: '#64748b', fontWeight: 'bold'}}>FINANZAS</p>
        <button onClick={() => setHerramienta('finanzas')} style={{ width: '100%', padding: '10px', marginBottom: '5px', background: herramienta==='finanzas'?'#e0f2fe':'transparent', border: 'none', textAlign: 'left', cursor: 'pointer' }}>💰 Conciliación (Finerio/MP)</button>
        <button onClick={() => setHerramienta('sat')} style={{ width: '100%', padding: '10px', marginBottom: '15px', background: herramienta==='sat'?'#e0f2fe':'transparent', border: 'none', textAlign: 'left', cursor: 'pointer' }}>🧾 Facturación CFDI 4.0</button>
        
        <p style={{fontSize: '11px', color: '#64748b', fontWeight: 'bold'}}>COMUNIDAD</p>
        <button onClick={() => setHerramienta('residentes')} style={{ width: '100%', padding: '10px', marginBottom: '5px', background: herramienta==='residentes'?'#e0f2fe':'transparent', border: 'none', textAlign: 'left', cursor: 'pointer' }}>👥 Padrón Biométrico</button>
        <button onClick={() => setHerramienta('amenidades')} style={{ width: '100%', padding: '10px', marginBottom: '5px', background: herramienta==='amenidades'?'#e0f2fe':'transparent', border: 'none', textAlign: 'left', cursor: 'pointer' }}>🎾 Gestión Amenidades</button>
        <button onClick={() => setHerramienta('multas')} style={{ width: '100%', padding: '10px', marginBottom: '15px', background: herramienta==='multas'?'#e0f2fe':'transparent', border: 'none', textAlign: 'left', cursor: 'pointer' }}>🚨 Infracciones y Evidencias</button>

        <p style={{fontSize: '11px', color: '#64748b', fontWeight: 'bold'}}>LEGAL Y COMUNICACIÓN</p>
        <button onClick={() => setHerramienta('asambleas')} style={{ width: '100%', padding: '10px', marginBottom: '5px', background: herramienta==='asambleas'?'#e0f2fe':'transparent', border: 'none', textAlign: 'left', cursor: 'pointer' }}>⚖️ Bóveda Legal / Asambleas</button>
        <button onClick={() => setHerramienta('omnicanal')} style={{ width: '100%', padding: '10px', marginBottom: '5px', background: herramienta==='omnicanal'?'#e0f2fe':'transparent', border: 'none', textAlign: 'left', cursor: 'pointer' }}>📢 Comunicados (Push/WA)</button>
      </div>
      <div style={{ flex: 1, padding: '30px' }}>
        <h2 style={{ borderBottom: '2px solid #e2e8f0', paddingBottom: '10px' }}>Ecosistema de Armonía</h2>
        <div style={{ backgroundColor: '#ffffff', padding: '25px', borderRadius: '10px', minHeight: '500px', border: '1px solid #e2e8f0', marginTop: '20px' }}>
          {herramienta === 'finanzas' && <div><h3 style={{color:'#0ea5e9'}}>Estado de Cuenta Global</h3><p>Integración lista para API de Mercado Pago.</p></div>}
          {herramienta === 'sat' && <div><h3 style={{color:'#0ea5e9'}}>Emisión de Facturas Automática</h3><p>Módulo fiscal en espera de credenciales CSD.</p></div>}
          {herramienta !== 'finanzas' && herramienta !== 'sat' && <div><h3 style={{color:'#0ea5e9'}}>Módulo: {herramienta.toUpperCase()}</h3><p>Interfaz renderizada. Esperando Base de Datos...</p></div>}
        </div>
      </div>
    </div>
  );
}
