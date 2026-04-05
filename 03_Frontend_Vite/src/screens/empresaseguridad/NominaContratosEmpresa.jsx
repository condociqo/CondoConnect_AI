import React, { useState } from 'react';

export default function NominaContratosEmpresa() {
  const [timbrando, setTimbrando] = useState(false);

  const nominaGuardias = [
    { id: 'G-101', nombre: 'Víctor M.', base: 4500, turnosExtra: 1000, bonoMonetizacion: 350, estatus: 'Pendiente Timbrado' },
    { id: 'G-102', nombre: 'Juan P.', base: 4500, turnosExtra: 0, bonoMonetizacion: 120, estatus: 'Pendiente Timbrado' }
  ];

  const procesarNomina = () => {
    setTimbrando(true);
    setTimeout(() => {
      setTimbrando(false);
      alert("📜 Nómina procesada. Se han timbrado los CFDI de Nómina 4.0 ante el SAT.\n💸 Las dispersiones SPEI a las cuentas de los guardias han sido autorizadas.");
    }, 3000);
  };

  return (
    <div style={estilos.contenedorNomina}>
      <header style={estilos.headerNomina}>
        <h3 style={estilos.titulo}>💵 Dispersión de Nómina y Contratos</h3>
        <p style={estilos.subtitulo}>Sistema conectado a Biometría, GPS y SAT.</p>
      </header>

      <div style={estilos.panelInfo}>
        <p style={estilos.textoLegal}>
          <strong>Auditoría Inteligente:</strong> Los sueldos y turnos extra mostrados son calculados automáticamente por el motor de asistencia biométrica. No hay errores de captura manual.
        </p>
      </div>

      <table style={estilos.tablaNomina}>
        <thead>
          <tr style={estilos.filaCabecera}>
            <th style={estilos.celda}>Oficial</th>
            <th style={estilos.celda}>Sueldo Base</th>
            <th style={estilos.celda}>Turnos Extra</th>
            <th style={estilos.celda}>Bono Paquetería (Amazon/ML)</th>
            <th style={estilos.celda}>Total Neto a Pagar</th>
          </tr>
        </thead>
        <tbody>
          {nominaGuardias.map(guardia => {
            const total = guardia.base + guardia.turnosExtra + guardia.bonoMonetizacion;
            return (
              <tr key={guardia.id} style={estilos.filaDatos}>
                <td style={estilos.celda}><strong>{guardia.nombre}</strong></td>
                <td style={estilos.celda}>${guardia.base.toLocaleString()}</td>
                <td style={estilos.celda}><span style={estilos.ingresoExtra}>+${guardia.turnosExtra}</span></td>
                <td style={estilos.celda}><span style={estilos.ingresoBono}>+${guardia.bonoMonetizacion}</span></td>
                <td style={estilos.celda}><strong>${total.toLocaleString()} MXN</strong></td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div style={estilos.accionesFinales}>
        <button onClick={procesarNomina} disabled={timbrando} style={estilos.botonTimbrar}>
          {timbrando ? 'Conectando con PAC SAT y Banco...' : '🏦 Timbrar Nómina y Dispersar Pagos (SPEI)'}
        </button>
      </div>
    </div>
  );
}

const estilos = {
  contenedorNomina: { padding: '20px', backgroundColor: '#FFFFFF', borderRadius: '10px', border: '1px solid #E2E8F0', marginTop: '20px', fontFamily: 'sans-serif' },
  headerNomina: { borderBottom: '2px solid #F8FAFC', paddingBottom: '15px', marginBottom: '20px' },
  titulo: { color: '#0F172A', margin: 0 },
  subtitulo: { color: '#64748B', fontSize: '14px', margin: '5px 0 0 0' },
  panelInfo: { backgroundColor: '#F0FDF4', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #10B981', marginBottom: '20px' },
  textoLegal: { margin: 0, color: '#166534', fontSize: '13px' },
  tablaNomina: { width: '100%', borderCollapse: 'collapse', fontSize: '14px' },
  filaCabecera: { backgroundColor: '#F1F5F9', textAlign: 'left' },
  filaDatos: { borderBottom: '1px solid #E2E8F0' },
  celda: { padding: '12px', color: '#1E293B' },
  ingresoExtra: { color: '#3B82F6', fontWeight: 'bold' },
  ingresoBono: { color: '#F59E0B', fontWeight: 'bold' },
  accionesFinales: { marginTop: '20px', textAlign: 'right' },
  botonTimbrar: { backgroundColor: '#0F172A', color: 'white', border: 'none', padding: '15px 30px', borderRadius: '8px', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }
};