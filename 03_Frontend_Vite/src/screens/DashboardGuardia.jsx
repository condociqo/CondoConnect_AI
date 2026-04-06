import React, { useState } from 'react';

export default function DashboardGuardia() {
  const [herramienta, setHerramienta] = useState('bitacora');

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#020408', color: '#cbd5e1', fontFamily: 'sans-serif' }}>
      <div style={{ width: '260px', backgroundColor: '#0A1628', padding: '20px', borderRight: '1px solid #00E5FF' }}>
        <h3 style={{ color: '#00E5FF', marginBottom: '20px', fontFamily: 'Orbitron' }}>🛡️ OPERACIÓN CIQO</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <button onClick={() => setHerramienta('cctv')} style={{ background: herramienta==='cctv' ? 'rgba(0,229,255,0.2)' : 'transparent', color: 'white', border: '1px solid #00E5FF', padding: '10px', borderRadius: '5px', textAlign: 'left', cursor: 'pointer' }}>📹 Monitor CCTV Hikvision</button>
          <button onClick={() => setHerramienta('lpr')} style={{ background: herramienta==='lpr' ? 'rgba(0,229,255,0.2)' : 'transparent', color: 'white', border: '1px solid #00E5FF', padding: '10px', borderRadius: '5px', textAlign: 'left', cursor: 'pointer' }}>🚗 Lector de Placas (LPR)</button>
          <button onClick={() => setHerramienta('qr')} style={{ background: herramienta==='qr' ? 'rgba(0,229,255,0.2)' : 'transparent', color: 'white', border: '1px solid #00E5FF', padding: '10px', borderRadius: '5px', textAlign: 'left', cursor: 'pointer' }}>📱 Escáner QR / Visitas</button>
          <button onClick={() => setHerramienta('id')} style={{ background: herramienta==='id' ? 'rgba(0,229,255,0.2)' : 'transparent', color: 'white', border: '1px solid #00E5FF', padding: '10px', borderRadius: '5px', textAlign: 'left', cursor: 'pointer' }}>🪪 Registro ID Oficial</button>
          <button onClick={() => setHerramienta('paqueteria')} style={{ background: herramienta==='paqueteria' ? 'rgba(0,229,255,0.2)' : 'transparent', color: 'white', border: '1px solid #00E5FF', padding: '10px', borderRadius: '5px', textAlign: 'left', cursor: 'pointer' }}>📦 Delivery Fast Track</button>
          <button onClick={() => setHerramienta('rondines')} style={{ background: herramienta==='rondines' ? 'rgba(0,229,255,0.2)' : 'transparent', color: 'white', border: '1px solid #00E5FF', padding: '10px', borderRadius: '5px', textAlign: 'left', cursor: 'pointer' }}>📍 Rondines GPS</button>
          <button onClick={() => setHerramienta('bitacora')} style={{ background: herramienta==='bitacora' ? 'rgba(0,229,255,0.2)' : 'transparent', color: 'white', border: '1px solid #00E5FF', padding: '10px', borderRadius: '5px', textAlign: 'left', cursor: 'pointer' }}>📝 Bitácora de Paz</button>
          <button onClick={() => setHerramienta('turno')} style={{ background: herramienta==='turno' ? 'rgba(0,229,255,0.2)' : 'transparent', color: 'white', border: '1px solid #00E5FF', padding: '10px', borderRadius: '5px', textAlign: 'left', cursor: 'pointer' }}>🤝 Entrega de Turno</button>
          <button style={{ background: '#ff4466', color: 'white', border: 'none', padding: '15px 10px', borderRadius: '5px', textAlign: 'center', cursor: 'pointer', fontWeight: 'bold', marginTop: '20px' }}>🚨 BOTÓN S.O.S</button>
        </div>
      </div>
      <div style={{ flex: 1, padding: '30px' }}>
        <h2 style={{ borderBottom: '1px solid #1A2840', paddingBottom: '10px', color: '#00E5FF' }}>Panel de Control Táctico</h2>
        <div style={{ marginTop: '20px', background: '#1A2840', padding: '20px', borderRadius: '10px', border: '1px solid rgba(0,229,255,0.1)', minHeight: '500px' }}>
           {herramienta === 'cctv' && <div><h3>Monitor CCTV</h3><div style={{height: '300px', background: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>[ ESPERANDO SEÑAL RTSP ZTE ]</div></div>}
           {herramienta === 'lpr' && <div><h3>Reconocimiento Analítico de Placas</h3><p>Cámaras en pluma de acceso armadas. Esperando vehículo...</p></div>}
           {herramienta === 'bitacora' && <div><h3>Bitácora Inmutable</h3><p>07:00 AM - Inicio de turno oficial CIQO. Sistemas nominales.</p></div>}
           {herramienta !== 'cctv' && herramienta !== 'lpr' && herramienta !== 'bitacora' && <div><h3>Módulo Activo: {herramienta.toUpperCase()}</h3><p>Interfaz conectada. Esperando datos del Backend...</p></div>}
        </div>
      </div>
    </div>
  );
}
