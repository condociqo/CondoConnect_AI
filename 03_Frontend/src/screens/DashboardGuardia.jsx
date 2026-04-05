import React, { useState } from 'react';
import './globalStyles.css'; // Esto conecta tu paleta Azul Marino Metálico

export default function DashboardGuardia() {
  // --- 1. LÓGICA Y CEREBRO DEL GUARDIA ---
  const [saldo, setSaldo] = useState(456.00);
  
  const activarSOS = () => {
    alert("🚨 ALERTA SOS: Marina AI ha encendido las cámaras perimetrales y notificado a la base. Unidades en camino.");
  };

  const escanearPaquete = () => {
    alert("♾️ Marina AI: Paquete escaneado con éxito. Comisión de $4.00 MXN transferida a tu billetera.");
    setSaldo(saldo + 4.00);
  };

  // --- 2. INTERFAZ VISUAL (DARK MODE) ---
  return (
    <div style={{ display: 'flex', height: '100vh', backgroundColor: 'var(--bg-base)' }}>
      
      {/* SIDEBAR LATERAL (Menú) */}
      <aside style={{ width: '260px', backgroundColor: 'var(--bg-sidebar)', padding: '20px', borderRight: '1px solid var(--borde-luminoso)' }}>
        <h2 style={{ color: 'var(--texto-principal)', fontSize: '1.2rem', marginBottom: '40px' }}>
          <span style={{ color: 'var(--acento-cyan)' }}>♾️</span> CondoConnect AI
        </h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ color: 'var(--acento-cyan)', padding: '12px', backgroundColor: 'rgba(0, 229, 255, 0.1)', borderLeft: '4px solid var(--acento-cyan)', borderRadius: '4px', marginBottom: '10px', cursor: 'pointer' }}>🛡️ Caseta</li>
          <li style={{ color: 'var(--texto-secundario)', padding: '12px', cursor: 'pointer' }}>👥 Visitas</li>
          <li style={{ color: 'var(--texto-secundario)', padding: '12px', cursor: 'pointer' }}>📦 Paquetes</li>
          <li style={{ color: 'var(--texto-secundario)', padding: '12px', cursor: 'pointer' }}>💳 Billetera</li>
        </ul>
      </aside>

      {/* CONTENIDO PRINCIPAL */}
      <main style={{ flex: 1, padding: '30px', overflowY: 'auto' }}>
        
        {/* HEADER */}
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px', paddingBottom: '15px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <h3 style={{ margin: 0, color: 'var(--texto-principal)' }}>🏢 Parque Industrial - Caseta Norte</h3>
          <div style={{ color: 'var(--texto-principal)', display: 'flex', alignItems: 'center', gap: '10px' }}>
            Antonio R. (Guardia)
            <div style={{ width: '35px', height: '35px', borderRadius: '50%', border: '1px solid var(--acento-cyan)', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'var(--acento-cyan)', fontWeight: 'bold' }}>AR</div>
          </div>
        </header>

        <h2 style={{ color: 'var(--texto-principal)', fontWeight: 'normal', marginBottom: '25px' }}>
          Bienvenido. Estado del Turno: <span style={{ color: 'var(--acento-cyan)' }}>Nocturno</span>.
        </h2>

        {/* CUADRÍCULA DE WIDGETS */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          
          {/* WIDGET 1: LOGÍSTICA */}
          <div className="tarjeta-dark" style={{ padding: '20px' }}>
            <h4 style={{ margin: '0 0 15px 0', color: 'var(--texto-principal)' }}>📦 Recepción de Paquetería</h4>
            <div 
              onClick={escanearPaquete}
              style={{ height: '150px', backgroundColor: '#0A0F1C', border: '2px dashed var(--texto-secundario)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--texto-secundario)', cursor: 'pointer' }}>
              📷 Clic para Simular Escaneo
            </div>
          </div>

          {/* WIDGET 2: MARINA AI */}
          <div className="tarjeta-dark" style={{ padding: '20px', border: '1px solid var(--borde-luminoso)' }}>
            <h4 style={{ margin: '0 0 15px 0', color: 'var(--acento-cyan)' }}>♾️ Marina AI (Asistente)</h4>
            <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--texto-secundario)' }}>Monitoreo activo...</p>
            <div style={{ backgroundColor: 'rgba(0, 229, 255, 0.05)', padding: '15px', borderRadius: '8px', borderLeft: '3px solid var(--acento-cyan)', marginTop: '10px' }}>
              <strong style={{ color: 'var(--texto-principal)' }}>Sistema en línea.</strong> Esperando registro de visitantes o paquetería.
            </div>
          </div>

          {/* WIDGET 3: BILLETERA */}
          <div className="tarjeta-dark" style={{ padding: '20px' }}>
            <h4 style={{ margin: '0 0 10px 0', color: 'var(--texto-principal)' }}>💳 Mi Cartera CondoConnect</h4>
            <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--verde-exito)' }}>● Sincronizado</p>
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--acento-cyan)', margin: '15px 0', textShadow: '0 0 10px rgba(0, 229, 255, 0.2)' }}>
              ${saldo.toFixed(2)} <span style={{ fontSize: '1rem', color: 'var(--texto-principal)' }}>MXN</span>
            </div>
          </div>

        </div>

        {/* BOTONES DE ACCIÓN RÁPIDA */}
        <div style={{ display: 'flex', gap: '15px', marginTop: '30px' }}>
          <button className="boton-cyan" style={{ flex: 1 }}>+ Nuevo Ingreso</button>
          <button className="boton-cyan" style={{ flex: 1 }}>📖 Bitácora</button>
          <button 
            onClick={activarSOS}
            style={{ flex: 1, backgroundColor: 'var(--rojo-sos)', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', textTransform: 'uppercase' }}>
            🆘 SOS TÁCTICO
          </button>
        </div>

      </main>
    </div>
  );
}