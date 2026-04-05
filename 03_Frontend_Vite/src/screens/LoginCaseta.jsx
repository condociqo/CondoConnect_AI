import React from 'react';
export default function LoginCaseta({ onLogin }) {
  return (
    <div style={{ backgroundColor: '#020617', color: 'white', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', fontFamily: 'sans-serif' }}>
      <h1 style={{ color: '#38bdf8', fontSize: '40px', marginBottom: '10px' }}>CondoConnect AI</h1>
      <p style={{ color: '#64748b', marginBottom: '30px' }}>Seleccione su nivel de acceso al sistema</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', width: '300px' }}>
        <button onClick={() => onLogin('Guardia')} style={{ padding: '15px', background: '#334155', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>👤 ACCESO SEGURIDAD (CASETA)</button>
        <button onClick={() => onLogin('Admin')} style={{ padding: '15px', background: '#1e40af', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>🏢 ACCESO ADMINISTRATIVO</button>
        <button onClick={() => onLogin('Fundador')} style={{ padding: '15px', background: '#4338ca', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>🚀 ACCESO FUNDADOR (SaaS)</button>
      </div>
    </div>
  );
}
