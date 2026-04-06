import React, { useState } from 'react';
import { KantechAPI } from '../drivers/kantech_api';

export default function DashboardAdmin({ onLogout }) {
  const [herramienta, setHerramienta] = useState('kantech_lab');
  const [kantechIP, setKantechIP] = useState('');
  const [kantechStatus, setKantechStatus] = useState('Desconectado');
  const [puertasKantech, setPuertasKantech] = useState([]);
  const [log, setLog] = useState('');

  const conectarKantech = async () => {
    if (!kantechIP) { setLog('Error: Ingrese la IP del servidor Kantech.'); return; }
    setLog('Iniciando Handshake SSL/TLS con Kantech en ' + kantechIP + '...');
    setKantechStatus('Conectando...');
    
    const respuesta = await KantechAPI.probarConexion(kantechIP, '8801', 'Admin', '******');
    
    if (respuesta.status === 'success') {
      setKantechStatus('En Línea (Conectado)');
      setLog(respuesta.message + ' Versión detectada: ' + respuesta.version);
      const puertas = await KantechAPI.obtenerPuertas();
      setPuertasKantech(puertas);
    }
  };

  const enviarApertura = async (idPuerta) => {
    // SUTURA: Agregadas comillas simples para corregir el error de compilación
    setLog('Enviando comando de apertura a controlador Kantech (Puerta: ' + idPuerta + ')...');
    const resp = await KantechAPI.abrirPuerta(idPuerta);
    setLog('Respuesta de Servidor Kantech: ' + resp.message);
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f8fafc', color: '#0f172a', fontFamily: 'sans-serif' }}>
      <div style={{ width: '280px', backgroundColor: '#ffffff', padding: '20px', borderRight: '1px solid #e2e8f0', overflowY: 'auto' }}>
        <h3 style={{ color: '#0369a1', marginBottom: '20px' }}>🏢 Integraciones</h3>
        <button onClick={() => setHerramienta('kantech_lab')} style={{ width: '100%', padding: '10px', background: herramienta==='kantech_lab'?'#e0f2fe':'transparent', border: 'none', textAlign: 'left', cursor: 'pointer', borderRadius: '5px', color: '#0369a1', fontWeight: 'bold' }}>🔌 Lab: Kantech EntraPass</button>
        <button onClick={() => setHerramienta('residentes')} style={{ width: '100%', padding: '10px', marginTop: '10px', background: 'transparent', border: 'none', textAlign: 'left', cursor: 'pointer', borderRadius: '5px', color: '#64748b' }}>👥 Volver a Padrón</button>
      </div>

      <div style={{ flex: 1, padding: '30px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid #e2e8f0', paddingBottom: '10px' }}>
          <h2 style={{ margin: 0 }}>Laboratorio de Hardware de Terceros</h2>
          <span style={{ background: kantechStatus==='En Línea (Conectado)'?'#10b981':'#ef4444', color: 'white', padding: '5px 15px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold' }}>
            ESTADO KANTECH: {kantechStatus}
          </span>
        </div>

        <div style={{ backgroundColor: '#ffffff', padding: '25px', borderRadius: '10px', minHeight: '500px', border: '1px solid #e2e8f0', marginTop: '20px', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
          
          {herramienta === 'kantech_lab' && (
            <div>
              <h3 style={{color:'#0ea5e9'}}>Integración por API RESTful (Tyco)</h3>
              <p style={{color:'#64748b', fontSize:'14px'}}>CondoConnect enviará señales encriptadas hacia la IP del servidor EntraPass para comandar las puertas físicas.</p>
              
              <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
                <input 
                  type="text" 
                  placeholder="Ingrese IP de Kantech (Ej. 189.200.X.X)" 
                  value={kantechIP}
                  onChange={(e) => setKantechIP(e.target.value)}
                  style={{ padding: '10px', width: '300px', borderRadius: '5px', border: '1px solid #cbd5e1' }}
                />
                <button onClick={conectarKantech} style={{ background: '#0ea5e9', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}>
                  Hacer Ping a Kantech
                </button>
              </div>

              <div style={{ marginTop: '20px', background: '#0f172a', padding: '15px', borderRadius: '8px', color: '#00FF88', fontFamily: 'monospace', fontSize: '12px', minHeight: '60px' }}>
                {log || '> Esperando conexión con gateway Kantech...'}
              </div>

              {puertasKantech.length > 0 && (
                <div style={{ marginTop: '30px' }}>
                  <h4 style={{color:'#334155'}}>Hardware Detectado (Controladores KT)</h4>
                  {puertasKantech.map(puerta => (
                    <div key={puerta.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px', border: '1px solid #e2e8f0', borderRadius: '8px', marginBottom: '10px' }}>
                      <div>
                        <strong>{puerta.nombre}</strong> <span style={{ color: '#64748b', fontSize: '12px' }}>(ID: {puerta.id})</span>
                      </div>
                      <button onClick={() => enviarApertura(puerta.id)} style={{ background: '#ef4444', color: 'white', border: 'none', padding: '8px 15px', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}>
                        Enviar Pulso Apertura
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
          {herramienta === 'residentes' && <p>Módulo de Padrón inactivo en este laboratorio.</p>}
        </div>
      </div>
    </div>
  );
}

