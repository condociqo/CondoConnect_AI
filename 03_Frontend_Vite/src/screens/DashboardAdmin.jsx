import React, { useState } from 'react';

export default function DashboardAdmin() {
  const [herramienta, setHerramienta] = useState('finanzas');

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f8fafc', color: '#0f172a', fontFamily: 'sans-serif' }}>
      {/* MENÚ LATERAL EXPANDIDO (El Cableado Visual) */}
      <div style={{ width: '280px', backgroundColor: '#ffffff', padding: '20px', borderRight: '1px solid #e2e8f0', overflowY: 'auto' }}>
        <h3 style={{ color: '#0369a1', marginBottom: '20px' }}>🏢 Administración Pro</h3>
        
        <p style={{fontSize: '11px', color: '#64748b', fontWeight: 'bold', textTransform: 'uppercase'}}>Finanzas y Cobranza</p>
        <button onClick={() => setHerramienta('finanzas')} style={{ width: '100%', padding: '12px', marginBottom: '5px', background: herramienta === 'finanzas' ? '#e0f2fe' : 'transparent', color: '#0369a1', border: 'none', borderRadius: '5px', textAlign: 'left', cursor: 'pointer' }}>💰 Estado de Cuenta Global</button>
        <button onClick={() => setHerramienta('sat')} style={{ width: '100%', padding: '12px', marginBottom: '15px', background: herramienta === 'sat' ? '#e0f2fe' : 'transparent', color: '#0369a1', border: 'none', borderRadius: '5px', textAlign: 'left', cursor: 'pointer' }}>🧾 Facturación SAT Automática</button>
        
        <p style={{fontSize: '11px', color: '#64748b', fontWeight: 'bold', textTransform: 'uppercase'}}>Gobernanza Residencial</p>
        <button onClick={() => setHerramienta('residentes')} style={{ width: '100%', padding: '12px', marginBottom: '5px', background: herramienta === 'residentes' ? '#e0f2fe' : 'transparent', color: '#0369a1', border: 'none', borderRadius: '5px', textAlign: 'left', cursor: 'pointer' }}>👥 Padrón Biométrico</button>
        <button onClick={() => setHerramienta('omnicanal')} style={{ width: '100%', padding: '12px', marginBottom: '5px', background: herramienta === 'omnicanal' ? '#e0f2fe' : 'transparent', color: '#0369a1', border: 'none', borderRadius: '5px', textAlign: 'left', cursor: 'pointer' }}>📢 Comunicación Omnicanal</button>
        <button onClick={() => setHerramienta('asambleas')} style={{ width: '100%', padding: '12px', marginBottom: '15px', background: herramienta === 'asambleas' ? '#e0f2fe' : 'transparent', color: '#0369a1', border: 'none', borderRadius: '5px', textAlign: 'left', cursor: 'pointer' }}>⚖️ Bóveda Legal y Votaciones</button>

        <p style={{fontSize: '11px', color: '#64748b', fontWeight: 'bold', textTransform: 'uppercase'}}>Control Operativo</p>
        <button onClick={() => setHerramienta('amenidades')} style={{ width: '100%', padding: '12px', marginBottom: '5px', background: herramienta === 'amenidades' ? '#e0f2fe' : 'transparent', color: '#0369a1', border: 'none', borderRadius: '5px', textAlign: 'left', cursor: 'pointer' }}>🎾 Reservas y Amenidades</button>
        <button onClick={() => setHerramienta('multas')} style={{ width: '100%', padding: '12px', marginBottom: '5px', background: herramienta === 'multas' ? '#e0f2fe' : 'transparent', color: '#0369a1', border: 'none', borderRadius: '5px', textAlign: 'left', cursor: 'pointer' }}>🚨 Gestor de Multas / Evidencias</button>
      </div>

      {/* ÁREA DE TRABAJO DINÁMICA */}
      <div style={{ flex: 1, padding: '30px' }}>
        <h2 style={{ borderBottom: '2px solid #e2e8f0', paddingBottom: '10px' }}>Ecosistema de Armonía</h2>
        <div style={{ backgroundColor: '#ffffff', padding: '25px', borderRadius: '10px', minHeight: '500px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', marginTop: '20px' }}>
          {herramienta === 'finanzas' && <div><h3 style={{color:'#0ea5e9'}}>Motor Financiero Integrado</h3><p style={{fontSize:'24px', fontWeight:'bold', color:'#16a34a'}}>,200.00 MXN</p><p>Sincronizado con Mercado Pago.</p></div>}
          {herramienta === 'sat' && <div><h3 style={{color:'#0ea5e9'}}>Módulo de Facturación CFDI 4.0</h3><p>Conectando con PAC... 0 facturas pendientes de timbrado este mes.</p></div>}
          {herramienta === 'residentes' && <div><h3 style={{color:'#0ea5e9'}}>Padrón Biométrico Universal</h3><p>145 unidades activas. 3 registros faciales nuevos esperando aprobación.</p></div>}
          {herramienta === 'omnicanal' && <div><h3 style={{color:'#0ea5e9'}}>Emisión de Comunicados</h3><p>Redacte su mensaje. Se enviará por WhatsApp, Email y Push Notification a todos los vecinos.</p></div>}
          {herramienta === 'asambleas' && <div><h3 style={{color:'#0ea5e9'}}>Bóveda Legal</h3><p>Calculadora de Quórum activa. Próxima asamblea: 15 de Abril.</p></div>}
          {herramienta === 'amenidades' && <div><h3 style={{color:'#0ea5e9'}}>Gestor de Amenidades</h3><p>Sala de Cine: Ocupada (Torre B). Palapas: 2 disponibles.</p></div>}
          {herramienta === 'multas' && <div><h3 style={{color:'#0ea5e9'}}>Tribunal de Armonía (Multas)</h3><p>0 infracciones reportadas por la Caseta de Vigilancia hoy.</p></div>}
        </div>
      </div>
    </div>
  );
}
