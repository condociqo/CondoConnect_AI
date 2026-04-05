import React, { useState } from 'react';

export default function DashboardSuperAdminGlobal() {
  const [portafolio, setPortafolio] = useState([
    { id: 'PROP-01', nombre: 'Torre Zafiro', tipo: 'Residencial', unidades: 120, saludFinanciera: 'Excelente', estadoCaseta: 'Activa (Marina AI)' },
    { id: 'PROP-02', nombre: 'Corporativo Global Sur', tipo: 'Corporativo Oficinas', unidades: 45, saludFinanciera: 'Regular', estadoCaseta: 'Activa (Manual)' },
    { id: 'PROP-03', nombre: 'Plaza Magna', tipo: 'Comercial', unidades: 80, saludFinanciera: 'Excelente', estadoCaseta: 'Activa (Marina AI)' }
  ]);

  const entrarAPropiedad = (nombre) => {
    alert(`Cambiando contexto del sistema...\nIniciando Panel de Administración Local para: ${nombre}`);
  };

  return (
    <div style={estilos.contenedorSuper}>
      <header style={estilos.cabeceraGlobal}>
        <h2>🌍 Command Center: Administración Multi-Propiedad</h2>
        <p>Visión Global del Portafolio Inmobiliario</p>
      </header>

      <div style={estilos.gridKPIs}>
        <div style={estilos.kpiCard}>
          <h3>🏢 Total Propiedades</h3>
          <p style={estilos.kpiNumero}>3</p>
        </div>
        <div style={estilos.kpiCard}>
          <h3>🚪 Unidades Administradas</h3>
          <p style={estilos.kpiNumero}>245</p>
        </div>
        <div style={estilos.kpiCardOro}>
          <h3>💰 Ingreso Global Mensual</h3>
          <p style={estilos.kpiNumero}>$4.2M MXN</p>
        </div>
      </div>

      <div style={estilos.panelPortafolio}>
        <h3 style={estilos.tituloSeccion}>Portafolio de Inmuebles</h3>
        <div style={estilos.gridPropiedades}>
          {portafolio.map(prop => (
            <div key={prop.id} style={estilos.tarjetaPropiedad}>
              <div style={estilos.headerTarjeta}>
                <h4>{prop.nombre}</h4>
                <span style={estilos.badgeTipo}>{prop.tipo}</span>
              </div>
              <p><strong>Unidades:</strong> {prop.unidades}</p>
              <p><strong>Finanzas:</strong> <span style={{color: prop.saludFinanciera === 'Excelente' ? '#10B981' : '#F59E0B'}}>{prop.saludFinanciera}</span></p>
              <p><strong>Seguridad:</strong> {prop.estadoCaseta}</p>
              
              <button onClick={() => entrarAPropiedad(prop.nombre)} style={estilos.botonEntrar}>
                ⚙️ Entrar a Administrar
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const estilos = {
  contenedorSuper: { padding: '20px', backgroundColor: '#020617', color: 'white', minHeight: '100vh', fontFamily: 'sans-serif' },
  cabeceraGlobal: { borderBottom: '2px solid #1E293B', paddingBottom: '15px', marginBottom: '20px' },
  gridKPIs: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '30px' },
  kpiCard: { backgroundColor: '#0F172A', padding: '20px', borderRadius: '10px', border: '1px solid #38BDF8', textAlign: 'center' },
  kpiCardOro: { backgroundColor: '#0F172A', padding: '20px', borderRadius: '10px', border: '2px solid #F59E0B', textAlign: 'center', boxShadow: '0 0 15px rgba(245, 158, 11, 0.2)' },
  kpiNumero: { fontSize: '32px', fontWeight: 'bold', margin: '10px 0 0 0', color: '#E2E8F0' },
  panelPortafolio: { backgroundColor: '#0F172A', padding: '20px', borderRadius: '10px', border: '1px solid #1E293B' },
  tituloSeccion: { color: '#38BDF8', borderBottom: '1px solid #1E293B', paddingBottom: '10px', marginBottom: '20px' },
  gridPropiedades: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' },
  tarjetaPropiedad: { backgroundColor: '#1E293B', padding: '20px', borderRadius: '8px', border: '1px solid #334155' },
  headerTarjeta: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' },
  badgeTipo: { backgroundColor: '#3B82F6', fontSize: '12px', padding: '4px 8px', borderRadius: '4px', fontWeight: 'bold' },
  botonEntrar: { backgroundColor: '#0EA5E9', color: 'white', width: '100%', padding: '12px', borderRadius: '6px', border: 'none', marginTop: '15px', fontWeight: 'bold', cursor: 'pointer' }
};