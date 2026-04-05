import React, { useState } from 'react';

export default function OperacionesEmergenciaSOS() {
  const [alertaActiva, setAlertaActiva] = useState(true); // Simulamos que un guardia presionó el botón de pánico
  const [logisticaRelevo, setLogisticaRelevo] = useState(true); // Simulamos una falta de personal

  const enviarPatrulla = () => {
    alert("🚓 Ruta enviada al celular del Supervisor en Ruta.\nDestino 1: Recoger a Guardia Relevo (Juan P.).\nDestino 2: Traslado a Torre Zafiro para cubrir cobertura.");
    setLogisticaRelevo(false);
  };

  return (
    <div style={estilos.contenedorTactico}>
      <header style={estilos.headerTactico}>
        <h3 style={estilos.titulo}>🚨 Centro de Operaciones Tácticas y Coberturas</h3>
        <p style={estilos.textoPrivacidad}>🔒 Privacidad CCTV Zero Trust: Las cámaras internas solo son accesibles durante emergencias verificadas.</p>
      </header>

      <div style={estilos.gridOperaciones}>
        {/* Panel de Emergencia y CCTV */}
        <div style={estilos.panelSOS}>
          <h4 style={estilos.tituloPanel}>Monitoreo de Emergencias (SOS)</h4>
          
          {alertaActiva ? (
            <div style={estilos.alertaRoja}>
              <h2 style={{margin: '0 0 10px 0'}}>¡ALERTA SOS ACTIVADA!</h2>
              <p><strong>Origen:</strong> Caseta Principal (Residencial Las Palmas)</p>
              <p><strong>Elemento:</strong> Víctor M.</p>
              
              <div style={estilos.cctvDesbloqueado}>
                <p style={{color: '#10B981', fontWeight: 'bold'}}>🔓 Protocolo Cero Confianza: ACCESO A CCTV LIBERADO TEMPORALMENTE</p>
                <div style={estilos.simuladorVideo}>[ FEED DE VIDEO EN VIVO ]</div>
              </div>
              
              <button onClick={() => setAlertaActiva(false)} style={estilos.botonResolver}>
                ✔️ Emergencia Resuelta (Bloquear Cámaras)
              </button>
            </div>
          ) : (
            <div style={estilos.estadoTranquilo}>
              <p>✅ Sin alertas activas.</p>
              <p style={estilos.candado}>🔒 ACCESO A CCTV BLOQUEADO POR PRIVACIDAD</p>
            </div>
          )}
        </div>

        {/* Panel de Logística de Coberturas */}
        <div style={estilos.panelLogistica}>
          <h4 style={estilos.tituloPanel}>Logística de Turnos y Coberturas</h4>
          
          {logisticaRelevo ? (
            <div style={estilos.alertaAmarilla}>
              <h5>⚠️ Elemento Faltante Detectado</h5>
              <p>El guardia del turno matutino en 'Plaza Magna' no registró asistencia biométrica.</p>
              <p><strong>Marina AI ha encontrado un reemplazo:</strong> Juan P. aceptó el turno extra desde su App.</p>
              
              <button onClick={enviarPatrulla} style={estilos.botonRuta}>
                🗺️ Ordenar a Patrulla (Supervisor) recoger y trasladar elemento
              </button>
            </div>
          ) : (
            <div style={estilos.estadoTranquilo}>
              <p>✅ Cobertura de servicios al 100%.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const estilos = {
  contenedorTactico: { padding: '20px', backgroundColor: '#020617', borderRadius: '10px', color: 'white', fontFamily: 'sans-serif', marginTop: '20px', border: '1px solid #1E293B' },
  headerTactico: { borderBottom: '1px solid #334155', paddingBottom: '15px', marginBottom: '20px' },
  titulo: { color: '#EF4444', margin: 0 },
  textoPrivacidad: { color: '#10B981', fontSize: '13px', margin: '5px 0 0 0', fontWeight: 'bold' },
  gridOperaciones: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' },
  panelSOS: { backgroundColor: '#0F172A', padding: '20px', borderRadius: '8px', border: '1px solid #334155' },
  tituloPanel: { color: '#E2E8F0', marginTop: 0, borderBottom: '1px dashed #334155', paddingBottom: '10px' },
  alertaRoja: { backgroundColor: '#450A0A', padding: '20px', borderRadius: '8px', border: '2px solid #EF4444', animation: 'pulseBorder 2s infinite' },
  cctvDesbloqueado: { backgroundColor: '#000', padding: '15px', borderRadius: '6px', marginTop: '15px', border: '1px solid #10B981' },
  simuladorVideo: { height: '150px', backgroundColor: '#1E293B', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#38BDF8', marginTop: '10px' },
  botonResolver: { backgroundColor: '#10B981', color: 'white', border: 'none', padding: '12px', width: '100%', borderRadius: '5px', marginTop: '15px', fontWeight: 'bold', cursor: 'pointer' },
  estadoTranquilo: { backgroundColor: '#064E3B', padding: '20px', borderRadius: '8px', textAlign: 'center', border: '1px solid #10B981', color: '#34D399' },
  candado: { fontSize: '12px', color: '#94A3B8', marginTop: '10px' },
  panelLogistica: { backgroundColor: '#0F172A', padding: '20px', borderRadius: '8px', border: '1px solid #334155' },
  alertaAmarilla: { backgroundColor: '#422006', padding: '20px', borderRadius: '8px', border: '2px solid #F59E0B' },
  botonRuta: { backgroundColor: '#F59E0B', color: '#0F172A', border: 'none', padding: '12px', width: '100%', borderRadius: '5px', marginTop: '15px', fontWeight: 'bold', cursor: 'pointer' }
};