import React, { useState } from 'react';
import '../../globalStyles.css'; // Ajusta la ruta dependiendo de dónde guardaste el CSS

export default function SuperAdminVictor() {
  const [licencias, setLicencias] = useState([
    { id: 'LIC-001', cliente: 'Torre Zafiro', vertical: 'Condominio', estatus: 'Activa' },
    { id: 'LIC-002', cliente: 'Hotel Grand Sur', vertical: 'Hotelería', estatus: 'Pendiente_Pago' }
  ]);

  const [partnerships, setPartnerships] = useState([
    { empresa: 'Mercado Pago', tramite: 'API Producción', avance: '75%' },
    { empresa: 'Belvo (Bancos)', tramite: 'Firma de Contrato', avance: '20%' },
    { empresa: 'AWS', tramite: 'Aprobación Marketplace', avance: '10%' }
  ]);

  const generarLicencia = () => {
    alert("🔑 Generando nueva licencia en AWS Cognito...\n\nSe enviará el correo de bienvenida al nuevo cliente con su manual de administrador.");
  };

  const killSwitch = () => {
    if(window.confirm("⚠️ ALERTA CRÍTICA: ¿Estás seguro de apagar el servidor general? Todos los clientes pasarán a Modo Offline temporalmente.")) {
      alert("🛑 Ejecutando Kill Switch. Sistemas detenidos. Entrando a modo diagnóstico.");
    }
  };

  return (
    <div style={{ padding: '20px', backgroundColor: 'var(--bg-base)', minHeight: '100vh', fontFamily: 'var(--fuente)' }}>
      
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', borderBottom: '1px solid var(--borde-luminoso)', paddingBottom: '15px' }}>
        <h2 style={{ color: 'var(--texto-principal)', margin: 0 }}>
          <span style={{ color: 'var(--acento-cyan)' }}>👑</span> CondoConnect AI - Centro de Comando
        </h2>
        <button 
          onClick={killSwitch} 
          style={{ backgroundColor: 'var(--rojo-sos)', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', textTransform: 'uppercase' }}>
          🛑 Paro de Emergencia (Kill Switch)
        </button>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
        
        {/* Generador de Licencias */}
        <div className="tarjeta-dark" style={{ padding: '20px' }}>
          <h3 style={{ margin: '0 0 15px 0', color: 'var(--acento-cyan)' }}>Ventas y Licencias SaaS</h3>
          <button onClick={generarLicencia} className="boton-cyan" style={{ width: '100%', marginBottom: '15px' }}>
            + Generar Nueva Licencia de Cliente
          </button>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {licencias.map(l => (
              <li key={l.id} style={{ padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.05)', color: 'var(--texto-secundario)' }}>
                <strong style={{ color: 'var(--texto-principal)' }}>{l.cliente}</strong> - {l.estatus}
              </li>
            ))}
          </ul>
        </div>

        {/* Estatus de Partners (Bancos y ML) */}
        <div className="tarjeta-dark" style={{ padding: '20px' }}>
          <h3 style={{ margin: '0 0 5px 0', color: 'var(--acento-cyan)' }}>Alianzas Corporativas</h3>
          <p style={{ fontSize: '12px', color: 'var(--texto-secundario)', marginBottom: '15px' }}>Monitoreo de integraciones B2B</p>
          
          {partnerships.map(p => (
            <div key={p.empresa} style={{ marginBottom: '15px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', color: 'var(--texto-principal)', marginBottom: '5px' }}>
                <span>{p.empresa} ({p.tramite})</span>
                <span style={{ color: 'var(--verde-exito)' }}>{p.avance}</span>
              </div>
              <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', height: '8px', borderRadius: '4px' }}>
                <div style={{ backgroundColor: 'var(--acento-cyan)', height: '100%', width: p.avance, borderRadius: '4px', boxShadow: '0 0 10px rgba(0,229,255,0.5)' }}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Herramientas de Diagnóstico */}
        <div className="tarjeta-dark" style={{ padding: '20px' }}>
          <h3 style={{ margin: '0 0 15px 0', color: 'var(--acento-cyan)' }}>Resolución Técnica (AWS Logs)</h3>
          <div style={{ backgroundColor: '#0A0F1C', color: 'var(--texto-secundario)', padding: '15px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '12px', height: '120px', overflowY: 'auto', border: '1px solid rgba(255,255,255,0.05)' }}>
            <span style={{ color: 'var(--verde-exito)' }}>[11:05:02]</span> Todo normal en us-east-1.<br/>
            <span style={{ color: 'var(--verde-exito)' }}>[11:06:15]</span> Nuevo escaneo en Caseta Zafiro.<br/>
            <span style={{ color: 'var(--acento-cyan)' }}>[11:08:50]</span> AWS Lambda 'Marina_Router' operando al 12% de capacidad.<br/>
            <span style={{ color: 'var(--rojo-sos)' }}>[11:10:00]</span> Bloqueo de IP sospechosa detectado.
          </div>
        </div>

      </div>
    </div>
  );
}