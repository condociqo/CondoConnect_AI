import React, { useState } from 'react';

export default function ERPSupervisorGlobal() {
  const [jornadaIniciada, setJornadaIniciada] = useState(false);
  const [rutaOptima, setRutaOptima] = useState(null);

  const iniciarJornada = () => {
    alert("📷 Activa la cámara: Tómate una selfie con la unidad (patrulla) para iniciar tu jornada con GPS en vivo.");
    setTimeout(() => setJornadaIniciada(true), 2000);
  };

  const calcularRutaMarina = () => {
    setRutaOptima([
      { orden: 1, destino: 'Torre Zafiro (Urgente: Petición de Administrador)', tiempo: '15 min', trafico: 'Bajo' },
      { orden: 2, destino: 'Plaza Magna Comercial (Supervisión Rutinaria)', tiempo: '35 min', trafico: 'Alto' }
    ]);
  };

  return (
    <div style={estilos.contenedorERP}>
      <header style={estilos.headerERP}>
        <h3 style={estilos.titulo}>🚓 ERP Supervisión Táctica Global</h3>
        <p style={estilos.subtitulo}>Rutas dinámicas y análisis de incidencias gestionados por Marina AI.</p>
      </header>

      {!jornadaIniciada ? (
        <div style={estilos.panelInicio}>
          <h4>Inicio de Operaciones</h4>
          <p>Para recibir tu ruta global, debes registrar tu asistencia, ubicación y estado de la unidad.</p>
          <button onClick={iniciarJornada} style={estilos.botonFoto}>
            📸 Capturar Evidencia de Inicio (Patrulla y GPS)
          </button>
        </div>
      ) : (
        <div style={estilos.panelRuta}>
          <div style={estilos.analisisMarina}>
            <strong>♾️ Análisis en Tiempo Real (Marina AI):</strong> 
            <p>"He leído 3 mensajes de administradores y detectado tráfico pesado en el sur. He reprogramado tu ruta para priorizar la Torre Zafiro. Tienes autorización de desvío."</p>
          </div>

          {!rutaOptima ? (
            <button onClick={calcularRutaMarina} style={estilos.botonRuta}>🗺️ Generar Ruta Óptima</button>
          ) : (
            <div style={estilos.listaRuta}>
              {rutaOptima.map(punto => (
                <div key={punto.orden} style={estilos.tarjetaPunto}>
                  <div style={estilos.cabeceraPunto}>
                    <span style={estilos.numeroPunto}>{punto.orden}</span>
                    <h4 style={{margin: 0}}>{punto.destino}</h4>
                  </div>
                  <p>Tiempo estimado: {punto.tiempo} | Tráfico: {punto.trafico}</p>
                  <button style={estilos.botonCheckIn}>
                    📍 Llegué al Servicio (Exige Foto Evidencia)
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

const estilos = {
  contenedorERP: { padding: '20px', backgroundColor: '#0F172A', color: 'white', borderRadius: '10px', fontFamily: 'sans-serif', border: '1px solid #334155' },
  headerERP: { borderBottom: '1px solid #1E293B', paddingBottom: '15px', marginBottom: '20px' },
  titulo: { color: '#38BDF8', margin: 0 },
  subtitulo: { color: '#94A3B8', fontSize: '13px', margin: '5px 0 0 0' },
  panelInicio: { backgroundColor: '#1E293B', padding: '20px', borderRadius: '8px', textAlign: 'center' },
  botonFoto: { backgroundColor: '#3B82F6', color: 'white', border: 'none', padding: '15px', borderRadius: '8px', width: '100%', fontWeight: 'bold', marginTop: '15px', cursor: 'pointer' },
  panelRuta: { display: 'flex', flexDirection: 'column', gap: '15px' },
  analisisMarina: { backgroundColor: 'rgba(56, 189, 248, 0.1)', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #38BDF8', fontSize: '14px', fontStyle: 'italic' },
  botonRuta: { backgroundColor: '#10B981', color: 'white', border: 'none', padding: '15px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' },
  listaRuta: { display: 'flex', flexDirection: 'column', gap: '10px' },
  tarjetaPunto: { backgroundColor: '#1E293B', padding: '15px', borderRadius: '8px', border: '1px solid #334155' },
  cabeceraPunto: { display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' },
  numeroPunto: { backgroundColor: '#38BDF8', color: '#0F172A', width: '25px', height: '25px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%', fontWeight: 'bold' },
  botonCheckIn: { backgroundColor: '#F59E0B', color: '#0F172A', border: 'none', padding: '10px', borderRadius: '5px', width: '100%', fontWeight: 'bold', marginTop: '10px', cursor: 'pointer' }
};