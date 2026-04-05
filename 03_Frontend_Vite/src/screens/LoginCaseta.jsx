import React from 'react';
// Importamos el logo que acabamos de copiar
import logoCorporativo from '../assets/logo.png';

export default function LoginCaseta({ onLogin }) {
  return (
    <div style={{ backgroundColor: '#020617', color: 'white', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', fontFamily: 'sans-serif', padding: '20px' }}>
      
      {/* --- Contenedor de Identidad Visual --- */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <img src={logoCorporativo} alt="Logo CondoConnect AI" style={{ maxWidth: '150px', height: 'auto', marginBottom: '20px' }} />
        <h1 style={{ color: '#38bdf8', fontSize: '36px', margin: '0' }}>CondoConnect AI</h1>
        <p style={{ color: '#64748b', marginTop: '10px' }}>Puerta de Enlace de Seguridad</p>
      </div>

      {/* --- Contenedor de Accesos Multitenant --- */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', width: '100%', maxWidth: '350px' }}>
        <button onClick={() => onLogin('Guardia')} style={{ padding: '15px', background: '#334155', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', fontSize: '14px', transition: 'background 0.3s' }}>🛡️ ACCESO SEGURIDAD (CASETA)</button>
        <button onClick={() => onLogin('Admin')} style={{ padding: '15px', background: '#1e40af', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', fontSize: '14px', transition: 'background 0.3s' }}>🏢 ACCESO ADMINISTRATIVO</button>
        <button onClick={() => onLogin('Fundador')} style={{ padding: '15px', background: '#4338ca', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', fontSize: '14px', transition: 'background 0.3s' }}>🚀 ACCESO FUNDADOR (SaaS)</button>
      </div>
      
      <div style={{ marginTop: '50px', fontSize: '12px', color: '#334155' }}>CondoConnect AI © 2026 | Cumplimiento Corporativo</div>
    </div>
  );
}
