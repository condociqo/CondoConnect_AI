import React from 'react';
export default function MarinaAssistant() {
  return (
    <div style={{ position: 'fixed', bottom: '20px', right: '20px', width: '300px', background: '#1e3a8a', borderRadius: '15px', padding: '15px', boxShadow: '0 10px 25px rgba(0,0,0,0.5)' }}>
      <h4 style={{ margin: '0 0 10px 0', color: '#60a5fa' }}>✨ Marina AI</h4>
      <p style={{ fontSize: '13px' }}>"Bienvenido a la propiedad. ¿Deseas agendar una visita o revisar tu saldo de mantenimiento?"</p>
      <input type="text" placeholder="Escribe a Marina..." style={{ width: '100%', padding: '8px', borderRadius: '5px', border: 'none' }} />
    </div>
  );
}
