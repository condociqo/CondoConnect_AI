import React, { useState } from 'react';

export default function EntregaTurno() {
  const [paso, setPaso] = useState('resumen'); // resumen, audio, completado

  // Datos recopilados automáticamente por Marina durante el turno
  const resumenTurno = {
    visitasRegistradas: 28,
    paquetesCaseta: 5, // Paquetes que el siguiente turno debe entregar
    incidentes: 1,
    llavesAmenidades: 'Completas'
  };

  const finalizarTurno = () => {
    setPaso('completado');
    // Aquí se cierra la sesión en el dispositivo y se envía el reporte
  };

  return (
    <div style={estilos.contenedorCierre}>
      <h3 style={estilos.titulo}>🔄 Entrega de Turno a Relevo</h3>

      {paso === 'resumen' && (
        <div style={estilos.panelResumen}>
          <p style={estilos.textoMarina}>Marina ha preparado el resumen de tu jornada:</p>
          <ul style={estilos.listaResumen}>
            <li>🚗 Visitas procesadas: <strong>{resumenTurno.visitasRegistradas}</strong></li>
            <li>📦 Paquetes por entregar: <strong>{resumenTurno.paquetesCaseta}</strong></li>
            <li>⚠️ Incidentes reportados: <strong>{resumenTurno.incidentes}</strong></li>
            <li>🔑 Llavero de amenidades: <strong>{resumenTurno.llavesAmenidades}</strong></li>
          </ul>
          <button onClick={() => setPaso('audio')} style={estilos.botonContinuar}>
            Validar Resumen y Siguiente
          </button>
        </div>
      )}

      {paso === 'audio' && (
        <div style={estilos.panelAudio}>
          <p>¿Deseas dejar un mensaje de voz o consigna para tu compañero de relevo?</p>
          <button style={estilos.botonGrabar}>🎙️ Grabar Consigna Verbal</button>
          <p style={estilos.textoAyuda}>Opcional. Marina lo transcribirá y se lo leerá al inicio de su turno.</p>
          
          <button onClick={finalizarTurno} style={estilos.botonFinalizar}>
            🔒 Cerrar Sesión y Entregar Turno
          </button>
        </div>
      )}

      {paso === 'completado' && (
        <div style={estilos.panelExito}>
          <h2>¡Buen trabajo!</h2>
          <p>Tu turno ha finalizado correctamente. La bitácora ha sido sellada y enviada a la Empresa de Seguridad y al Administrador.</p>
          <p style={estilos.despedida}>"Descansa, Víctor. Nos vemos en tu próximo turno." - Marina ♾️</p>
        </div>
      )}
    </div>
  );
}

const estilos = {
  contenedorCierre: { padding: '20px', backgroundColor: '#F1F5F9', borderRadius: '10px', border: '2px solid #38BDF8', marginTop: '15px' },
  titulo: { color: '#0F172A', margin: '0 0 15px 0' },
  panelResumen: { backgroundColor: 'white', padding: '15px', borderRadius: '8px' },
  textoMarina: { color: '#0284C7', fontStyle: 'italic', marginBottom: '10px' },
  listaResumen: { listStyleType: 'none', padding: 0, margin: '0 0 15px 0', lineHeight: '2' },
  botonContinuar: { backgroundColor: '#3B82F6', color: 'white', padding: '12px', width: '100%', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' },
  panelAudio: { textAlign: 'center', backgroundColor: 'white', padding: '15px', borderRadius: '8px' },
  botonGrabar: { backgroundColor: '#EF4444', color: 'white', padding: '15px', borderRadius: '50px', border: 'none', width: '100%', marginBottom: '10px', fontWeight: 'bold' },
  textoAyuda: { fontSize: '12px', color: '#64748B', marginBottom: '15px' },
  botonFinalizar: { backgroundColor: '#0F172A', color: 'white', padding: '12px', width: '100%', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' },
  panelExito: { textAlign: 'center', color: '#166534', backgroundColor: '#F0FDF4', padding: '20px', borderRadius: '8px', border: '1px solid #4ADE80' },
  despedida: { fontStyle: 'italic', color: '#0F172A', fontWeight: 'bold', marginTop: '15px' }
};