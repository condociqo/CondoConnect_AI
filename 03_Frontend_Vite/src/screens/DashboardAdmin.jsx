import React, { useState } from 'react';

export default function DashboardAdmin() {
  const [herramienta, setHerramienta] = useState('finanzas');

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f8fafc', color: '#0f172a', fontFamily: 'sans-serif' }}>
      <div style={{ width: '250px', backgroundColor: '#ffffff', padding: '20px', borderRight: '1px solid #e2e8f0', boxShadow: '2px 0 5px rgba(0,0,0,0.05)' }}>
        <h3 style={{ color: '#0369a1', marginBottom: '30px' }}>🏢 Administración</h3>
        <button onClick={() => setHerramienta('finanzas')} style={{ width: '100%', padding: '15px', marginBottom: '10px', background: herramienta === 'finanzas' ? '#e0f2fe' : 'transparent', color: '#0369a1', border: 'none', borderRadius: '5px', textAlign: 'left', cursor: 'pointer', fontWeight: 'bold' }}>💰 Finanzas (Mercado Pago)</button>
        <button onClick={() => setHerramienta('residentes')} style={{ width: '100%', padding: '15px', marginBottom: '10px', background: herramienta === 'residentes' ? '#e0f2fe' : 'transparent', color: '#0369a1', border: 'none', borderRadius: '5px', textAlign: 'left', cursor: 'pointer', fontWeight: 'bold' }}>👥 Padrón de Residentes</button>
        <button onClick={() => setHerramienta('asambleas')} style={{ width: '100%', padding: '15px', marginBottom: '10px', background: herramienta === 'asambleas' ? '#e0f2fe' : 'transparent', color: '#0369a1', border: 'none', borderRadius: '5px', textAlign: 'left', cursor: 'pointer', fontWeight: 'bold' }}>⚖️ Votaciones y Asambleas</button>
        <button onClick={() => setHerramienta('amenidades')} style={{ width: '100%', padding: '15px', background: herramienta === 'amenidades' ? '#e0f2fe' : 'transparent', color: '#0369a1', border: 'none', borderRadius: '5px', textAlign: 'left', cursor: 'pointer', fontWeight: 'bold' }}>🎾 Reservas (Cine/Alberca)</button>
      </div>

      <div style={{ flex: 1, padding: '30px' }}>
        <h2 style={{ borderBottom: '2px solid #e2e8f0', paddingBottom: '10px' }}>Panel de Control Residencial</h2>
        <div style={{ backgroundColor: '#ffffff', padding: '25px', borderRadius: '10px', minHeight: '400px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', marginTop: '20px' }}>
          {herramienta === 'finanzas' && <div><h3 style={{color:'#0ea5e9'}}>Motor Financiero Integrado</h3><p style={{fontSize:'24px', fontWeight:'bold', color:'#16a34a'}}>,200.00 MXN</p><p>Recaudación del mes actual. Sincronizado con Mercado Pago y Finerio.</p></div>}
          {herramienta === 'residentes' && <div><h3 style={{color:'#0ea5e9'}}>Padrón Biométrico Universal</h3><p>Gestión de 145 unidades. 12 códigos QR temporales activos en este momento.</p></div>}
          {herramienta === 'asambleas' && <div><h3 style={{color:'#0ea5e9'}}>Bóveda Legal y Votaciones</h3><p>Asamblea Ordinaria programada para el 15 de Abril. Quórum actual: 0%.</p></div>}
          {herramienta === 'amenidades' && <div><h3 style={{color:'#0ea5e9'}}>Gestor de Amenidades</h3><p>Sala de Cine: Ocupada (Familia Pérez, Torre B). Alberca: Libre.</p></div>}
        </div>
      </div>
    </div>
  );
}
