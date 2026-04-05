import React, { useState } from 'react';

export default function RegistroVisitaID() {
  const [procesando, setProcesando] = useState(false);
  const [datosExtraidos, setDatosExtraidos] = useState(null);

  const escanearIdentificacion = () => {
    setProcesando(true);
    // Simulación de AWS Rekognition extrayendo texto (OCR) de la credencial
    setTimeout(() => {
      setProcesando(false);
      setDatosExtraidos({
        nombre: 'CARLOS MENDOZA RUIZ',
        documento: 'INE - 0928374655',
        fechaNacimiento: '14/05/1985'
      });
    }, 3000);
  };

  return (
    <div style={estilos.contenedorBase}>
      <h3 style={estilos.titulo}>Registro Rápido por Identificación Oficial</h3>
      
      {!datosExtraidos ? (
        <div style={estilos.areaEscaneo}>
          <div style={estilos.marcoID}></div>
          <p style={estilos.textoInfo}>Coloque la INE o Pasaporte frente a la cámara</p>
          <button onClick={escanearIdentificacion} style={estilos.botonEscanear}>
            {procesando ? 'Procesando IA (Marina)...' : 'Capturar Identificación'}
          </button>
        </div>
      ) : (
        <div style={estilos.formularioLleno}>
          <div style={estilos.alertaExito}>✅ Datos extraídos correctamente</div>
          <label style={estilos.etiqueta}>Nombre del Visitante:</label>
          <input type="text" value={datosExtraidos.nombre} readOnly style={estilos.input} />
          
          <label style={estilos.etiqueta}>Documento:</label>
          <input type="text" value={datosExtraidos.documento} readOnly style={estilos.input} />
          
          <label style={estilos.etiqueta}>Departamento a visitar:</label>
          <input type="text" placeholder="Ej. 301-B" style={estilos.inputEditable} />
          
          <button style={estilos.botonGuardar}>Confirmar Acceso y Notificar</button>
        </div>
      )}
    </div>
  );
}

const estilos = {
  contenedorBase: { padding: '20px', backgroundColor: '#FFFFFF', borderRadius: '10px', border: '1px solid #E2E8F0', marginTop: '15px' },
  titulo: { color: '#0F172A', fontSize: '18px', marginBottom: '15px' },
  areaEscaneo: { textAlign: 'center' },
  marcoID: { width: '100%', height: '180px', border: '3px dashed #3B82F6', borderRadius: '10px', backgroundColor: '#F8FAFC', marginBottom: '15px' },
  textoInfo: { color: '#64748B', marginBottom: '15px' },
  botonEscanear: { backgroundColor: '#3B82F6', color: 'white', padding: '15px', width: '100%', borderRadius: '8px', border: 'none', fontWeight: 'bold' },
  formularioLleno: { display: 'flex', flexDirection: 'column', gap: '10px' },
  alertaExito: { backgroundColor: '#D1FAE5', color: '#065F46', padding: '10px', borderRadius: '5px', textAlign: 'center', marginBottom: '10px' },
  etiqueta: { fontSize: '14px', color: '#475569', fontWeight: 'bold' },
  input: { padding: '12px', borderRadius: '6px', border: '1px solid #CBD5E1', backgroundColor: '#F1F5F9', color: '#475569' },
  inputEditable: { padding: '12px', borderRadius: '6px', border: '2px solid #3B82F6' },
  botonGuardar: { backgroundColor: '#10B981', color: 'white', padding: '15px', borderRadius: '8px', border: 'none', fontWeight: 'bold', marginTop: '10px' }
};