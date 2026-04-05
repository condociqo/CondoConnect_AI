import React, { useState } from 'react';

// Componente para escaneo de códigos QR y códigos de barras (Paquetería/Visitas)
export default function ScannerCaseta() {
  const [escaneoActivo, setEscaneoActivo] = useState(false);
  const [resultado, setResultado] = useState(null);

  const iniciarEscaneo = () => {
    setEscaneoActivo(true);
    setResultado(null);
    
    // Simulación del proceso de la cámara y reconocimiento
    setTimeout(() => {
      setEscaneoActivo(false);
      setResultado({
        tipo: 'Visita_QR', // Puede ser 'Visita_QR' o 'Paquete'
        datos: 'Acceso Autorizado: Depto 402 - Familia Pérez'
      });
    }, 2500);
  };

  return (
    <div style={estilos.contenedorControles}>
      <h3 style={estilos.titulo}>Escáner de Caseta</h3>
      
      <div style={estilos.areaCamara}>
        {escaneoActivo ? (
          <div style={estilos.camaraActiva}>
            <div style={estilos.lineaEscaneo}></div>
            <p style={estilos.textoCamara}>Cámara activa... Apunte al código QR o paquete.</p>
          </div>
        ) : (
          <div style={estilos.camaraInactiva}>
            <p>Cámara inactiva</p>
          </div>
        )}
      </div>

      <button onClick={iniciarEscaneo} style={estilos.botonEscanear}>
        📷 {escaneoActivo ? 'Escaneando...' : 'Activar Escáner'}
      </button>

      {resultado && (
        <div style={estilos.alertaExito}>
          <strong>✅ {resultado.tipo}:</strong> {resultado.datos}
        </div>
      )}
    </div>
  );
}

const estilos = {
  contenedorControles: { padding: '15px', backgroundColor: '#FFFFFF', borderRadius: '8px', border: '1px solid #E2E8F0', marginTop: '15px' },
  titulo: { color: '#0F172A', fontSize: '18px', marginBottom: '10px' },
  areaCamara: { width: '100%', height: '200px', backgroundColor: '#000000', borderRadius: '8px', marginBottom: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden', position: 'relative' },
  camaraActiva: { textAlign: 'center', color: '#10B981' },
  camaraInactiva: { color: '#64748B' },
  lineaEscaneo: { width: '100%', height: '2px', backgroundColor: '#10B981', position: 'absolute', top: '50%', boxShadow: '0 0 10px #10B981', animation: 'scan 2s infinite' },
  textoCamara: { position: 'relative', zIndex: 2, backgroundColor: 'rgba(0,0,0,0.5)', padding: '5px' },
  botonEscanear: { backgroundColor: '#3B82F6', color: 'white', padding: '12px', border: 'none', borderRadius: '8px', width: '100%', fontSize: '16px', fontWeight: 'bold' },
  alertaExito: { marginTop: '15px', padding: '10px', backgroundColor: '#D1FAE5', color: '#065F46', borderRadius: '6px', border: '1px solid #34D399' }
};