import React, { useState } from 'react';

export default function AsistenciaBiometricaGPS() {
  const [estado, setEstado] = useState('esperando'); // esperando, validando, exito, error
  const [datosGPS, setDatosGPS] = useState(null);

  const iniciarPaseDeLista = () => {
    setEstado('validando');
    
    // 1. Solicitar GPS
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((posicion) => {
        setDatosGPS({ lat: posicion.coords.latitude, lng: posicion.coords.longitude });
        
        // 2. Simular validación facial de AWS Rekognition
        setTimeout(() => {
          setEstado('exito');
        }, 2500);
      }, () => {
        setEstado('error');
        alert("Error: Debes permitir el acceso al GPS para iniciar turno.");
      });
    }
  };

  return (
    <div style={estilos.contenedorAsistencia}>
      <h3 style={estilos.titulo}>⏱️ Pase de Lista y Asistencia</h3>
      <p style={estilos.descripcion}>Validación biométrica y ubicación GPS requerida.</p>

      {estado === 'esperando' && (
        <button onClick={iniciarPaseDeLista} style={estilos.botonIniciar}>
          📷 Iniciar Turno (Biometría + GPS)
        </button>
      )}

      {estado === 'validando' && (
        <div style={estilos.panelValidacion}>
          <div style={estilos.escanerActivo}></div>
          <p>Marina está verificando tu rostro y coordenadas...</p>
        </div>
      )}

      {estado === 'exito' && (
        <div style={estilos.panelExito}>
          <h4 style={estilos.textoExito}>✅ Asistencia Registrada</h4>
          <p><strong>Identidad:</strong> Confirmada (AWS Rekognition)</p>
          <p><strong>Ubicación:</strong> Validada en Caseta ({datosGPS?.lat.toFixed(3)}, {datosGPS?.lng.toFixed(3)})</p>
          <p style={estilos.mensajeMarina}>"Buen turno, Víctor. Tu hora de entrada ha sido guardada."</p>
        </div>
      )}
    </div>
  );
}

const estilos = {
  contenedorAsistencia: { padding: '20px', backgroundColor: '#FFFFFF', borderRadius: '10px', border: '1px solid #E2E8F0', marginTop: '15px' },
  titulo: { color: '#0F172A', margin: '0 0 5px 0' },
  descripcion: { color: '#64748B', fontSize: '14px', marginBottom: '15px' },
  botonIniciar: { backgroundColor: '#3B82F6', color: 'white', padding: '15px', borderRadius: '8px', border: 'none', width: '100%', fontSize: '16px', fontWeight: 'bold' },
  panelValidacion: { textAlign: 'center', padding: '20px', backgroundColor: '#F8FAFC', borderRadius: '8px', border: '1px dashed #3B82F6' },
  escanerActivo: { width: '80px', height: '80px', border: '4px solid #3B82F6', borderRadius: '50%', margin: '0 auto 10px auto', borderTopColor: 'transparent', animation: 'spin 1s linear infinite' },
  panelExito: { backgroundColor: '#F0FDF4', padding: '15px', borderRadius: '8px', border: '1px solid #22C55E' },
  textoExito: { color: '#15803D', margin: '0 0 10px 0' },
  mensajeMarina: { fontStyle: 'italic', color: '#0369A1', marginTop: '10px', backgroundColor: '#E0F2FE', padding: '10px', borderRadius: '5px' }
};