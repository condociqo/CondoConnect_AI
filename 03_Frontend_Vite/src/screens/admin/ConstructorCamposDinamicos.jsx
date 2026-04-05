import React, { useState } from 'react';

export default function ConstructorCamposDinamicos() {
  const [camposExtra, setCamposExtra] = useState([
    { id: 1, nombre: 'Empresa de Transporte', tipo: 'texto', obligatorio: true },
    { id: 2, nombre: 'Temperatura Corporal', tipo: 'numero', obligatorio: false }
  ]);
  
  const [nuevoCampo, setNuevoCampo] = useState({ nombre: '', tipo: 'texto', obligatorio: false });

  const agregarCampo = (e) => {
    e.preventDefault();
    if (!nuevoCampo.nombre) return;
    
    setCamposExtra([...camposExtra, { ...nuevoCampo, id: Date.now() }]);
    setNuevoCampo({ nombre: '', tipo: 'texto', obligatorio: false });
    
    alert(`♾️ Marina: El campo "${nuevoCampo.nombre}" se ha sincronizado con las tablets de los guardias en caseta.`);
  };

  const eliminarCampo = (id) => {
    setCamposExtra(camposExtra.filter(c => c.id !== id));
  };

  return (
    <div style={estilos.contenedorBuilder}>
      <header style={estilos.headerBuilder}>
        <h3 style={estilos.titulo}>⚙️ Personalización de Registros en Caseta</h3>
        <p style={estilos.subtitulo}>Agrega los campos exactos que tu propiedad necesita recabar (Cero programación).</p>
      </header>

      <div style={estilos.gridPanel}>
        {/* Panel de Creación */}
        <div style={estilos.tarjetaModulo}>
          <h4 style={estilos.tituloSeccion}>Crear Nuevo Campo</h4>
          <form onSubmit={agregarCampo} style={estilos.formulario}>
            <label style={estilos.etiqueta}>¿Qué dato necesitas pedir en caseta?</label>
            <input 
              type="text" 
              placeholder="Ej. Placas, Número de Guía, Alergias..." 
              value={nuevoCampo.nombre}
              onChange={e => setNuevoCampo({...nuevoCampo, nombre: e.target.value})}
              style={estilos.input} 
            />

            <label style={estilos.etiqueta}>Tipo de Respuesta</label>
            <select 
              value={nuevoCampo.tipo}
              onChange={e => setNuevoCampo({...nuevoCampo, tipo: e.target.value})}
              style={estilos.input}>
              <option value="texto">Texto Libre</option>
              <option value="numero">Número</option>
              <option value="foto">Fotografía Adjunta</option>
              <option value="lista">Lista de Opciones</option>
            </select>

            <label style={estilos.checkboxLabel}>
              <input 
                type="checkbox" 
                checked={nuevoCampo.obligatorio}
                onChange={e => setNuevoCampo({...nuevoCampo, obligatorio: e.target.checked})}
              /> ¿Es obligatorio para dejarlo pasar?
            </label>

            <button type="submit" style={estilos.botonAgregar}>➕ Añadir al Formulario del Guardia</button>
          </form>
        </div>

        {/* Vista Previa de lo que verá el Guardia */}
        <div style={estilos.tarjetaModulo}>
          <h4 style={estilos.tituloSeccion}>Vista Previa (Tablet del Guardia)</h4>
          <div style={estilos.simuladorTablet}>
            <p style={estilos.textoInfo}>Formulario de Ingreso Actualizado:</p>
            {camposExtra.map(campo => (
              <div key={campo.id} style={estilos.campoSimulado}>
                <label style={estilos.etiquetaSimulada}>
                  {campo.nombre} {campo.obligatorio && <span style={{color: 'red'}}>*</span>}
                </label>
                {campo.tipo === 'foto' ? (
                  <div style={estilos.botonFotoSimulado}>📷 Tomar Fotografía</div>
                ) : (
                  <input type="text" disabled placeholder={`Ingresar ${campo.tipo}...`} style={estilos.inputSimulado} />
                )}
                <button onClick={() => eliminarCampo(campo.id)} style={estilos.botonEliminar}>🗑️</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const estilos = {
  contenedorBuilder: { padding: '20px', backgroundColor: '#F8FAFC', borderRadius: '10px', border: '1px solid #CBD5E1', fontFamily: 'sans-serif' },
  headerBuilder: { borderBottom: '2px solid #E2E8F0', paddingBottom: '15px', marginBottom: '20px' },
  titulo: { color: '#0F172A', margin: 0 },
  subtitulo: { color: '#64748B', fontSize: '13px', margin: '5px 0 0 0' },
  gridPanel: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' },
  tarjetaModulo: { backgroundColor: 'white', padding: '20px', borderRadius: '8px', border: '1px solid #E2E8F0' },
  tituloSeccion: { margin: '0 0 15px 0', color: '#1E293B', borderBottom: '1px dashed #CBD5E1', paddingBottom: '10px' },
  formulario: { display: 'flex', flexDirection: 'column', gap: '15px' },
  etiqueta: { fontSize: '13px', fontWeight: 'bold', color: '#475569' },
  input: { padding: '10px', borderRadius: '6px', border: '1px solid #94A3B8' },
  checkboxLabel: { fontSize: '13px', color: '#334155', display: 'flex', alignItems: 'center', gap: '8px' },
  botonAgregar: { backgroundColor: '#0284C7', color: 'white', border: 'none', padding: '12px', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer', marginTop: '10px' },
  simuladorTablet: { backgroundColor: '#F1F5F9', padding: '20px', borderRadius: '8px', border: '2px solid #CBD5E1', minHeight: '200px' },
  textoInfo: { fontSize: '12px', color: '#64748B', margin: '0 0 15px 0', textAlign: 'center' },
  campoSimulado: { backgroundColor: 'white', padding: '10px', borderRadius: '6px', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px', border: '1px solid #E2E8F0' },
  etiquetaSimulada: { flex: 1, fontSize: '12px', fontWeight: 'bold', color: '#334155' },
  inputSimulado: { flex: 2, padding: '8px', border: '1px solid #E2E8F0', borderRadius: '4px', backgroundColor: '#F8FAFC' },
  botonFotoSimulado: { flex: 2, padding: '8px', border: '1px dashed #94A3B8', borderRadius: '4px', textAlign: 'center', fontSize: '12px', color: '#64748B', backgroundColor: '#F8FAFC' },
  botonEliminar: { backgroundColor: 'transparent', border: 'none', cursor: 'pointer', color: '#EF4444' }
};