import React, { useState } from 'react';

export default function DashboardEmpresa() {
  const [metricasGlobales, setMetricasGlobales] = useState({
    condominiosActivos: 12,
    guardiasEnTurno: 45,
    alertasActivas: 1, // Simulación de una alerta SOS
    turnosExtraCubiertos: 8
  });

  const [propiedades, setPropiedades] = useState([
    { id: 'C-01', nombre: 'Torre Zafiro Corp', estado: 'Normal', guardias: 4 },
    { id: 'C-02', nombre: 'Residencial Las Palmas', estado: 'Alerta SOS', guardias: 2 },
    { id: 'C-03', nombre: 'Plaza Comercial Centro', estado: 'Normal', guardias: 6 }
  ]);

  return (
    <div style={estilos.contenedorGlobal}>
      <header style={estilos.cabeceraComando}>
        <h2>🌐 Centro de Comando Multi-Propiedad</h2>
        <p style={estilos.subtituloComando}>Agencia de Seguridad Privada | Operaciones en Tiempo Real</p>
      </header>

      <div style={estilos.gridMetricas}>
        <div style={estilos.tarjetaAzul}>
          <h3>🏢 Condominios</h3>
          <p style={estilos.numeroGrande}>{metricasGlobales.condominiosActivos}</p>
        </div>
        <div style={estilos.tarjetaVerde}>
          <h3>👮 Guardias Activos</h3>
          <p style={estilos.numeroGrande}>{metricasGlobales.guardiasEnTurno}</p>
        </div>
        <div style={metricasGlobales.alertasActivas > 0 ? estilos.tarjetaRoja : estilos.tarjetaVerde}>
          <h3>🚨 Emergencias (SOS)</h3>
          <p style={estilos.numeroGrande}>{metricasGlobales.alertasActivas}</p>
        </div>
      </div>

      <div style={estilos.panelPropiedades}>
        <h3 style={estilos.tituloSeccion}>Estatus por Propiedad</h3>
        <table style={estilos.tabla}>
          <thead>
            <tr style={estilos.filaCabecera}>
              <th style={estilos.celda}>ID</th>
              <th style={estilos.celda}>Propiedad</th>
              <th style={estilos.celda}>Guardias en Sitio</th>
              <th style={estilos.celda}>Estado</th>
              <th style={estilos.celda}>Acción</th>
            </tr>
          </thead>
          <tbody>
            {propiedades.map(prop => (
              <tr key={prop.id} style={estilos.filaDatos}>
                <td style={estilos.celda}>{prop.id}</td>
                <td style={estilos.celda}>{prop.nombre}</td>
                <td style={estilos.celda}>{prop.guardias}</td>
                <td style={estilos.celda}>
                  <span style={prop.estado === 'Normal' ? estilos.badgeNormal : estilos.badgeAlerta}>
                    {prop.estado}
                  </span>
                </td>
                <td style={estilos.celda}>
                  <button style={estilos.botonDetalle}>Ver Detalles</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const estilos = {
  contenedorGlobal: { padding: '20px', backgroundColor: '#020617', color: 'white', minHeight: '100vh', fontFamily: 'sans-serif' },
  cabeceraComando: { borderBottom: '2px solid #1E293B', paddingBottom: '20px', marginBottom: '20px' },
  subtituloComando: { color: '#94A3B8', margin: 0 },
  gridMetricas: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '30px' },
  tarjetaAzul: { backgroundColor: '#0F172A', padding: '20px', borderRadius: '10px', border: '1px solid #3B82F6', textAlign: 'center' },
  tarjetaVerde: { backgroundColor: '#0F172A', padding: '20px', borderRadius: '10px', border: '1px solid #10B981', textAlign: 'center' },
  tarjetaRoja: { backgroundColor: '#450A0A', padding: '20px', borderRadius: '10px', border: '2px solid #EF4444', textAlign: 'center', animation: 'pulseBorder 2s infinite' },
  numeroGrande: { fontSize: '36px', fontWeight: 'bold', margin: '10px 0 0 0' },
  panelPropiedades: { backgroundColor: '#0F172A', padding: '20px', borderRadius: '10px', border: '1px solid #1E293B' },
  tituloSeccion: { color: '#38BDF8', marginBottom: '15px' },
  tabla: { width: '100%', borderCollapse: 'collapse', color: '#E2E8F0' },
  filaCabecera: { backgroundColor: '#1E293B', textAlign: 'left' },
  filaDatos: { borderBottom: '1px solid #1E293B' },
  celda: { padding: '12px' },
  badgeNormal: { backgroundColor: '#064E3B', color: '#34D399', padding: '5px 10px', borderRadius: '15px', fontSize: '12px', fontWeight: 'bold' },
  badgeAlerta: { backgroundColor: '#991B1B', color: '#FCA5A5', padding: '5px 10px', borderRadius: '15px', fontSize: '12px', fontWeight: 'bold' },
  botonDetalle: { backgroundColor: '#3B82F6', color: 'white', border: 'none', padding: '8px 12px', borderRadius: '5px', cursor: 'pointer' }
};