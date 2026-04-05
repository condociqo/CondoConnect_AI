import React, { useState } from 'react';

export default function GestorCredencialesAcceso() {
  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState('');
  
  const enrolarDispositivoMovil = () => {
    alert("📲 Marina ha enviado un token encriptado a la App del residente. Su teléfono móvil ahora funciona como llave de proximidad (Bluetooth/NFC) para las lectoras actualizadas.");
  };

  const enrolarRFID = () => {
    alert("💳 Acercar tarjeta física al lector maestro. Marina enlazará el código HEX al perfil del residente en AWS.");
  };

  return (
    <div style={estilos.contenedorCredenciales}>
      <header style={estilos.headerCredenciales}>
        <h3 style={estilos.titulo}>🔑 Emisión de Credenciales y Llaves Digitales</h3>
        <p style={estilos.subtitulo}>Hardware migrado exitosamente a AWS IoT. Control maestro activo.</p>
      </header>

      <div style={estilos.panelHardwareEstado}>
        <h4>Estatus de Integración de Hardware en Sitio</h4>
        <ul style={estilos.listaHardware}>
          <li>🟢 Controlador Kantech (Lobby) - Migrado a la Nube</li>
          <li>🟢 Barrera Vehicular Bosch - Control IoT Activo</li>
          <li>🟢 Cámaras LPR Hikvision - Enlazadas a AWS Rekognition</li>
        </ul>
      </div>

      <div style={estilos.panelAsignacion}>
        <h4>Asignar Credencial de Acceso</h4>
        <input 
          type="text" 
          placeholder="Buscar Residente (Ej. Depto 402)" 
          style={estilos.inputBusqueda} 
          onChange={(e) => setUsuarioSeleccionado(e.target.value)}
        />

        <div style={estilos.gridBotonesLlaves}>
          <button onClick={enrolarDispositivoMovil} style={estilos.botonBluetooth}>
            📱 Enrolar Celular (Llave Móvil Bluetooth)
          </button>
          
          <button onClick={enrolarRFID} style={estilos.botonRFID}>
            💳 Asignar Tarjeta Física / Tag Vehicular
          </button>

          <button style={estilos.botonBiometria}>
            👁️ Sincronizar Rostro a Torniquetes
          </button>
        </div>
      </div>
    </div>
  );
}

const estilos = {
  contenedorCredenciales: { padding: '20px', backgroundColor: '#FFFFFF', borderRadius: '10px', border: '1px solid #CBD5E1', marginTop: '20px', fontFamily: 'sans-serif' },
  headerCredenciales: { borderBottom: '1px solid #F1F5F9', paddingBottom: '15px', marginBottom: '15px' },
  titulo: { color: '#0F172A', margin: 0 },
  subtitulo: { color: '#10B981', fontSize: '13px', margin: '5px 0 0 0', fontWeight: 'bold' },
  panelHardwareEstado: { backgroundColor: '#F8FAFC', padding: '15px', borderRadius: '8px', marginBottom: '20px', border: '1px dashed #94A3B8' },
  listaHardware: { listStyleType: 'none', padding: 0, margin: 0, fontSize: '14px', color: '#334155', lineHeight: '1.8' },
  panelAsignacion: { backgroundColor: '#EFF6FF', padding: '20px', borderRadius: '8px', border: '1px solid #3B82F6' },
  inputBusqueda: { width: '90%', padding: '12px', borderRadius: '6px', border: '1px solid #94A3B8', marginBottom: '15px', fontSize: '16px' },
  gridBotonesLlaves: { display: 'flex', flexDirection: 'column', gap: '10px' },
  botonBluetooth: { backgroundColor: '#3B82F6', color: 'white', padding: '15px', borderRadius: '8px', border: 'none', fontWeight: 'bold', cursor: 'pointer', fontSize: '15px' },
  botonRFID: { backgroundColor: '#0F172A', color: 'white', padding: '15px', borderRadius: '8px', border: 'none', fontWeight: 'bold', cursor: 'pointer', fontSize: '15px' },
  botonBiometria: { backgroundColor: '#10B981', color: 'white', padding: '15px', borderRadius: '8px', border: 'none', fontWeight: 'bold', cursor: 'pointer', fontSize: '15px' }
};