import React, { useState } from 'react';

export default function ControlAmenidades() {
  const [formulario, setFormulario] = useState({
    residente: '', depto: '', evento: 'Cumpleaños', personas: '', horaInicio: '', pago: 'Confirmado'
  });
  const [paso, setPaso] = useState('registro'); // registro, evidencia, activo

  const abrirPuertaRemota = () => {
    alert("📡 Marina ha enviado la señal IP. La puerta de la amenidad ha sido desbloqueada.");
  };

  const guardarEvidencia = (e) => {
    e.preventDefault();
    setPaso('evidencia');
  };

  return (
    <div style={estilos.contenedorAmenidades}>
      <h3 style={estilos.titulo}>🎉 Gestión de Amenidades</h3>
      
      {paso === 'registro' && (
        <form onSubmit={guardarEvidencia} style={estilos.formulario}>
          <div style={estilos.gridCampos}>
            <input type="text" placeholder="Residente" required style={estilos.input} onChange={e => setFormulario({...formulario, residente: e.target.value})} />
            <input type="text" placeholder="Depto" required style={estilos.input} onChange={e => setFormulario({...formulario, depto: e.target.value})} />
            <input type="number" placeholder="No. Personas" required style={estilos.input} onChange={e => setFormulario({...formulario, personas: e.target.value})} />
            <input type="time" placeholder="Hora Inicio" required style={estilos.input} onChange={e => setFormulario({...formulario, horaInicio: e.target.value})} />
          </div>
          <p style={estilos.infoPago}>Depósito/Pago: <strong>{formulario.pago}</strong></p>
          <button type="submit" style={estilos.botonPrimario}>Siguiente: Capturar Evidencias Previas</button>
        </form>
      )}

      {paso === 'evidencia' && (
        <div style={estilos.panelEvidencia}>
          <p>Toma fotos del estado actual antes de entregar las llaves/acceso.</p>
          <button style={estilos.botonCamara}>📸 Activar Cámara (Condiciones Iniciales)</button>
          <button onClick={() => setPaso('activo')} style={estilos.botonPrimario}>Confirmar Entrega y Activar</button>
        </div>
      )}

      {paso === 'activo' && (
        <div style={estilos.panelActivo}>
          <h4 style={estilos.textoAlerta}>🔴 Evento en Progreso</h4>
          <p><strong>Depto {formulario.depto}</strong> - {formulario.personas} personas</p>
          
          {/* Apertura Remota */}
          <button onClick={abrirPuertaRemota} style={estilos.botonApertura}>
            🔓 Abrir Puerta de Amenidad vía IP
          </button>

          <button onClick={() => setPaso('registro')} style={estilos.botonCerrar}>
            Terminar Evento (Capturar Evidencia Final)
          </button>
        </div>
      )}
    </div>
  );
}

const estilos = {
  contenedorAmenidades: { padding: '20px', backgroundColor: '#FFF7ED', border: '1px solid #FDBA74', borderRadius: '10px', marginTop: '15px' },
  titulo: { color: '#C2410C', margin: '0 0 15px 0' },
  formulario: { display: 'flex', flexDirection: 'column', gap: '10px' },
  gridCampos: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' },
  input: { padding: '12px', borderRadius: '6px', border: '1px solid #FDBA74' },
  infoPago: { color: '#15803D', fontSize: '14px', backgroundColor: '#DCFCE7', padding: '8px', borderRadius: '5px' },
  botonPrimario: { backgroundColor: '#F97316', color: 'white', padding: '12px', borderRadius: '8px', border: 'none', fontWeight: 'bold', width: '100%', cursor: 'pointer' },
  panelEvidencia: { textAlign: 'center', backgroundColor: 'white', padding: '15px', borderRadius: '8px', border: '1px dashed #F97316' },
  botonCamara: { backgroundColor: '#475569', color: 'white', padding: '10px', borderRadius: '5px', border: 'none', marginBottom: '10px', width: '100%' },
  panelActivo: { backgroundColor: 'white', padding: '15px', borderRadius: '8px', border: '2px solid #EF4444' },
  textoAlerta: { color: '#EF4444', margin: '0 0 10px 0' },
  botonApertura: { backgroundColor: '#0EA5E9', color: 'white', padding: '12px', width: '100%', border: 'none', borderRadius: '8px', fontWeight: 'bold', marginBottom: '10px' },
  botonCerrar: { backgroundColor: '#0F172A', color: 'white', padding: '12px', width: '100%', border: 'none', borderRadius: '8px', fontWeight: 'bold' }
};