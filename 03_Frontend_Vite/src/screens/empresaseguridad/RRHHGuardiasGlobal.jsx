import React, { useState } from 'react';

export default function RRHHGuardiasGlobal() {
  const [guardiaActivo, setGuardiaActivo] = useState({
    id: 'G-7842', nombre: 'Luis Alberto Gómez', pais: 'México',
    documentos: 'Pendiente Verificación', riesgoHonestidad: 'Evaluando',
    solicitudAdelanto: 1500, contrato: 'Vigente (Renovación en 30 días)'
  });

  const [fase, setFase] = useState('dashboard'); // dashboard, credencial, liquidacion

  const verificarAntecedentes = () => {
    alert("🔍 Marina AI: Conectando con bases de datos gubernamentales y buró de crédito/antecedentes...\n\n✅ Domicilio verificado. Sin antecedentes penales. Nivel de confianza: ALTO.");
  };

  const emitirCredencial = () => {
    setFase('credencial');
  };

  const calcularFiniquito = () => {
    alert(`⚖️ Calculando liquidación legal para ${guardiaActivo.pais}...\nMarina ha procesado: Días laborados, aguinaldo proporcional, prima vacacional y prestaciones de ley.\n\nEl documento de finiquito está listo para firma biométrica.`);
  };

  return (
    <div style={estilos.contenedorRRHH}>
      <header style={estilos.headerRRHH}>
        <h3 style={estilos.titulo}>👔 Recursos Humanos Global y Nómina Legal</h3>
        <p style={estilos.subtitulo}>Gestión de prestaciones, verificación de honestidad y expedientes digitales.</p>
      </header>

      {fase === 'dashboard' && (
        <div style={estilos.gridPanel}>
          {/* Columna de Expediente y Verificación */}
          <div style={estilos.tarjetaModulo}>
            <h4>Expediente: {guardiaActivo.nombre}</h4>
            <p><strong>Ubicación Ley:</strong> {guardiaActivo.pais} (Aplica IMSS/INFONAVIT)</p>
            <p><strong>Estatus Contrato:</strong> {guardiaActivo.contrato}</p>
            
            <div style={estilos.cajaVerificacion}>
              <p>Auditoría de Honestidad (Background Check)</p>
              <button onClick={verificarAntecedentes} style={estilos.botonVerificar}>
                🛡️ Verificar Domicilio y Antecedentes Oficiales
              </button>
            </div>

            <div style={estilos.accionesDoc}>
              <button onClick={emitirCredencial} style={estilos.botonAccion}>🪪 Generar Credencial Inteligente</button>
              <button style={estilos.botonAccion}>📁 Abrir Bóveda de Documentos</button>
            </div>
          </div>

          {/* Columna de Nómina y Prestaciones */}
          <div style={estilos.tarjetaModulo}>
            <h4>Gestión Financiera del Elemento</h4>
            <div style={estilos.alertaAdelanto}>
              <p><strong>Solicitud de Adelanto de Nómina:</strong> ${guardiaActivo.solicitudAdelanto} MXN</p>
              <button style={estilos.botonAprobar}>✅ Aprobar y Dispersar a Tarjeta</button>
            </div>

            <h5 style={{marginTop: '20px'}}>Acciones Legales de Baja</h5>
            <button onClick={calcularFiniquito} style={estilos.botonLiquidacion}>
              ⚖️ Calcular Finiquito / Liquidación Global
            </button>
          </div>
        </div>
      )}

      {fase === 'credencial' && (
        <div style={estilos.panelCredencial}>
          <div style={estilos.credencialFisica}>
            <div style={estilos.fotoGafete}>[ FOTO ]</div>
            <h3>{guardiaActivo.nombre}</h3>
            <p>ID: {guardiaActivo.id}</p>
            <p style={estilos.qrGafete}>[ QR DE ACCESO ]</p>
            <p style={{fontSize: '10px', marginTop: '10px'}}>Válido mediante Marina AI</p>
          </div>
          <button onClick={() => setFase('dashboard')} style={estilos.botonRegresar}>Volver al Dashboard</button>
          <button style={estilos.botonImprimir}>🖨️ Imprimir / Enviar a Wallet Móvil</button>
        </div>
      )}
    </div>
  );
}

const estilos = {
  contenedorRRHH: { padding: '20px', backgroundColor: '#F8FAFC', borderRadius: '10px', border: '1px solid #CBD5E1', fontFamily: 'sans-serif', marginTop: '20px' },
  headerRRHH: { borderBottom: '2px solid #E2E8F0', paddingBottom: '15px', marginBottom: '20px' },
  titulo: { color: '#0F172A', margin: 0 },
  subtitulo: { color: '#64748B', fontSize: '13px', margin: '5px 0 0 0' },
  gridPanel: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' },
  tarjetaModulo: { backgroundColor: 'white', padding: '20px', borderRadius: '8px', border: '1px solid #E2E8F0' },
  cajaVerificacion: { backgroundColor: '#FEF2F2', padding: '15px', borderRadius: '6px', border: '1px dashed #EF4444', margin: '15px 0' },
  botonVerificar: { backgroundColor: '#DC2626', color: 'white', border: 'none', padding: '10px', width: '100%', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer' },
  accionesDoc: { display: 'flex', flexDirection: 'column', gap: '10px' },
  botonAccion: { backgroundColor: '#0F172A', color: 'white', border: 'none', padding: '10px', borderRadius: '5px', cursor: 'pointer' },
  alertaAdelanto: { backgroundColor: '#EFF6FF', padding: '15px', borderRadius: '6px', border: '1px solid #3B82F6' },
  botonAprobar: { backgroundColor: '#10B981', color: 'white', border: 'none', padding: '10px', width: '100%', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer', marginTop: '10px' },
  botonLiquidacion: { backgroundColor: '#F59E0B', color: '#0F172A', border: 'none', padding: '12px', width: '100%', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer' },
  panelCredencial: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' },
  credencialFisica: { width: '250px', height: '400px', backgroundColor: 'white', borderRadius: '15px', border: '2px solid #CBD5E1', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' },
  fotoGafete: { width: '100px', height: '100px', backgroundColor: '#E2E8F0', borderRadius: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '15px' },
  qrGafete: { width: '80px', height: '80px', border: '2px solid #000', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 'auto' },
  botonRegresar: { backgroundColor: 'transparent', color: '#64748B', border: 'none', textDecoration: 'underline', cursor: 'pointer' },
  botonImprimir: { backgroundColor: '#3B82F6', color: 'white', border: 'none', padding: '12px 25px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }
};