import React, { useState } from 'react';

export default function ConfiguracionPropiedad() {
  const [config, setConfig] = useState({
    nombreCondominio: 'Torre Zafiro Residencial',
    totalDepartamentos: 120,
    cajonesVisita: 15,
    autoAsignarEstacionamiento: true,
    iaMarinaActiva: true
  });

  const guardarConfiguracion = (e) => {
    e.preventDefault();
    alert("⚙️ Configuración Maestra Guardada. Marina ha actualizado las reglas para la caseta y los residentes.");
  };

  return (
    <div style={estilos.contenedorAdmin}>
      <div style={estilos.cabeceraSeccion}>
        <h2 style={estilos.titulo}>🏢 Configuración Maestra de Propiedad</h2>
        <p style={estilos.subtitulo}>Define la estructura física y las reglas de operación que Marina ejecutará.</p>
      </div>

      <form onSubmit={guardarConfiguracion} style={estilos.formulario}>
        <div style={estilos.gridConfig}>
          {/* Datos Generales */}
          <div style={estilos.tarjetaConfig}>
            <h4 style={estilos.tituloTarjeta}>Datos Generales</h4>
            <label style={estilos.etiqueta}>Nombre Oficial de la Propiedad</label>
            <input 
              type="text" 
              value={config.nombreCondominio} 
              onChange={e => setConfig({...config, nombreCondominio: e.target.value})}
              style={estilos.input}
            />
            
            <label style={estilos.etiqueta}>Total de Departamentos / Casas</label>
            <input 
              type="number" 
              value={config.totalDepartamentos} 
              onChange={e => setConfig({...config, totalDepartamentos: e.target.value})}
              style={estilos.input}
            />
          </div>

          {/* Configuración de Caseta */}
          <div style={estilos.tarjetaConfig}>
            <h4 style={estilos.tituloTarjeta}>Reglas de Caseta y Estacionamiento</h4>
            <label style={estilos.etiqueta}>Cajones Exclusivos para Visitas</label>
            <input 
              type="number" 
              value={config.cajonesVisita} 
              onChange={e => setConfig({...config, cajonesVisita: e.target.value})}
              style={estilos.input}
            />
            
            <div style={estilos.switchContainer}>
              <input 
                type="checkbox" 
                checked={config.autoAsignarEstacionamiento}
                onChange={e => setConfig({...config, autoAsignarEstacionamiento: e.target.checked})}
                style={estilos.checkbox}
              />
              <label>Permitir a Marina asignar cajones de visita automáticamente</label>
            </div>

            <div style={estilos.switchContainer}>
              <input 
                type="checkbox" 
                checked={config.iaMarinaActiva}
                onChange={e => setConfig({...config, iaMarinaActiva: e.target.checked})}
                style={estilos.checkbox}
              />
              <label>Activar Asistente Marina (Recepción autónoma y CCTV)</label>
            </div>
          </div>
        </div>

        <button type="submit" style={estilos.botonGuardar}>
          💾 Guardar Arquitectura del Condominio
        </button>
      </form>
    </div>
  );
}

const estilos = {
  contenedorAdmin: { padding: '20px', backgroundColor: '#F8FAFC', borderRadius: '10px', fontFamily: 'sans-serif' },
  cabeceraSeccion: { borderBottom: '2px solid #E2E8F0', paddingBottom: '15px', marginBottom: '20px' },
  titulo: { color: '#0F172A', margin: 0 },
  subtitulo: { color: '#64748B', margin: '5px 0 0 0' },
  formulario: { display: 'flex', flexDirection: 'column', gap: '20px' },
  gridConfig: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' },
  tarjetaConfig: { backgroundColor: 'white', padding: '20px', borderRadius: '8px', border: '1px solid #CBD5E1', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' },
  tituloTarjeta: { color: '#38BDF8', marginTop: 0, marginBottom: '15px', borderBottom: '1px dashed #E2E8F0', paddingBottom: '10px' },
  etiqueta: { display: 'block', fontWeight: 'bold', color: '#475569', marginBottom: '5px', fontSize: '14px' },
  input: { width: '90%', padding: '10px', marginBottom: '15px', borderRadius: '6px', border: '1px solid #94A3B8' },
  switchContainer: { display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px', fontSize: '14px', color: '#1E293B' },
  checkbox: { width: '18px', height: '18px', cursor: 'pointer' },
  botonGuardar: { backgroundColor: '#0F172A', color: 'white', padding: '15px', borderRadius: '8px', border: 'none', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', transition: 'background-color 0.3s' }
};