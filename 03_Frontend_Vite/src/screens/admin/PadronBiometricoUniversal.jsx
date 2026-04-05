import React, { useState } from 'react';

export default function PadronBiometricoUniversal() {
  const [datosUsuario, setDatosUsuario] = useState({ nombre: '', rol: 'Residente Propietario', depto: '' });
  const [faseEscaneo, setFaseEscaneo] = useState('inactivo'); // inactivo, escaneando, completado

  const iniciarMapeoFacial = (e) => {
    e.preventDefault();
    setFaseEscaneo('escaneando');
    
    // Simulación del motor biométrico (AWS Rekognition IndexFaces)
    setTimeout(() => {
      setFaseEscaneo('completado');
    }, 3000);
  };

  const guardarExpediente = () => {
    alert(`🔐 Expediente de ${datosUsuario.nombre} guardado y encriptado. Su rostro ahora es su llave de acceso oficial.`);
    setFaseEscaneo('inactivo');
    setDatosUsuario({ nombre: '', rol: 'Residente Propietario', depto: '' });
  };

  return (
    <div style={estilos.contenedorPadron}>
      <div style={estilos.headerPadron}>
        <h3 style={estilos.titulo}>👤 Alta de Usuarios y Mapeo Biométrico</h3>
        <p style={estilos.textoLegal}>Cumplimiento GDPR/ISO 27001: Los datos biométricos se encriptan y no son reversibles a imagen.</p>
      </div>

      <div style={estilos.gridPadron}>
        {/* Formulario de Datos Base */}
        <form style={estilos.formulario}>
          <label style={estilos.etiqueta}>Nombre Completo / Razón Social</label>
          <input type="text" value={datosUsuario.nombre} onChange={e => setDatosUsuario({...datosUsuario, nombre: e.target.value})} style={estilos.input} placeholder="Ej. Ing. Carlos Mendoza" required />

          <label style={estilos.etiqueta}>Clasificación (Rol en el ecosistema)</label>
          <select value={datosUsuario.rol} onChange={e => setDatosUsuario({...datosUsuario, rol: e.target.value})} style={estilos.input}>
            <option value="Residente Propietario">Residente / Dueño</option>
            <option value="Inquilino">Locatario / Inquilino</option>
            <option value="Directivo">Mesa Directiva / Comité</option>
            <option value="Empleado Interno">Empleado (Limpieza, Mantenimiento)</option>
            <option value="Guardia">Oficial de Seguridad</option>
          </select>

          <label style={estilos.etiqueta}>Asignación (Depto / Local / Área)</label>
          <input type="text" value={datosUsuario.depto} onChange={e => setDatosUsuario({...datosUsuario, depto: e.target.value})} style={estilos.input} placeholder="Ej. Depto 402 o Mantenimiento General" required />
        </form>

        {/* Módulo de Captura Facial */}
        <div style={estilos.moduloBiometrico}>
          <h4 style={estilos.subtituloBio}>Captura de Identidad (Requerido)</h4>
          
          {faseEscaneo === 'inactivo' && (
            <div style={estilos.areaInactiva}>
              <p>Solicite a la persona mirar a la cámara</p>
              <button onClick={iniciarMapeoFacial} style={estilos.botonEscanear}>📷 Iniciar Escaneo Facial (3D)</button>
            </div>
          )}

          {faseEscaneo === 'escaneando' && (
            <div style={estilos.areaEscaneo}>
              <div style={estilos.visorCamara}>
                <div style={estilos.mallaFacial}></div>
              </div>
              <p style={estilos.textoCargando}>Marina procesando vectores faciales...</p>
            </div>
          )}

          {faseEscaneo === 'completado' && (
            <div style={estilos.areaCompletada}>
              <div style={estilos.checkBio}>✔️ Huella Facial Generada</div>
              <p>La IA ha registrado 124 puntos nodales con éxito.</p>
              <button onClick={guardarExpediente} style={estilos.botonGuardar}>💾 Confirmar y Activar Accesos</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const estilos = {
  contenedorPadron: { padding: '20px', backgroundColor: '#FFFFFF', borderRadius: '10px', border: '1px solid #CBD5E1', marginTop: '20px', fontFamily: 'sans-serif' },
  headerPadron: { borderBottom: '2px solid #F1F5F9', paddingBottom: '15px', marginBottom: '20px' },
  titulo: { color: '#0F172A', margin: 0 },
  textoLegal: { color: '#10B981', fontSize: '12px', marginTop: '5px', fontWeight: 'bold' },
  gridPadron: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' },
  formulario: { display: 'flex', flexDirection: 'column' },
  etiqueta: { fontSize: '14px', fontWeight: 'bold', color: '#475569', marginBottom: '5px' },
  input: { padding: '12px', borderRadius: '6px', border: '1px solid #94A3B8', marginBottom: '15px', fontSize: '15px' },
  moduloBiometrico: { backgroundColor: '#F8FAFC', padding: '20px', borderRadius: '8px', border: '1px dashed #3B82F6', textAlign: 'center' },
  subtituloBio: { margin: '0 0 15px 0', color: '#1E293B' },
  areaInactiva: { padding: '20px' },
  botonEscanear: { backgroundColor: '#3B82F6', color: 'white', border: 'none', padding: '15px', borderRadius: '8px', width: '100%', fontWeight: 'bold', cursor: 'pointer', fontSize: '16px' },
  areaEscaneo: { position: 'relative' },
  visorCamara: { width: '100%', height: '200px', backgroundColor: '#000', borderRadius: '8px', position: 'relative', overflow: 'hidden', border: '2px solid #3B82F6' },
  mallaFacial: { width: '100px', height: '120px', border: '2px dashed #00E5FF', borderRadius: '50%', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', animation: 'pulse 1s infinite' },
  textoCargando: { color: '#3B82F6', marginTop: '10px', fontWeight: 'bold' },
  areaCompletada: { padding: '10px' },
  checkBio: { color: '#10B981', fontSize: '18px', fontWeight: 'bold', marginBottom: '10px', backgroundColor: '#D1FAE5', padding: '10px', borderRadius: '5px' },
  botonGuardar: { backgroundColor: '#0F172A', color: 'white', border: 'none', padding: '15px', borderRadius: '8px', width: '100%', fontWeight: 'bold', cursor: 'pointer', fontSize: '16px' }
};