import React, { useState } from 'react';

export default function CustodiaBiometrica({ paqueteId }) {
  const [estado, setEstado] = useState('Esperando'); // Esperando, Validando, Aprobado

  const validarRostro = () => {
    setEstado('Validando');
    // Simulamos la llamada a Amazon Rekognition
    setTimeout(() => {
      setEstado('Aprobado');
      alert(`🛡️ Marina AI: Identidad confirmada. Custodia del paquete [${paqueteId}] transferida legalmente a tu cuenta. Ganancia asegurada.`);
    }, 2000);
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #10B981', borderRadius: '10px', backgroundColor: '#F0FDF4' }}>
      <h4 style={{ color: '#065F46', margin: '0 0 10px 0' }}>Firma Biométrica Requerida</h4>
      <p style={{ fontSize: '13px', color: '#047857' }}>Este paquete tiene un valor alto. Para protegerte a ti y al cliente, Marina requiere verificar tu identidad.</p>
      
      {estado === 'Esperando' && (
        <button onClick={validarRostro} style={{ backgroundColor: '#10B981', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}>
          📷 Escanear Mi Rostro
        </button>
      )}
      {estado === 'Validando' && <p>♾️ Marina analizando biometría...</p>}
      {estado === 'Aprobado' && <p style={{ color: '#059669', fontWeight: 'bold' }}>✔️ Custodia Aceptada Legalmente</p>}
    </div>
  );
}