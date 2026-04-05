import React, { useState, useEffect } from 'react';

export default function MonitoreoCCTV() {
  // Simulamos 4 cámaras principales para el MVP
  const [camaras, setCamaras] = useState([
    { id: 'CAM-01', ubicacion: 'Acceso Principal Vehicular', alerta: false },
    { id: 'CAM-02', ubicacion: 'Lobby / Recepción', alerta: false },
    { id: 'CAM-03', ubicacion: 'Estacionamiento Subterráneo', alerta: false },
    { id: 'CAM-04', ubicacion: 'Perímetro Barda Norte', alerta: false }
  ]);

  const [camaraExpandida, setCamaraExpandida] = useState(null);
  const [mensajeMarina, setMensajeMarina] = useState('Monitoreo activo. Sistema estable.');

  // Simulamos a Marina detectando algo inusual después de unos segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      activarAlertaMarina('CAM-04', '⚠️ Movimiento inusual detectado cerca de la barda norte.');
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  const activarAlertaMarina = (idCamara, mensaje) => {
    // Marina expande automáticamente la cámara con el problema
    setCamaraExpandida(camaras.find(c => c.id === idCamara));
    setMensajeMarina(mensaje);
    
    // Marcamos la cámara con alerta visual
    setCamaras(prev => prev.map(c => c.id === idCamara ? { ...c, alerta: true } : c));
  };

  const expandirManualmente = (camara) => {
    setCamaraExpandida(camara);
    setMensajeMarina(`Viendo ${camara.ubicacion} en detalle.`);
  };

  const restaurarCuadricula = () => {
    setCamaraExpandida(null);
    setMensajeMarina('Monitoreo en cuadrícula activo. Sistema estable.');
    // Limpiamos alertas al regresar
    setCamaras(prev => prev.map(c => ({ ...c, alerta: false })));
  };

  return (
    <div style={estilos.contenedorCCTV}>
      <div style={estilos.cabecera}>
        <h3 style={estilos.titulo}>📹 Centro de Monitoreo Inteligente</h3>
        <div style={estilos.estadoMarina}>
          <span style={estilos.iconoIA}>🧠</span> {mensajeMarina}
        </div>
      </div>

      {!camaraExpandida ? (
        // Vista de Cuadrícula Normal
        <div style={estilos.gridCamaras}>
          {camaras.map(cam => (
            <div 
              key={cam.id} 
              style={cam.alerta ? estilos.camaraAlerta : estilos.camaraNormal}
              onClick={() => expandirManualmente(cam)}
            >
              <div style={estilos.feedVideo}>
                <span style={estilos.simuladorVideo}>[ FEED {cam.id} ]</span>
              </div>
              <div style={estilos.infoCamara}>
                <span>{cam.ubicacion}</span>
                <span style={estilos.indicadorVivo}>🔴 REC</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        // Vista Expandida (Pantalla Completa Simulada)
        <div style={estilos.vistaExpandida}>
          <div style={estilos.feedVideoGrande}>
            <span style={estilos.simuladorVideoGrande}>
              [ FEED EN VIVO: {camaraExpandida.id} ]
            </span>
          </div>
          <div style={estilos.controlesExpandidos}>
            <h4>{camaraExpandida.ubicacion}</h4>
            <div style={estilos.botonesAccion}>
              <button style={estilos.botonPTZ}>🕹️ Control Mover Cámara</button>
              <button style={estilos.botonCaptura}>📸 Tomar Foto Evidencia</button>
              <button onClick={restaurarCuadricula} style={estilos.botonRegresar}>
                🔙 Volver a Cuadrícula
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const estilos = {
  contenedorCCTV: { padding: '20px', backgroundColor: '#020617', borderRadius: '10px', marginTop: '15px', color: 'white', border: '1px solid #1E293B' },
  cabecera: { display: 'flex', flexDirection: 'column', marginBottom: '15px' },
  titulo: { color: '#E2E8F0', margin: '0 0 10px 0' },
  estadoMarina: { backgroundColor: 'rgba(56, 189, 248, 0.1)', color: '#38BDF8', padding: '10px', borderRadius: '5px', border: '1px solid #0284C7', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '10px' },
  iconoIA: { fontSize: '18px' },
  gridCamaras: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '10px' },
  camaraNormal: { backgroundColor: '#0F172A', borderRadius: '5px', overflow: 'hidden', cursor: 'pointer', border: '1px solid #334155', transition: 'transform 0.2s' },
  camaraAlerta: { backgroundColor: '#450A0A', borderRadius: '5px', overflow: 'hidden', cursor: 'pointer', border: '2px solid #EF4444', animation: 'pulseBorder 1.5s infinite' },
  feedVideo: { height: '100px', backgroundColor: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center' },
  simuladorVideo: { color: '#475569', fontFamily: 'monospace' },
  infoCamara: { padding: '8px', fontSize: '12px', display: 'flex', justifyContent: 'space-between', backgroundColor: '#1E293B' },
  indicadorVivo: { color: '#EF4444', fontWeight: 'bold' },
  vistaExpandida: { display: 'flex', flexDirection: 'column', gap: '15px' },
  feedVideoGrande: { width: '100%', height: '300px', backgroundColor: 'black', border: '2px solid #38BDF8', borderRadius: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center' },
  simuladorVideoGrande: { color: '#38BDF8', fontSize: '24px', fontFamily: 'monospace' },
  controlesExpandidos: { backgroundColor: '#0F172A', padding: '15px', borderRadius: '8px' },
  botonesAccion: { display: 'flex', gap: '10px', marginTop: '10px', flexWrap: 'wrap' },
  botonPTZ: { flex: 1, backgroundColor: '#334155', color: 'white', border: 'none', padding: '10px', borderRadius: '5px', cursor: 'pointer' },
  botonCaptura: { flex: 1, backgroundColor: '#10B981', color: 'white', border: 'none', padding: '10px', borderRadius: '5px', cursor: 'pointer' },
  botonRegresar: { flex: 1, backgroundColor: '#DC2626', color: 'white', border: 'none', padding: '10px', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }
};