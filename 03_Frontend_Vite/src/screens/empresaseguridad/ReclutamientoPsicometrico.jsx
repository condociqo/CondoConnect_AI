import React, { useState } from 'react';

export default function ReclutamientoPsicometrico() {
  const [candidatoAnalizado, setCandidatoAnalizado] = useState(null);

  const candidatos = [
    { id: 'CAND-01', nombre: 'José Arriaga', estado: 'Pruebas Completadas', perfil: 'Por analizar' },
    { id: 'CAND-02', nombre: 'Martín Suárez', estado: 'En proceso', perfil: 'Pendiente' }
  ];

  const analizarConMarina = (candidato) => {
    // Simula el análisis de IA de las pruebas psicométricas
    setCandidatoAnalizado({
      ...candidato,
      resultadoCleaver: 'Estable bajo presión, Alto nivel de servicio.',
      nivelEstres: 'Bajo',
      recomendacionMarina: 'Candidato ALTAMENTE RECOMENDADO para casetas de alto flujo (Corporativos).',
      apto: true
    });
  };

  return (
    <div style={estilos.contenedorRH}>
      <header style={estilos.headerRH}>
        <h3 style={estilos.titulo}>🧠 Reclutamiento y Mapeo Psicométrico AI</h3>
        <p style={estilos.subtitulo}>Análisis de perfiles para contratación segura.</p>
      </header>

      <div style={estilos.gridLayout}>
        <div style={estilos.listaCandidatos}>
          <h4>Candidatos en Proceso</h4>
          {candidatos.map(cand => (
            <div key={cand.id} style={estilos.tarjetaCandidato}>
              <p style={estilos.nombreCand}>{cand.nombre}</p>
              <p style={estilos.estadoCand}>Estatus: {cand.estado}</p>
              {cand.estado === 'Pruebas Completadas' && (
                <button onClick={() => analizarConMarina(cand)} style={estilos.botonAnalizar}>
                  ♾️ Analizar Perfil con Marina AI
                </button>
              )}
            </div>
          ))}
        </div>

        {candidatoAnalizado && (
          <div style={estilos.panelAnalisis}>
            <h4 style={estilos.tituloResultados}>Resultados Psicométricos: {candidatoAnalizado.nombre}</h4>
            
            <div style={estilos.cajaIA}>
              <p><strong>Análisis de Personalidad (Cleaver/DISC):</strong></p>
              <p>{candidatoAnalizado.resultadoCleaver}</p>
              
              <p><strong>Manejo de Estrés / Frustración:</strong> <span style={estilos.badgeVerde}>{candidatoAnalizado.nivelEstres}</span></p>
              
              <div style={estilos.dictamenMarina}>
                <strong>Dictamen Marina AI:</strong> {candidatoAnalizado.recomendacionMarina}
              </div>
            </div>

            <div style={estilos.accionesContratacion}>
              <button style={estilos.botonContratar}>✅ Aprobar y Generar Contrato Inteligente</button>
              <button style={estilos.botonRechazar}>❌ Rechazar Perfil</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const estilos = {
  contenedorRH: { padding: '20px', backgroundColor: '#FFFFFF', borderRadius: '10px', border: '1px solid #CBD5E1', fontFamily: 'sans-serif' },
  headerRH: { borderBottom: '2px solid #F1F5F9', paddingBottom: '15px', marginBottom: '20px' },
  titulo: { color: '#0F172A', margin: 0 },
  subtitulo: { color: '#64748B', fontSize: '14px', margin: '5px 0 0 0' },
  gridLayout: { display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '20px' },
  listaCandidatos: { backgroundColor: '#F8FAFC', padding: '15px', borderRadius: '8px', border: '1px solid #E2E8F0' },
  tarjetaCandidato: { backgroundColor: 'white', padding: '15px', borderRadius: '6px', border: '1px solid #CBD5E1', marginBottom: '10px' },
  nombreCand: { fontWeight: 'bold', color: '#1E293B', margin: '0 0 5px 0' },
  estadoCand: { fontSize: '12px', color: '#64748B', margin: '0 0 10px 0' },
  botonAnalizar: { backgroundColor: '#0284C7', color: 'white', border: 'none', padding: '8px', width: '100%', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold', fontSize: '12px' },
  panelAnalisis: { backgroundColor: '#0F172A', color: 'white', padding: '20px', borderRadius: '8px', border: '2px solid #00E5FF', boxShadow: '0 0 15px rgba(0, 229, 255, 0.1)' },
  tituloResultados: { color: '#00E5FF', borderBottom: '1px solid #1E293B', paddingBottom: '10px', marginBottom: '15px' },
  cajaIA: { fontSize: '14px', lineHeight: '1.6' },
  badgeVerde: { backgroundColor: '#10B981', color: 'white', padding: '2px 8px', borderRadius: '4px', fontWeight: 'bold' },
  dictamenMarina: { marginTop: '15px', backgroundColor: 'rgba(0, 229, 255, 0.1)', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #00E5FF' },
  accionesContratacion: { display: 'flex', gap: '10px', marginTop: '20px' },
  botonContratar: { flex: 1, backgroundColor: '#10B981', color: 'white', border: 'none', padding: '12px', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' },
  botonRechazar: { backgroundColor: 'transparent', color: '#EF4444', border: '1px solid #EF4444', padding: '12px', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }
};