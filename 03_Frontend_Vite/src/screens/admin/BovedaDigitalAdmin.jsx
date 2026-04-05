import React, { useState } from 'react';

export default function BovedaDigitalAdmin() {
  const [residentes, setResidentes] = useState([
    { depto: '101', nombre: 'Familia Gómez', estado: 'Verificado', docs: { ine: true, comprobante: true, vehiculos: true } },
    { depto: '102', nombre: 'Carlos Ruiz', estado: 'Pendiente', docs: { ine: true, comprobante: false, vehiculos: true } }
  ]);

  const [documentoAbierto, setDocumentoAbierto] = useState(null);

  const revisarDocumentos = (residente) => {
    setDocumentoAbierto(residente);
  };

  return (
    <div style={estilos.contenedorBoveda}>
      <div style={estilos.encabezadoISO}>
        <h3 style={estilos.tituloISO}>🛡️ Bóveda Digital de Residentes</h3>
        <p style={estilos.textoISO}>Encriptación AES-256 | Cumplimiento ISO 27001 Activo</p>
      </div>

      {!documentoAbierto ? (
        <table style={estilos.tabla}>
          <thead>
            <tr style={estilos.filaCabecera}>
              <th style={estilos.celda}>Departamento</th>
              <th style={estilos.celda}>Titular</th>
              <th style={estilos.celda}>Estatus Expediente</th>
              <th style={estilos.celda}>Acción</th>
            </tr>
          </thead>
          <tbody>
            {residentes.map(res => (
              <tr key={res.depto} style={estilos.filaDatos}>
                <td style={estilos.celda}><strong>{res.depto}</strong></td>
                <td style={estilos.celda}>{res.nombre}</td>
                <td style={estilos.celda}>
                  <span style={res.estado === 'Verificado' ? estilos.badgeVerde : estilos.badgeAlerta}>
                    {res.estado}
                  </span>
                </td>
                <td style={estilos.celda}>
                  <button onClick={() => revisarDocumentos(res)} style={estilos.botonRevisar}>
                    {res.estado === 'Pendiente' ? '🔍 Auditar Docs' : '📁 Ver Bóveda'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div style={estilos.panelAuditoria}>
          <div style={estilos.headerAuditoria}>
            <h4>Expediente Depto: {documentoAbierto.depto} - {documentoAbierto.nombre}</h4>
            <button onClick={() => setDocumentoAbierto(null)} style={estilos.botonCerrar}>X Volver</button>
          </div>
          
          <div style={estilos.gridDocs}>
            <div style={estilos.tarjetaDoc}>
              <p>🪪 <strong>Identificación Oficial (INE)</strong></p>
              <div style={estilos.simuladorDoc}>[ DOCUMENTO ENCRIPTADO ]</div>
              <p style={estilos.analisisMarina}>🧠 Marina AI: ID Válida. Coincide con titular.</p>
              <button style={estilos.botonAprobar}>✅ Aprobar</button>
            </div>

            <div style={estilos.tarjetaDoc}>
              <p>📄 <strong>Comprobante de Domicilio / Escritura</strong></p>
              {documentoAbierto.docs.comprobante ? (
                <>
                  <div style={estilos.simuladorDoc}>[ DOCUMENTO ENCRIPTADO ]</div>
                  <button style={estilos.botonAprobar}>✅ Aprobar</button>
                </>
              ) : (
                <div style={estilos.docFaltante}>FALTA CARGAR DOCUMENTO</div>
              )}
            </div>
          </div>
          
          <button style={estilos.botonSolicitar}>📧 Enviar recordatorio al residente por App</button>
        </div>
      )}
    </div>
  );
}

const estilos = {
  contenedorBoveda: { padding: '20px', backgroundColor: '#FFFFFF', borderRadius: '10px', border: '2px solid #CBD5E1', marginTop: '20px', fontFamily: 'sans-serif' },
  encabezadoISO: { backgroundColor: '#0F172A', padding: '15px', borderRadius: '8px', color: 'white', marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  tituloISO: { margin: 0, color: '#38BDF8' },
  textoISO: { margin: 0, fontSize: '12px', color: '#10B981', fontWeight: 'bold' },
  tabla: { width: '100%', borderCollapse: 'collapse' },
  filaCabecera: { backgroundColor: '#F1F5F9', textAlign: 'left', borderBottom: '2px solid #CBD5E1' },
  filaDatos: { borderBottom: '1px solid #E2E8F0' },
  celda: { padding: '12px', color: '#1E293B' },
  badgeVerde: { backgroundColor: '#D1FAE5', color: '#065F46', padding: '5px 10px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold' },
  badgeAlerta: { backgroundColor: '#FEF2F2', color: '#991B1B', padding: '5px 10px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold', border: '1px solid #FCA5A5' },
  botonRevisar: { backgroundColor: '#3B82F6', color: 'white', border: 'none', padding: '8px 15px', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' },
  panelAuditoria: { backgroundColor: '#F8FAFC', padding: '20px', borderRadius: '8px', border: '1px solid #E2E8F0' },
  headerAuditoria: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #CBD5E1', paddingBottom: '10px', marginBottom: '15px' },
  botonCerrar: { backgroundColor: 'transparent', border: 'none', color: '#EF4444', fontWeight: 'bold', cursor: 'pointer' },
  gridDocs: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' },
  tarjetaDoc: { backgroundColor: 'white', padding: '15px', borderRadius: '8px', border: '1px solid #CBD5E1', textAlign: 'center' },
  simuladorDoc: { height: '120px', backgroundColor: '#1E293B', color: '#38BDF8', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '5px', marginBottom: '10px', fontFamily: 'monospace' },
  analisisMarina: { fontSize: '12px', color: '#10B981', fontStyle: 'italic', marginBottom: '10px' },
  botonAprobar: { backgroundColor: '#10B981', color: 'white', border: 'none', padding: '8px 20px', borderRadius: '5px', cursor: 'pointer', width: '100%' },
  docFaltante: { height: '120px', backgroundColor: '#FEF2F2', color: '#EF4444', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '2px dashed #FCA5A5', borderRadius: '5px', fontWeight: 'bold' },
  botonSolicitar: { width: '100%', padding: '15px', backgroundColor: '#0F172A', color: 'white', border: 'none', borderRadius: '8px', marginTop: '20px', fontWeight: 'bold', cursor: 'pointer' }
};