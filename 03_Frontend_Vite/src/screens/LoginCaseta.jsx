import React from 'react';
export default function LoginCaseta({ onLogin }) {
  return (
    <div style={{ backgroundColor: '#0F172A', color: 'white', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', fontFamily: 'sans-serif' }}>
      <h1 style={{ color: '#38BDF8' }}>CondoConnect AI</h1>
      <p>Puerta de Enlace de Seguridad</p>
      <div style={{ display: 'flex', gap: '10px' }}>
        <button onClick={() => onLogin('Guardia')} style={{ padding: '10px', cursor: 'pointer' }}>Entrar como Guardia</button>
        <button onClick={() => onLogin('Admin')} style={{ padding: '10px', cursor: 'pointer' }}>Entrar como Admin</button>
      </div>
    </div>
  );
}
