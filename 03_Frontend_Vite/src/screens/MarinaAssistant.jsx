import React, { useState, useEffect } from 'react';

export default function MarinaAssistant({ usuario }) {
  const [mensaje, setMensaje] = useState('Iniciando sistemas cognitivos...');

  useEffect(() => {
    if (usuario === 'Fundador') {
      setMensaje('Bienvenido de vuelta, Víctor. Sistemas AWS estables. Bóveda segura.');
    } else {
      setMensaje('Hola. Soy Marina AI. Monitoreando la seguridad y bienestar del entorno.');
    }
  }, [usuario]);

  return (
    <div style={{ position: 'fixed', bottom: '20px', right: '20px', width: '320px', background: 'rgba(10, 22, 40, 0.95)', border: '1px solid #00E5FF', borderRadius: '15px', padding: '15px', boxShadow: '0 10px 30px rgba(0, 229, 255, 0.2)', zIndex: 9999, color: 'white', fontFamily: 'sans-serif' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '10px' }}>
        <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#00E5FF', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '20px' }}>🧠</div>
        <div>
          <h4 style={{ margin: '0', color: '#00E5FF', fontFamily: 'Orbitron, sans-serif' }}>Marina AI</h4>
          <span style={{ fontSize: '10px', color: '#00FF88' }}>● Conectada a AWS</span>
        </div>
      </div>
      <p style={{ fontSize: '13px', lineHeight: '1.5', color: '#cbd5e1' }}>"{mensaje}"</p>
    </div>
  );
}
