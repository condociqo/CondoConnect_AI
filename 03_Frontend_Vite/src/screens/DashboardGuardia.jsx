import React, { useState } from 'react';

export default function DashboardGuardia() {
  const [herramienta, setHerramienta] = useState('cctv');

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#0f172a', color: 'white', fontFamily: 'sans-serif' }}>
      {/* Menú Lateral */}
      <div style={{ width: '250px', backgroundColor: '#020617', padding: '20px', borderRight: '1px solid #1e293b' }}>
        <h3 style={{ color: '#38bdf8', marginBottom: '30px' }}>🛡️ VIGILANCIA CF</h3>
        <button onClick={() => setHerramienta('cctv')} style={{ width: '100%', padding: '15px', marginBottom: '10px', background: herramienta === 'cctv' ? '#1e40af' : 'transparent', color: 'white', border: 'none', borderRadius: '5px', textAlign: 'left', cursor: 'pointer' }}>📹 Monitor CCTV</button>
        <button onClick={() => setHerramienta('placas')} style={{ width: '100%', padding: '15px', marginBottom: '10px', background: herramienta === 'placas' ? '#1e40af' : 'transparent', color: 'white', border: 'none', borderRadius: '5px', textAlign: 'left', cursor: 'pointer' }}>🚗 Lector de Placas</button>
        <button onClick={() => setHerramienta('qr')} style={{ width: '100%', padding: '15px', marginBottom: '10px', background: herramienta === 'qr' ? '#1e40af' : 'transparent', color: 'white', border: 'none', borderRadius: '5px', textAlign: 'left', cursor: 'pointer' }}>📱 Escáner QR</button>
        <button onClick={() => setHerramienta('rondines')} style={{ width: '100%', padding: '15px', background: herramienta === 'rondines' ? '#1e40af' : 'transparent', color: 'white', border: 'none', borderRadius: '5px', textAlign: 'left', cursor: 'pointer' }}>🔦 Control Rondines</button>
      </div>

      {/* Área de Trabajo Principal */}
      <div style={{ flex: 1, padding: '30px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h2>Centro de Operaciones</h2>
          <span style={{ background: '#22c55e', padding: '5px 10px', borderRadius: '20px', fontSize: '12px' }}>SISTEMA ARMADO</span>
        </div>
        
        {/* Renderizado Dinámico de la Herramienta */}
        <div style={{ backgroundColor: '#1e293b', padding: '20px', borderRadius: '10px', minHeight: '400px', border: '1px solid #334155' }}>
          {herramienta === 'cctv' && <div><h3 style={{color: '#60a5fa'}}>Monitor Hikvision (En Vivo)</h3><div style={{height:'300px', background:'#000', marginTop:'10px', display:'flex', alignItems:'center', justifyContent:'center', color:'#475569'}}>[ SEÑAL DE VIDEO ZTE MULTICANAL ]</div></div>}
          {herramienta === 'placas' && <div><h3 style={{color: '#60a5fa'}}>Reconocimiento LPR Bosch</h3><p>Esperando vehículo en pluma de acceso...</p></div>}
          {herramienta === 'qr' && <div><h3 style={{color: '#60a5fa'}}>Validación de Visitas</h3><p>Apunte la cámara del dispositivo al código QR del visitante.</p></div>}
          {herramienta === 'rondines' && <div><h3 style={{color: '#60a5fa'}}>Bitácora de Recorridos GPS</h3><p>Último punto de control verificado: Muro Norte (Hace 15 min).</p></div>}
        </div>
      </div>
    </div>
  );
}
