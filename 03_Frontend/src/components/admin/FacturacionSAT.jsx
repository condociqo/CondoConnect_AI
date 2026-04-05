import React, { useState } from 'react';

export default function FacturacionSAT() {
  const [timbrando, setTimbrando] = useState(false);
  const [facturas, setFacturas] = useState([
    { folio: 'F-00101', rfc: 'XAXX010101000', receptor: 'Público en General (Depto 101)', monto: 1500.00, estado: 'Timbrada', uuid: '8a9c-4f...' },
    { folio: 'F-00102', rfc: 'GOMP850412XYZ', receptor: 'Pedro Gómez (Depto 102)', monto: 1500.00, estado: 'Timbrada', uuid: '9b1d-2x...' }
  ]);

  const emitirFacturaGlobal = () => {
    setTimbrando(true);
    // Simula la conexión con un PAC autorizado por el SAT a través de AWS API Gateway
    setTimeout(() => {
      setTimbrando(false);
      alert("📜 Factura Global timbrada exitosamente (CFDI 4.0). Archivos XML y PDF enviados a la Bóveda del Condominio.");
    }, 3000);
  };

  return (
    <div style={estilos.contenedorSAT}>
      <div style={estilos.headerSAT}>
        <h3 style={estilos.titulo}>🏛️ Emisión de Comprobantes CFDI 4.0 (SAT)</h3>
        <p style={estilos.textoLegal}>Módulo conectado mediante API autorizada (PAC).</p>
      </div>

      <div style={estilos.panelAccion}>
        <div style={estilos.infoAutomatizacion}>
          <h4>Automatización Marina IA Activa 🟢</h4>
          <p>Las facturas individuales se emiten automáticamente en el instante en que el residente realiza el pago en la aplicación.</p>
        </div>
        
        <button onClick={emitirFacturaGlobal} disabled={timbrando} style={estilos.botonTimbrar}>
          {timbrando ? 'Conectando con el SAT...' : '🧾 Emitir Factura Global (Pagos en Efectivo/No facturados)'}
        </button>
      </div>

      <h4 style={estilos.subtitulo}>Historial de Facturas (Mes Actual)</h4>
      <table style={estilos.tablaSAT}>
        <thead>
          <tr style={estilos.filaCabecera}>
            <th style={estilos.celda}>Folio Interno</th>
            <th style={estilos.celda}>Receptor</th>
            <th style={estilos.celda}>RFC</th>
            <th style={estilos.celda}>Monto</th>
            <th style={estilos.celda}>Estatus SAT</th>
            <th style={estilos.celda}>Descargas</th>
          </tr>
        </thead>
        <tbody>
          {facturas.map((fac, idx) => (
            <tr key={idx} style={estilos.filaDatos}>
              <td style={estilos.celda}><strong>{fac.folio}</strong></td>
              <td style={estilos.celda}>{fac.receptor}</td>
              <td style={estilos.celda}>{fac.rfc}</td>
              <td style={estilos.celda}>${fac.monto.toFixed(2)}</td>
              <td style={estilos.celda}><span style={estilos.badgeTimbrada}>✔️ {fac.estado}</span></td>
              <td style={estilos.celda}>
                <button style={estilos.botonDescargaXML}>XML</button>
                <button style={estilos.botonDescargaPDF}>PDF</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const estilos = {
  contenedorSAT: { padding: '20px', backgroundColor: '#FFFFFF', borderRadius: '10px', border: '1px solid #E2E8F0', marginTop: '20px', fontFamily: 'sans-serif' },
  headerSAT: { borderBottom: '2px solid #0F172A', paddingBottom: '10px', marginBottom: '20px' },
  titulo: { color: '#0F172A', margin: 0 },
  textoLegal: { color: '#64748B', fontSize: '13px', margin: '5px 0 0 0' },
  panelAccion: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#F8FAFC', padding: '20px', borderRadius: '8px', border: '1px dashed #CBD5E1', marginBottom: '20px', flexWrap: 'wrap', gap: '15px' },
  infoAutomatizacion: { flex: 1, minWidth: '250px' },
  botonTimbrar: { backgroundColor: '#0284C7', color: 'white', padding: '15px 25px', borderRadius: '8px', border: 'none', fontWeight: 'bold', fontSize: '14px', cursor: 'pointer' },
  subtitulo: { color: '#334155', marginBottom: '10px' },
  tablaSAT: { width: '100%', borderCollapse: 'collapse', fontSize: '14px' },
  filaCabecera: { backgroundColor: '#F1F5F9', textAlign: 'left' },
  filaDatos: { borderBottom: '1px solid #E2E8F0' },
  celda: { padding: '12px', color: '#1E293B' },
  badgeTimbrada: { backgroundColor: '#D1FAE5', color: '#065F46', padding: '5px 8px', borderRadius: '5px', fontWeight: 'bold' },
  botonDescargaXML: { backgroundColor: '#38BDF8', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '3px', marginRight: '5px', cursor: 'pointer', fontWeight: 'bold' },
  botonDescargaPDF: { backgroundColor: '#EF4444', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '3px', cursor: 'pointer', fontWeight: 'bold' }
};