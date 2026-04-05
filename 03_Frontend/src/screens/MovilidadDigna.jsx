import React, { useState } from 'react';

export default function MovilidadDigna() {
  const [rutaCalculada, setRutaCalculada] = useState(false);
  const [descargandoMapa, setDescargandoMapa] = useState(false);

  const calcularRutaMarina = () => {
    // Aquí Marina analiza rutas de camión, metro o tren ligero
    setRutaCalculada(true);
  };

  return (
    <div style={estilos.contenedorMovilidad}>
      <video autoPlay loop muted style={estilos.videoFondo}>
        <source src="/assets/universo_infinito_fondo.mp4" type="video/mp4" />
      </video>
      <div style={estilos.capaAzul}></div>

      <div style={estilos.contenido}>
        <h2 style={estilos.titulo}>Movilidad Digna ♾️</h2>
        <p style={estilos.tagline}>Marina guía tu camino al servicio</p>

        <div style={estilos.cajaBusqueda}>
          <input type="text" placeholder="📍 Mi ubicación actual" style={estilos.input} />
          <input type="text" placeholder="🏁 Destino: Nombre del Servicio/Condominio" style={estilos.input} />
          <button onClick={calcularRutaMarina} style={estilos.botonRuta}>Trazar Ruta con Marina</button>
        </div>

        {rutaCalculada && (
          <div style={estilos.panelRuta}>
            <div style={estilos.infoMarina}>
              <p><strong>Marina dice:</strong> "Víctor, para llegar al Corporativo Zafiro, toma la ruta 121. La parada está a 200 metros. El costo es de $11.00 y necesitas tu tarjeta de prepago."</p>
            </div>
            
            <div style={estilos.detallesRuta}>
              <div style={estilos.paso}>🚍 <strong>Ruta 121</strong> - Baja en Parada "Pino Suárez"</div>
              <div style={estilos.paso}>🚶 <strong>Caminata</strong> - 5 min por zona iluminada</div>
              <div style={estilos.costo}>💰 Costo Total: $11.00 MXN</div>
            </div>

            <button 
              onClick={() => setDescargandoMapa(true)} 
              style={descargandoMapa ? estilos.botonDescargado : estilos.botonOffline}
            >
              {descargandoMapa ? '✅ Mapa Guardado (Modo Offline Activo)' : '💾 Descargar Mapa para Uso sin Datos'}
            </button>
          </div>
        )}

        <div style={estilos.areaEmergencia}>
          <button style={estilos.botonPanico}>🚨 SOS - ASISTENCIA INMEDIATA</button>
        </div>
      </div>
    </div>
  );
}

const estilos = {
  contenedorMovilidad: { position: 'relative', width: '100%', height: '100vh', overflow: 'hidden', fontFamily: 'sans-serif' },
  videoFondo: { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 1 },
  capaAzul: { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(11, 25, 44, 0.8)', zIndex: 2 },
  contenido: { position: 'relative', zIndex: 3, padding: '20px', display: 'flex', flexDirection: 'column', height: '100%' },
  titulo: { color: '#00E5FF', margin: '10px 0 0 0', textAlign: 'center', fontSize: '28px', fontWeight: 'bold' },
  tagline: { color: 'white', textAlign: 'center', marginBottom: '20px', fontSize: '14px', fontStyle: 'italic' },
  cajaBusqueda: { backgroundColor: 'rgba(30, 41, 59, 0.9)', padding: '20px', borderRadius: '15px', border: '1px solid #00E5FF' },
  input: { width: '100%', padding: '12px', marginBottom: '10px', borderRadius: '8px', border: '1px solid #334155', backgroundColor: '#0f172a', color: 'white' },
  botonRuta: { width: '100%', padding: '15px', backgroundColor: '#00E5FF', color: '#0f172a', border: 'none', borderRadius: '8px', fontWeight: 'bold', fontSize: '16px' },
  panelRuta: { marginTop: '20px', backgroundColor: 'white', borderRadius: '12px', padding: '15px', color: '#0f172a' },
  infoMarina: { backgroundColor: '#E0F2FE', padding: '10px', borderRadius: '8px', borderLeft: '5px solid #00E5FF', marginBottom: '10px' },
  detallesRuta: { padding: '10px' },
  paso: { marginBottom: '8px', fontSize: '14px' },
  costo: { fontWeight: 'bold', color: '#16a34a', borderTop: '1px solid #e2e8f0', paddingTop: '10px' },
  botonOffline: { width: '100%', marginTop: '10px', padding: '10px', backgroundColor: '#f97316', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 'bold' },
  botonDescargado: { width: '100%', marginTop: '10px', padding: '10px', backgroundColor: '#10b981', color: 'white', border: 'none', borderRadius: '8px' },
  areaEmergencia: { marginTop: 'auto', marginBottom: '20px' },
  botonPanico: { width: '100%', padding: '20px', backgroundColor: '#ef4444', color: 'white', border: 'none', borderRadius: '12px', fontSize: '18px', fontWeight: '900', boxShadow: '0 0 20px rgba(239, 68, 68, 0.5)' }
};