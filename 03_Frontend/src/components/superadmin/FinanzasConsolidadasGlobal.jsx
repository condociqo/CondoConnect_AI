import React from 'react';

export default function FinanzasConsolidadasGlobal() {
  const consolidado = {
    ingresosMantenimiento: 4150000.00,
    fondoMonetizacionTotal: 125400.50, // Amazon + Fast-Track de todos los edificios
    facturasEmitidas: 345,
    pagosProveedores: 850000.00
  };

  return (
    <div style={estilos.contenedorFinanzas}>
      <h3 style={estilos.titulo}>📊 Tesorería y Consolidación Financiera (Global)</h3>
      <p style={estilos.subtitulo}>Métricas combinadas de las 3 propiedades administradas.</p>

      <div style={estilos.gridTesoreria}>
        <div style={estilos.cajaMantenimiento}>
          <h5>Recaudación Total (Mantenimientos/Rentas)</h5>
          <h2>${consolidado.ingresosMantenimiento.toLocaleString('es-MX')}</h2>
        </div>

        <div style={estilos.cajaMonetizacion}>
          <h5>💎 Fondo Global Monetización Marina AI</h5>
          <h2>${consolidado.fondoMonetizacionTotal.toLocaleString('es-MX')}</h2>
          <button style={estilos.botonTransferir}>Transferir a Cuenta Maestra</button>
        </div>

        <div style={estilos.cajaGastos}>
          <h5>Cuentas por Pagar (Proveedores Generales)</h5>
          <h2>${consolidado.pagosProveedores.toLocaleString('es-MX')}</h2>
        </div>
      </div>

      <div style={estilos.panelReportes}>
        <h4>Descargar Reportes Fiscales (SAT)</h4>
        <div style={estilos.grupoBotonesReporte}>
          <button style={estilos.botonReporte}>📥 Resumen de CFDI 4.0 Emitidos</button>
          <button style={estilos.botonReporte}>📥 Reporte de Morosidad Global</button>
          <button style={estilos.botonReporte}>📥 Balanza de Comprobación</button>
        </div>
      </div>
    </div>
  );
}

const estilos = {
  contenedorFinanzas: { padding: '20px', backgroundColor: '#F8FAFC', borderRadius: '10px', border: '1px solid #CBD5E1', marginTop: '20px', fontFamily: 'sans-serif' },
  titulo: { color: '#0F172A', margin: '0 0 5px 0' },
  subtitulo: { color: '#64748B', margin: '0 0 20px 0', fontSize: '14px' },
  gridTesoreria: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '20px' },
  cajaMantenimiento: { backgroundColor: 'white', padding: '20px', borderRadius: '8px', borderLeft: '5px solid #10B981', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' },
  cajaMonetizacion: { backgroundColor: '#0F172A', color: 'white', padding: '20px', borderRadius: '8px', border: '2px solid #38BDF8', boxShadow: '0 5px 15px rgba(56, 189, 248, 0.2)' },
  cajaGastos: { backgroundColor: 'white', padding: '20px', borderRadius: '8px', borderLeft: '5px solid #EF4444', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' },
  botonTransferir: { backgroundColor: '#38BDF8', color: '#0F172A', padding: '10px', border: 'none', borderRadius: '5px', fontWeight: 'bold', marginTop: '10px', cursor: 'pointer', width: '100%' },
  panelReportes: { backgroundColor: 'white', padding: '20px', borderRadius: '8px', border: '1px solid #E2E8F0' },
  grupoBotonesReporte: { display: 'flex', gap: '15px', marginTop: '15px', flexWrap: 'wrap' },
  botonReporte: { flex: 1, backgroundColor: '#F1F5F9', color: '#1E293B', padding: '12px', border: '1px solid #CBD5E1', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }
};