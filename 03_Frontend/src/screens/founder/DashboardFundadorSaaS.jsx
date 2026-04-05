import React, { useState } from 'react';

export default function DashboardFundadorSaaS() {
  const [kpis] = useState({
    licenciasActivas: 12,
    ingresoRecurrenteMensual: 145000, // MRR en MXN
    ticketsSoporteAbiertos: 3,
    nuevosProspectos: 5
  });

  const [tickets] = useState([
    { id: 'TK-092', cliente: 'Torre Zafiro', problema: 'Cámara LPR no lee placas de noche', prioridad: 'Alta', estado: 'Abierto' },
    { id: 'TK-093', cliente: 'Agencia de Seguridad Elite', problema: 'Duda sobre cálculo de finiquito', prioridad: 'Media', estado: 'En Revisión' }
  ]);

  return (
    <div style={estilos.contenedorSaaS}>
      <header style={estilos.headerSaaS}>
        <h2 style={estilos.titulo}>🚀 CondoConnect AI - Panel de Fundador (SaaS)</h2>
        <p style={estilos.subtitulo}>Monitoreo de negocio, licencias y soporte técnico global.</p>
      </header>

      <div style={estilos.gridKPIs}>
        <div style={estilos.tarjetaKPI}>
          <h4>Licencias Activas (Propiedades)</h4>
          <h2 style={estilos.numeroVerde}>{kpis.licenciasActivas}</h2>
        </div>
        <div style={estilos.tarjetaKPI}>
          <h4>Ingreso Recurrente Mensual (MRR)</h4>
          <h2 style={estilos.numeroAzul}>${kpis.ingresoRecurrenteMensual.toLocaleString('es-MX')} MXN</h2>
        </div>
        <div style={estilos.tarjetaKPI}>
          <h4>Tickets de Soporte Global</h4>
          <h2 style={kpis.ticketsSoporteAbiertos > 0 ? estilos.numeroRojo : estilos.numeroVerde}>
            {kpis.ticketsSoporteAbiertos} Pendientes
          </h2>
        </div>
      </div>

      <div style={estilos.panelTickets}>
        <h3 style={estilos.tituloSeccion}>🛠️ Mesa de Ayuda (Helpdesk)</h3>
        <p style={estilos.textoInfo}>Los administradores y guardias pueden presionar el botón "Soporte Técnico" en cualquier módulo y el reporte llegará aquí.</p>
        
        <table style={estilos.tablaTickets}>
          <thead>
            <tr style={estilos.filaCabecera}>
              <th style={estilos.celda}>Ticket ID</th>
              <th style={estilos.celda}>Cliente</th>
              <th style={estilos.celda}>Falla Reportada</th>
              <th style={estilos.celda}>Prioridad</th>
              <th style={estilos.celda}>Acción</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map(tk => (
              <tr key={tk.id} style={estilos.filaDatos}>
                <td style={estilos.celda}><strong>{tk.id}</strong></td>
                <td style={estilos.celda}>{tk.cliente}</td>
                <td style={estilos.celda}>{tk.problema}</td>
                <td style={estilos.celda}><span style={tk.prioridad === 'Alta' ? estilos.badgeRojo : estilos.badgeAmarillo}>{tk.prioridad}</span></td>
                <td style={estilos.celda}>
                  <button style={estilos.botonAtender}>Atender Ticket</button>
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
  contenedorSaaS: { padding: '20px', backgroundColor: '#020617', color: 'white', minHeight: '100vh', fontFamily: 'sans-serif' },
  headerSaaS: { borderBottom: '1px solid #1E293B', paddingBottom: '15px', marginBottom: '20px' },
  titulo: { color: '#00E5FF', margin: 0 },
  subtitulo: { color: '#94A3B8', fontSize: '14px', margin: '5px 0 0 0' },
  gridKPIs: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '30px' },
  tarjetaKPI: { backgroundColor: '#0F172A', padding: '20px', borderRadius: '10px', border: '1px solid #1E293B' },
  numeroVerde: { color: '#10B981', fontSize: '32px', margin: '10px 0 0 0' },
  numeroAzul: { color: '#38BDF8', fontSize: '32px', margin: '10px 0 0 0' },
  numeroRojo: { color: '#EF4444', fontSize: '32px', margin: '10px 0 0 0' },
  panelTickets: { backgroundColor: '#0F172A', padding: '20px', borderRadius: '10px', border: '1px solid #1E293B' },
  tituloSeccion: { color: '#E2E8F0', margin: '0 0 10px 0' },
  textoInfo: { color: '#64748B', fontSize: '13px', marginBottom: '20px' },
  tablaTickets: { width: '100%', borderCollapse: 'collapse', color: '#E2E8F0' },
  filaCabecera: { backgroundColor: '#1E293B', textAlign: 'left' },
  filaDatos: { borderBottom: '1px solid #1E293B' },
  celda: { padding: '12px' },
  badgeRojo: { backgroundColor: '#450A0A', color: '#FCA5A5', padding: '4px 8px', borderRadius: '4px', fontSize: '12px', border: '1px solid #EF4444' },
  badgeAmarillo: { backgroundColor: '#422006', color: '#FDE047', padding: '4px 8px', borderRadius: '4px', fontSize: '12px', border: '1px solid #F59E0B' },
  botonAtender: { backgroundColor: '#38BDF8', color: '#0F172A', border: 'none', padding: '8px 12px', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer' }
};