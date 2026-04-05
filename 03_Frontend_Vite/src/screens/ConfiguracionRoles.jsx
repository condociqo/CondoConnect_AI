import React, { useState } from 'react';

export default function ConfiguracionRoles() {
  const [rolSeleccionado, setRolSeleccionado] = useState('Guardia');

  // Matriz de permisos simulada
  const permisos = {
    Administrador: { cctv: true, finanzas: true, roles: true, bitacoras: true, puertas: true },
    SupervisorSeguridad: { cctv: true, finanzas: false, roles: false, bitacoras: true, puertas: true },
    Guardia: { cctv: true, finanzas: false, roles: false, bitacoras: false, puertas: true }, // Solo ve su propia bitácora
    Residente: { cctv: false, finanzas: false, roles: false, bitacoras: false, puertas: false } // Abre puertas con su propio app, no controla las generales
  };

  const alternarPermiso = (permiso) => {
    alert(`En la versión conectada a AWS, esto actualizará la base de datos Cognito para el rol ${rolSeleccionado}.`);
  };

  return (
    <div style={estilos.contenedorRoles}>
      <h3 style={estilos.titulo}>🔐 Matriz de Roles y Permisos (Seguridad de Datos)</h3>
      <p style={estilos.descripcion}>Define el nivel de acceso para cada tipo de usuario en el condominio.</p>

      <div style={estilos.selectorRoles}>
        <label style={estilos.etiqueta}>Seleccionar Rol a Configurar: </label>
        <select 
          value={rolSeleccionado} 
          onChange={(e) => setRolSeleccionado(e.target.value)}
          style={estilos.select}
        >
          <option value="Administrador">Administrador del Condominio</option>
          <option value="SupervisorSeguridad">Supervisor de Seguridad</option>
          <option value="Guardia">Oficial de Seguridad (Caseta)</option>
          <option value="Residente">Residente / Propietario</option>
        </select>
      </div>

      <div style={estilos.panelPermisos}>
        <h4 style={estilos.subtitulo}>Permisos asignados para: {rolSeleccionado}</h4>
        
        <div style={estilos.filaPermiso}>
          <span>📹 Visualización de CCTV Completo</span>
          <input 
            type="checkbox" 
            checked={permisos[rolSeleccionado].cctv} 
            onChange={() => alternarPermiso('cctv')}
            style={estilos.checkbox}
          />
        </div>

        <div style={estilos.filaPermiso}>
          <span>💰 Acceso a Finanzas y Monetización</span>
          <input 
            type="checkbox" 
            checked={permisos[rolSeleccionado].finanzas} 
            onChange={() => alternarPermiso('finanzas')}
            style={estilos.checkbox}
          />
        </div>

        <div style={estilos.filaPermiso}>
          <span>📖 Lectura de Bitácoras de Todos los Turnos</span>
          <input 
            type="checkbox" 
            checked={permisos[rolSeleccionado].bitacoras} 
            onChange={() => alternarPermiso('bitacoras')}
            style={estilos.checkbox}
          />
        </div>

        <div style={estilos.filaPermiso}>
          <span>🚪 Control Remoto de Barreras y Elevadores</span>
          <input 
            type="checkbox" 
            checked={permisos[rolSeleccionado].puertas} 
            onChange={() => alternarPermiso('puertas')}
            style={estilos.checkbox}
          />
        </div>

        <button style={estilos.botonGuardar}>💾 Guardar Configuración de Rol</button>
      </div>
    </div>
  );
}

const estilos = {
  contenedorRoles: { padding: '20px', backgroundColor: '#FFFFFF', borderRadius: '10px', border: '1px solid #CBD5E1', marginTop: '15px' },
  titulo: { color: '#0F172A', margin: '0 0 10px 0' },
  descripcion: { color: '#64748B', fontSize: '14px', marginBottom: '20px' },
  selectorRoles: { marginBottom: '20px', padding: '15px', backgroundColor: '#F8FAFC', borderRadius: '8px', border: '1px solid #E2E8F0' },
  etiqueta: { fontWeight: 'bold', color: '#1E293B', marginRight: '10px' },
  select: { padding: '10px', borderRadius: '5px', border: '1px solid #94A3B8', fontSize: '16px', minWidth: '200px' },
  panelPermisos: { padding: '15px', border: '2px solid #E2E8F0', borderRadius: '8px' },
  subtitulo: { borderBottom: '1px solid #E2E8F0', paddingBottom: '10px', marginBottom: '15px', color: '#3B82F6' },
  filaPermiso: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px dashed #E2E8F0' },
  checkbox: { width: '20px', height: '20px', cursor: 'pointer' },
  botonGuardar: { backgroundColor: '#0F172A', color: 'white', padding: '12px 20px', border: 'none', borderRadius: '8px', marginTop: '20px', width: '100%', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' }
};