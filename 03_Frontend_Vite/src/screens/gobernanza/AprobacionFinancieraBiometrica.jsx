import React, { useState } from 'react';

export default function AprobacionFinancieraBiometrica() {
  const [estadoFirma, setEstadoFirma] = useState('esperando'); // esperando, escaneando, aprobado, rechazado

  const ordenPendiente = {
    folio: 'ORD-8842',
    solicitante: 'Admin Local (Torre Zafiro)',
    concepto: 'Insumos de Seguridad y Mantenimiento (Amazon/ML)',
    monto: 13000.00
  };

  const ejecutarFirmaFacial = () => {
    setEstadoFirma('escaneando');
    
    // Simulación de AWS Rekognition (Liveness Detection + Face Match)
    setTimeout(() => {
      // Si el rostro coincide con el perfil del Directivo:
      setEstadoFirma('aprobado');
    }, 3500);
  };

  return (
    <div style={estilos.contenedorFirma}>
      <h2 style={estilos.tituloRojo}>⚠️ Autorización Financiera Requerida</h2>
      
      <div style={estilos.tarjetaOrden}>
        <p><strong>Folio:</strong> {ordenPendiente.folio}</p>
        <p><strong>Solicita:</strong> {ordenPendiente.solicitante}</p>
        <p><strong>Concepto:</strong> {ordenPendiente.concepto}</p>
        <h3 style={estilos.montoOrden}>Total a liberar: ${ordenPendiente.monto.toLocaleString('es-MX')} MXN</h3>
      </div>

      {estadoFirma === 'esperando' && (
        <div style={estilos.panelInstrucciones}>
          <p>Para liberar los fondos de la Bóveda de Monetización y procesar la compra automáticamente, se requiere su <strong>Firma Biométrica Indelegable</strong>.</p>
          <button onClick={ejecutarFirmaFacial} style={estilos.botonEscanear}>
            👁️ Iniciar Escaneo Facial (Aprobar Gasto)
          </button>
        </div>
      )}

      {estadoFirma === 'escaneando' && (
        <div style={estilos.panelEscaneo}>
          <div style={estilos.visorCamara}>
            <div style={estilos.mallaReconocimiento}></div>
          </div>
          <p style={estilos.textoCargando}>Marina validando identidad viva (Liveness Check)...</p>
          <p style={estilos.textoCargando}>Comparando vectores con Perfil Directivo en AWS...</p>
        </div>
      )}

      {estadoFirma === 'aprobado' && (
        <div style={estilos.panelAprobado}>
          <h1 style={{fontSize: '50px', margin: 0}}>🔐➡️🔓</h1>
          <h2 style={estilos.textoVerde}>Identidad Confirmada. Gasto Aprobado.</h2>
          <p>La compra se ha procesado exitosamente en Amazon/Mercado Libre. El dinero se dedujo del Fondo de Monetización protegido.</p>
          <p style={estilos.hashLegal}>Hash de Transacción: 8x9fa...42b (Registrado en Blockchain)</p>
        </div>
      )}
    </div>
  );
}

const estilos = {
  contenedorFirma: { padding: '30px', backgroundColor: '#FEF2F2', borderRadius: '12px', border: '3px solid #EF4444', textAlign: 'center', fontFamily: 'sans-serif', maxWidth: '600px', margin: '20px auto' },
  tituloRojo: { color: '#B91C1C', marginTop: 0, textTransform: 'uppercase' },
  tarjetaOrden: { backgroundColor: 'white', padding: '20px', borderRadius: '8px', border: '1px solid #FCA5A5', textAlign: 'left', marginBottom: '20px' },
  montoOrden: { color: '#0F172A', fontSize: '24px', borderTop: '1px solid #E2E8F0', paddingTop: '15px', marginTop: '10px' },
  panelInstrucciones: { backgroundColor: '#F8FAFC', padding: '20px', borderRadius: '8px' },
  botonEscanear: { backgroundColor: '#0F172A', color: 'white', border: 'none', padding: '15px 20px', borderRadius: '8px', fontSize: '18px', fontWeight: 'bold', width: '100%', cursor: 'pointer', marginTop: '15px', boxShadow: '0 4px 6px rgba(0,0,0,0.2)' },
  panelEscaneo: { backgroundColor: '#000', padding: '20px', borderRadius: '12px' },
  visorCamara: { width: '200px', height: '200px', margin: '0 auto', border: '3px dashed #00E5FF', borderRadius: '50%', position: 'relative', overflow: 'hidden' },
  mallaReconocimiento: { width: '100%', height: '5px', backgroundColor: '#00E5FF', position: 'absolute', animation: 'scanUpDown 2s infinite' },
  textoCargando: { color: '#00E5FF', fontFamily: 'monospace', marginTop: '10px' },
  panelAprobado: { backgroundColor: '#F0FDF4', padding: '30px', borderRadius: '12px', border: '2px solid #10B981' },
  textoVerde: { color: '#065F46', margin: '15px 0' },
  hashLegal: { color: '#64748B', fontSize: '11px', fontFamily: 'monospace' },
  // Keyframes for animation would be added in CSS (scanUpDown)
};