import React, { useState } from 'react';
import { signAndSend } from '../services/bitacora';

export default function EntregaTurno() {
  const [novedades, setNovedades] = useState('');
  const [armas, setArmas] = useState('Completas y en orden');
  const [status, setStatus] = useState('');
  const [eventId, setEventId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sellando reporte con criptografía AWS KMS...');
    setEventId('');
    
    try {
      const respuesta = await signAndSend({
        action: 'ENTREGA_TURNO',
        component: 'EntregaTurno.jsx',
        details: { novedades, estado_armamento: armas }
      });
      setStatus('✅ Reporte sellado exitosamente. Es inmutable.');
      setEventId(respuesta.event_id);
      setNovedades('');
    } catch (error) {
      setStatus('❌ Error de seguridad: ' + error.message);
    }
  };

  return (
    <div style={{ padding: '20px', background: '#0A1628', borderRadius: '10px', color: '#cbd5e1', maxWidth: '600px', margin: '0 auto' }}>
      <h2 style={{ color: '#00FF88', borderBottom: '1px solid #1e293b', paddingBottom: '10px' }}>🛡️ Entrega de Turno Inmutable</h2>
      <p style={{ fontSize: '12px', color: '#64748b', marginBottom: '20px' }}>Este reporte será firmado digitalmente y respaldado en la Blockchain de DynamoDB.</p>
      
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '5px', color: '#94a3b8' }}>Novedades del Turno:</label>
          <textarea 
            value={novedades} 
            onChange={(e) => setNovedades(e.target.value)} 
            required
            style={{ width: '100%', padding: '10px', borderRadius: '5px', background: '#020408', border: '1px solid #334155', color: 'white', minHeight: '80px' }}
          />
        </div>
        
        <div>
          <label style={{ display: 'block', marginBottom: '5px', color: '#94a3b8' }}>Estado del Armamento/Equipo:</label>
          <input 
            type="text" 
            value={armas} 
            onChange={(e) => setArmas(e.target.value)} 
            required
            style={{ width: '100%', padding: '10px', borderRadius: '5px', background: '#020408', border: '1px solid #334155', color: 'white' }}
          />
        </div>

        <button type="submit" style={{ padding: '12px', background: '#10b981', color: 'white', border: 'none', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer', marginTop: '10px' }}>
          Sellar y Entregar Turno
        </button>
      </form>

      {status && (
        <div style={{ marginTop: '20px', padding: '15px', background: '#020408', borderRadius: '5px', borderLeft: status.includes('✅') ? '4px solid #10b981' : '4px solid #ef4444' }}>
          <p style={{ margin: 0, fontSize: '14px', fontFamily: 'monospace' }}>{status}</p>
          {eventId && <p style={{ margin: '10px 0 0 0', fontSize: '12px', color: '#00E5FF', wordBreak: 'break-all' }}>ID de Evento: {eventId}</p>}
        </div>
      )}
    </div>
  );
}
