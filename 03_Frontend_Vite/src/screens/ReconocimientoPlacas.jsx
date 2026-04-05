import React, { useState } from 'react';

export default function ReconocimientoPlacas() {
  const [estadoCamara, setEstadoCamara] = useState('activa'); // activa, detectado
  const [datosVehiculo, setDatosVehiculo] = useState(null);

  const simularDeteccionVehiculo = () => {
    setEstadoCamara('detectando');
    setTimeout(() => {
      setEstadoCamara('detectado');
      setDatosVehiculo({
        placa: 'XYZ-987-A',
        estado: 'AUTORIZADO',
        residente: 'Familia Gómez',
        depto: 'Villa 12'
      });
    }, 2000);
  };

  return (
    <div style={estilos.contenedorPlacas}>
      <div style={estilos.cabeceraCamara}>
        <h3 style={estilos.titulo}>Cámara Vehicular LPR</h3>
        <span style={estilos.indicadorVivo}>🔴 EN VIVO</span>
      </div>

      <div style={estilos.visorVideo} onClick={simularDeteccionVehiculo}>
        {estadoCamara === 'activa' && <p style={estilos.textoOverlay}>Esperando vehículo...</p>}
        {estadoCamara === 'detectando' && <p style={estilos.textoOverlay}>Analizando matrícula...</p>}
        
        {estadoCamara === 'detectado' && (
          <div style={estilos.overlayDetectado}>
            <div style={estilos.cuadroMatricula}>{datosVehiculo.placa}</div>
          </div>
        )}
      </div>

      {datosVehiculo && (
        <div style={estilos.panelResultados}>
          <h4 style={estilos.textoExito}>✔️ ACCESO {datosVehiculo.estado}</h4>
          <p><strong>Residente:</strong> {datosVehiculo.residente} ({datosVehiculo.depto})</p>
          <button onClick={() => setEstadoCamara('activa')} style={estilos.botonBarrera}>
            Abrir Barrera / Siguiente Vehículo
          </button>
        </div>
      )}
    </div>
  );
}

const estilos = {
  contenedorPlacas: { backgroundColor: '#1E293B', padding: '15px', borderRadius: '10px', marginTop: '15px', color: 'white' },
  cabeceraCamara: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' },
  titulo: { margin: 0, fontSize: '16px', color: '#E2E8F0' },
  indicadorVivo: { color: '#EF4444', fontSize: '12px', fontWeight: 'bold', animation: 'pulse 1.5s infinite' },
  visorVideo: { width: '100%', height: '200px', backgroundColor: '#000000', borderRadius: '8px', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', border: '1px solid #475569' },
  textoOverlay: { color: '#38BDF8', backgroundColor: 'rgba(0,0,0,0.6)', padding: '5px 10px', borderRadius: '5px' },
  overlayDetectado: { position: 'absolute', bottom: '20px' },
  cuadroMatricula: { backgroundColor: '#FBBF24', color: 'black', padding: '5px 15px', fontSize: '24px', fontWeight: 'bold', border: '3px solid black', borderRadius: '5px', fontFamily: 'monospace' },
  panelResultados: { marginTop: '15px', backgroundColor: '#064E3B', padding: '15px', borderRadius: '8px', border: '1px solid #10B981' },
  textoExito: { color: '#34D399', margin: '0 0 5px 0', fontSize: '18px' },
  botonBarrera: { backgroundColor: '#10B981', color: 'white', width: '100%', padding: '12px', border: 'none', borderRadius: '5px', marginTop: '10px', fontWeight: 'bold' }
};