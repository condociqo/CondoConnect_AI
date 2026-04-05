import React, { useState } from 'react';

export default function CapacitacionMarinaAcademy() {
  const [perfilVisualizacion, setPerfilVisualizacion] = useState('Guardias');

  return (
    <div style={estilos.contenedorAcademia}>
      <header style={estilos.headerAcademia}>
        <h3 style={estilos.titulo}>🎓 Marina Academy (Capacitación Interactiva)</h3>
        <p style={estilos.subtitulo}>Formación práctica, visual y sin aburrimiento.</p>
      </header>

      <div style={estilos.selectorPerfil}>
        <button onClick={() => setPerfilVisualizacion('Guardias')} style={perfilVisualizacion === 'Guardias' ? estilos.btnActivo : estilos.btnInactivo}>
          🛡️ Formación Operativa (Guardias)
        </button>
        <button onClick={() => setPerfilVisualizacion('Administrativos')} style={perfilVisualizacion === 'Administrativos' ? estilos.btnActivo : estilos.btnInactivo}>
          💻 Formación Administrativa (Oficina)
        </button>
      </div>

      <div style={estilos.panelVideos}>
        {perfilVisualizacion === 'Guardias' ? (
          <div>
            <h4 style={estilos.tituloSeccion}>Simulaciones de Consignas (Casos Prácticos)</h4>
            <div style={estilos.gridVideos}>
              <div style={estilos.tarjetaVideo}>
                <div style={estilos.reproductor}>▶️ Video: Protocolo de Extorsión Telefónica</div>
                <button style={estilos.botonPractica}>Comenzar Simulación Práctica</button>
              </div>
              <div style={estilos.tarjetaVideo}>
                <div style={estilos.reproductor}>▶️ Video: Manejo de Accesos con Marina</div>
                <button style={estilos.botonPractica}>Comenzar Simulación Práctica</button>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <h4 style={estilos.tituloSeccion}>Procesos y Herramientas (Playlist de Marina/YouTube)</h4>
            <div style={estilos.gridVideos}>
              <div style={estilos.tarjetaVideo}>
                <div style={estilos.reproductorYT}>[ YouTube: Curso de Facturación SAT ]</div>
                <p style={estilos.descVideo}>Módulo de cobranza para administradores.</p>
              </div>
              <div style={estilos.tarjetaVideo}>
                <div style={estilos.reproductorYT}>[ Marina AI Video: Atención al Cliente ]</div>
                <p style={estilos.descVideo}>Resolución de conflictos con inquilinos.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const estilos = {
  contenedorAcademia: { padding: '20px', backgroundColor: '#FFFBEB', borderRadius: '10px', border: '2px solid #F59E0B', fontFamily: 'sans-serif', marginTop: '20px' },
  headerAcademia: { borderBottom: '1px solid #FCD34D', paddingBottom: '15px', marginBottom: '15px' },
  titulo: { color: '#B45309', margin: 0 },
  subtitulo: { color: '#D97706', fontSize: '13px', margin: '5px 0 0 0' },
  selectorPerfil: { display: 'flex', gap: '10px', marginBottom: '20px' },
  btnActivo: { flex: 1, backgroundColor: '#F59E0B', color: 'white', padding: '12px', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' },
  btnInactivo: { flex: 1, backgroundColor: '#FEF3C7', color: '#B45309', padding: '12px', border: '1px solid #FCD34D', borderRadius: '6px', cursor: 'pointer' },
  panelVideos: { backgroundColor: 'white', padding: '20px', borderRadius: '8px' },
  tituloSeccion: { color: '#451A03', margin: '0 0 15px 0' },
  gridVideos: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px' },
  tarjetaVideo: { border: '1px solid #E2E8F0', borderRadius: '8px', padding: '10px', backgroundColor: '#F8FAFC' },
  reproductor: { height: '120px', backgroundColor: '#1E293B', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '6px', marginBottom: '10px', fontSize: '12px' },
  reproductorYT: { height: '120px', backgroundColor: '#DC2626', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '6px', marginBottom: '10px', fontSize: '12px' },
  botonPractica: { backgroundColor: '#10B981', color: 'white', border: 'none', padding: '8px', width: '100%', borderRadius: '4px', cursor: 'pointer', fontSize: '12px', fontWeight: 'bold' },
  descVideo: { fontSize: '12px', color: '#64748B', margin: 0, textAlign: 'center' }
};