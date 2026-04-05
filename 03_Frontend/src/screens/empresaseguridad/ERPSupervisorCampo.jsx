import React, { useState } from 'react';

export default function ERPSupervisorCampo() {
  const [visitaActiva, setVisitaActiva] = useState(false);
  const [evaluacion, setEvaluacion] = useState({
    uniforme: 'Completo y Limpio',
    conocimientoConsignas: 'Alto',
    estadoAlerta: 'Óptimo',
    comentarios: ''
  });

  const checkInGPS = () => {
    alert("📍 Check-In Exitoso: Coordenadas validadas en Torre Zafiro Residencial. Iniciando protocolo de supervisión.");
    setVisitaActiva(true);
  };

  const enviarReporte = (e) => {
    e.preventDefault();
    alert("✅ Reporte de Supervisión enviado a la base. Marina ha registrado la evaluación en el expediente del guardia Víctor M.");
    setVisitaActiva(false);
  };

  return (
    <div style={estilos.contenedorApp}>
      <header style={estilos.cabeceraERP}>
        <h3 style={estilos.titulo}>🚓 ERP Supervisor en Ruta</h3>
        <p style={estilos.subtitulo}>Ruta Asignada: Zona Centro-Sur</p>
      </header>

      {!visitaActiva ? (
        <div style={estilos.panelRuta}>
          <h4>Próximo Punto de Supervisión</h4>
          <div style={estilos.tarjetaPunto}>
            <p style={estilos.nombreCondo}>Torre Zafiro Residencial</p>
            <p style={estilos.detallePunto}>Elementos en Turno: 2 | Última visita: Hace 4 hrs</p>
            <button onClick={checkInGPS} style={estilos.botonCheckIn}>
              📍 Hacer Check-In con GPS y Comenzar
            </button>
          </div>
        </div>
      ) : (
        <div style={estilos.panelEvaluacion}>
          <div style={estilos.headerActivo}>
            <h4>Evaluación de Elemento: Víctor M. (Guardia)</h4>
            <span style={estilos.badgeLive}>En Sitio</span>
          </div>

          <form onSubmit={enviarReporte} style={estilos.formulario}>
            <label style={estilos.etiqueta}>Estado del Uniforme y Equipo</label>
            <select value={evaluacion.uniforme} onChange={e => setEvaluacion({...evaluacion, uniforme: e.target.value})} style={estilos.input}>
              <option>Completo y Limpio</option>
              <option>Falta Equipo Menor</option>
              <option>Incumplimiento de Código</option>
            </select>

            <label style={estilos.etiqueta}>Dominio de Consignas (Manual)</label>
            <select value={evaluacion.conocimientoConsignas} onChange={e => setEvaluacion({...evaluacion, conocimientoConsignas: e.target.value})} style={estilos.input}>
              <option>Alto (Conoce procedimientos)</option>
              <option>Medio (Requiere repaso)</option>
              <option>Bajo (Se programará capacitación)</option>
            </select>

            <button type="button" style={estilos.botonFoto}>📸 Capturar Evidencia (Selfie con el Guardia)</button>

            <textarea 
              placeholder="Observaciones y necesidades del elemento (Ej. Requiere relevo para comer, pide lámpara nueva...)" 
              value={evaluacion.comentarios}
              onChange={e => setEvaluacion({...evaluacion, comentarios: e.target.value})}
              style={estilos.textarea}
            />

            <button type="submit" style={estilos.botonEnviar}>
              Firmar y Enviar Reporte a Base
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

const estilos = {
  contenedorApp: { padding: '20px', backgroundColor: '#F8FAFC', minHeight: '100vh', fontFamily: 'sans-serif', maxWidth: '480px', margin: '0 auto', border: '1px solid #CBD5E1' },
  cabeceraERP: { backgroundColor: '#0F172A', color: 'white', padding: '20px', borderRadius: '10px', marginBottom: '20px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' },
  titulo: { margin: 0, fontSize: '20px' },
  subtitulo: { color: '#94A3B8', fontSize: '14px', margin: '5px 0 0 0' },
  panelRuta: { backgroundColor: 'white', padding: '15px', borderRadius: '8px', border: '1px solid #E2E8F0' },
  tarjetaPunto: { backgroundColor: '#F1F5F9', padding: '15px', borderRadius: '6px', borderLeft: '4px solid #3B82F6', marginTop: '10px' },
  nombreCondo: { fontWeight: 'bold', color: '#1E293B', fontSize: '18px', margin: '0 0 5px 0' },
  detallePunto: { color: '#64748B', fontSize: '13px', margin: '0 0 15px 0' },
  botonCheckIn: { backgroundColor: '#3B82F6', color: 'white', border: 'none', padding: '12px', width: '100%', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' },
  panelEvaluacion: { backgroundColor: 'white', padding: '15px', borderRadius: '8px', border: '2px solid #3B82F6' },
  headerActivo: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #E2E8F0', paddingBottom: '10px', marginBottom: '15px' },
  badgeLive: { backgroundColor: '#10B981', color: 'white', padding: '4px 8px', borderRadius: '4px', fontSize: '12px', fontWeight: 'bold' },
  formulario: { display: 'flex', flexDirection: 'column', gap: '15px' },
  etiqueta: { fontSize: '14px', fontWeight: 'bold', color: '#475569' },
  input: { padding: '12px', borderRadius: '6px', border: '1px solid #CBD5E1', fontSize: '15px' },
  botonFoto: { backgroundColor: '#0F172A', color: 'white', border: 'none', padding: '12px', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' },
  textarea: { padding: '12px', borderRadius: '6px', border: '1px solid #CBD5E1', minHeight: '80px', fontSize: '14px' },
  botonEnviar: { backgroundColor: '#10B981', color: 'white', border: 'none', padding: '15px', borderRadius: '6px', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer', marginTop: '10px' }
};