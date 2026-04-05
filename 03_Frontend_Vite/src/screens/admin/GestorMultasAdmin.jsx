import React, { useState } from 'react';

export default function GestorMultasAdmin() {
  const [reportes, setReportes] = useState([
    { id: 'REP-001', depto: '304', falta: 'Estacionamiento Indebido', fecha: 'Hoy, 08:30 AM', guardia: 'Víctor M.', estado: 'Pendiente' },
    { id: 'REP-002', depto: '105', falta: 'Exceso de Ruido (Madrugada)', fecha: 'Ayer, 03:15 AM', guardia: 'Juan P.', estado: 'Aplicada' }
  ]);

  const [reporteActivo, setReporteActivo] = useState(null);
  const [montoMulta, setMontoMulta] = useState(500);

  const aplicarMulta = () => {
    alert(`⚖️ Multa de $${montoMulta} MXN aplicada al Depto ${reporteActivo.depto}. Marina ha sumado este cargo a su próximo estado de cuenta y enviado la notificación oficial.`);
    setReporteActivo(null);
  };

  const descartarReporte = () => {
    alert("Reporte archivado sin sanción.");
    setReporteActivo(null);
  };

  return (
    <div style={estilos.contenedorAdmin}>
      <h3 style={estilos.titulo}>⚖️ Tribunal del Condominio (Gestor de Infracciones)</h3>
      <p style={estilos.subtitulo}>Revisa las evidencias capturadas por el equipo de seguridad y aplica sanciones.</p>

      {!reporteActivo ? (
        <table style={estilos.tabla}>
          <thead>
            <tr style={estilos.filaCabecera}>
              <th style={estilos.celda}>ID Reporte</th>
              <th style={estilos.celda}>Depto</th>
              <th style={estilos.celda}>Infracción</th>
              <th style={estilos.celda}>Oficial Reportó</th>
              <th style={estilos.celda}>Acción</th>
            </tr>
          </thead>
          <tbody>
            {reportes.map(rep => (
              <tr key={rep.id} style={estilos.filaDatos}>
                <td style={estilos.celda}>{rep.id}</td>
                <td style={estilos.celda}><strong>{rep.depto}</strong></td>
                <td style={estilos.celda}>{rep.falta}</td>
                <td style={estilos.celda}>{rep.guardia}</td>
                <td style={estilos.celda}>
                  {rep.estado === 'Pendiente' ? (
                    <button onClick={() => setReporteActivo(rep)} style={estilos.botonRevisar}>🔍 Revisar Evidencia</button>
                  ) : (
                    <span style={estilos.badgeAplicada}>Sanción Aplicada</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div style={estilos.panelRevision}>
          <div style={estilos.cabeceraRevision}>
            <h4>Reporte: {reporteActivo.id} | Depto Infractor: {reporteActivo.depto}</h4>
            <button onClick={() => setReporteActivo(null)} style={estilos.botonCerrar}>X Cerrar</button>
          </div>

          <div style={estilos.gridEvidencia}>
            <div style={estilos.cajaFoto}>
              <div style={estilos.simuladorFoto}>[ FOTOGRAFÍA / VIDEO CON METADATOS GPS ]</div>
              <p style={estilos.selloTiempo}>Capturado: {reporteActivo.fecha}</p>
            </div>
            
            <div style={estilos.cajaResolucion}>
              <h5>Resolución Administrativa</h5>
              <p><strong>Falta:</strong> {reporteActivo.falta}</p>
              <label style={estilos.etiqueta}>Monto de la Sanción (MXN):</label>
              <input 
                type="number" 
                value={montoMulta} 
                onChange={(e) => setMontoMulta(e.target.value)}
                style={estilos.inputMonto} 
              />
              <div style={estilos.grupoBotonesAccion}>
                <button onClick={aplicarMulta} style={estilos.botonAplicar}>Ejecutar Multa Oficial</button>
                <button onClick={descartarReporte} style={estilos.botonDescartar}>Descartar (Falsa Alarma)</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const estilos = {
  contenedorAdmin: { padding: '20px', backgroundColor: '#FFFFFF', borderRadius: '10px', border: '1px solid #E2E8F0', marginTop: '20px', fontFamily: 'sans-serif' },
  titulo: { color: '#0F172A', margin: '0 0 5px 0' },
  subtitulo: { color: '#64748B', fontSize: '14px', marginBottom: '20px' },
  tabla: { width: '100%', borderCollapse: 'collapse' },
  filaCabecera: { backgroundColor: '#F8FAFC', textAlign: 'left', borderBottom: '2px solid #CBD5E1' },
  filaDatos: { borderBottom: '1px solid #E2E8F0' },
  celda: { padding: '12px', color: '#1E293B' },
  botonRevisar: { backgroundColor: '#F59E0B', color: 'white', border: 'none', padding: '8px 15px', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' },
  badgeAplicada: { backgroundColor: '#FEE2E2', color: '#991B1B', padding: '5px 10px', borderRadius: '15px', fontSize: '12px', fontWeight: 'bold' },
  panelRevision: { backgroundColor: '#F8FAFC', padding: '20px', borderRadius: '8px', border: '2px solid #F59E0B' },
  cabeceraRevision: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #CBD5E1', paddingBottom: '10px', marginBottom: '15px' },
  botonCerrar: { backgroundColor: 'transparent', color: '#EF4444', border: 'none', fontWeight: 'bold', cursor: 'pointer' },
  gridEvidencia: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' },
  cajaFoto: { backgroundColor: 'white', padding: '15px', borderRadius: '8px', border: '1px solid #E2E8F0', textAlign: 'center' },
  simuladorFoto: { height: '200px', backgroundColor: '#1E293B', color: '#38BDF8', display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: 'monospace', borderRadius: '5px' },
  selloTiempo: { fontSize: '12px', color: '#64748B', marginTop: '10px' },
  cajaResolucion: { display: 'flex', flexDirection: 'column', gap: '15px' },
  etiqueta: { fontWeight: 'bold', color: '#475569' },
  inputMonto: { padding: '12px', borderRadius: '6px', border: '1px solid #CBD5E1', fontSize: '18px', fontWeight: 'bold', color: '#0F172A' },
  grupoBotonesAccion: { display: 'flex', flexDirection: 'column', gap: '10px', marginTop: 'auto' },
  botonAplicar: { backgroundColor: '#EF4444', color: 'white', padding: '15px', borderRadius: '8px', border: 'none', fontWeight: 'bold', cursor: 'pointer' },
  botonDescartar: { backgroundColor: '#94A3B8', color: 'white', padding: '15px', borderRadius: '8px', border: 'none', fontWeight: 'bold', cursor: 'pointer' }
};