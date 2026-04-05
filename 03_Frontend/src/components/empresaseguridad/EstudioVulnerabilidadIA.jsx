import React, { useState } from 'react';

export default function EstudioVulnerabilidadIA() {
  const [generando, setGenerando] = useState(false);
  const [documentoListo, setDocumentoListo] = useState(false);
  const [datosServicio, setDatosServicio] = useState({ cliente: '', tipo: 'Residencial', zona: '', requerimientos: '' });

  const generarEstudio = (e) => {
    e.preventDefault();
    setGenerando(true);
    // Marina redacta el estudio de seguridad y las consignas
    setTimeout(() => {
      setGenerando(false);
      setDocumentoListo(true);
    }, 4000);
  };

  return (
    <div style={estilos.contenedorRiesgo}>
      <header style={estilos.headerRiesgo}>
        <h3 style={estilos.titulo}>📋 Apertura de Servicio: Estudio de Vulnerabilidad y Consignas</h3>
        <p style={estilos.subtitulo}>Marina AI analiza el entorno y redacta el manual operativo del nuevo cliente.</p>
      </header>

      {!documentoListo ? (
        <form onSubmit={generarEstudio} style={estilos.formulario}>
          <div style={estilos.gridForm}>
            <div>
              <label style={estilos.etiqueta}>Nombre del Cliente / Propiedad</label>
              <input type="text" required style={estilos.input} onChange={e => setDatosServicio({...datosServicio, cliente: e.target.value})} />
            </div>
            <div>
              <label style={estilos.etiqueta}>Tipo de Instalación</label>
              <select style={estilos.input} onChange={e => setDatosServicio({...datosServicio, tipo: e.target.value})}>
                <option>Residencial / Condominio</option>
                <option>Corporativo / Oficinas</option>
                <option>Industrial / Bodega</option>
              </select>
            </div>
            <div>
              <label style={estilos.etiqueta}>Ubicación (Colonia / Nivel de Riesgo)</label>
              <input type="text" required style={estilos.input} onChange={e => setDatosServicio({...datosServicio, zona: e.target.value})} />
            </div>
          </div>
          
          <label style={estilos.etiqueta}>Peticiones Especiales del Cliente</label>
          <textarea placeholder="Ej. El cliente quiere revisión de cajuelas a proveedores, rondines cada hora..." style={estilos.textarea} onChange={e => setDatosServicio({...datosServicio, requerimientos: e.target.value})} />

          <button type="submit" disabled={generando} style={estilos.botonGenerar}>
            {generando ? '🧠 Marina redactando estudio y consignas...' : 'Generar Manual Operativo Oficial'}
          </button>
        </form>
      ) : (
        <div style={estilos.panelResultado}>
          <h1 style={{fontSize: '40px', margin: 0}}>📑</h1>
          <h2 style={estilos.textoExito}>Documentación Generada con Éxito</h2>
          <div style={estilos.listaDocs}>
            <p>✔️ Estudio de Vulnerabilidad (Análisis de Riesgos Perimetrales)</p>
            <p>✔️ Manual de Consignas Generales y Específicas adaptado</p>
            <p>✔️ Contrato de Prestación de Servicios (Legal)</p>
          </div>
          <p style={estilos.notaMarina}>* Estos documentos han sido enviados al cliente para su firma y cargados en la app de capacitación de los guardias asignados.</p>
          
          <button onClick={() => setDocumentoListo(false)} style={estilos.botonCerrar}>Preparar otro servicio</button>
        </div>
      )}
    </div>
  );
}

const estilos = {
  contenedorRiesgo: { padding: '20px', backgroundColor: '#FFFBEB', borderRadius: '10px', border: '1px solid #FCD34D', fontFamily: 'sans-serif', marginTop: '20px' },
  headerRiesgo: { borderBottom: '1px solid #FDE68A', paddingBottom: '15px', marginBottom: '20px' },
  titulo: { color: '#B45309', margin: 0 },
  subtitulo: { color: '#D97706', fontSize: '13px', margin: '5px 0 0 0' },
  formulario: { display: 'flex', flexDirection: 'column', gap: '15px' },
  gridForm: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' },
  etiqueta: { fontWeight: 'bold', color: '#92400E', fontSize: '14px', marginBottom: '5px', display: 'block' },
  input: { width: '90%', padding: '12px', borderRadius: '6px', border: '1px solid #FCD34D' },
  textarea: { width: '95%', padding: '12px', borderRadius: '6px', border: '1px solid #FCD34D', minHeight: '80px' },
  botonGenerar: { backgroundColor: '#F59E0B', color: 'white', border: 'none', padding: '15px', borderRadius: '8px', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer' },
  panelResultado: { textAlign: 'center', backgroundColor: 'white', padding: '30px', borderRadius: '8px', border: '1px dashed #F59E0B' },
  textoExito: { color: '#B45309', margin: '15px 0' },
  listaDocs: { textAlign: 'left', backgroundColor: '#FEF3C7', padding: '15px', borderRadius: '6px', display: 'inline-block', marginBottom: '20px' },
  notaMarina: { fontSize: '12px', color: '#92400E', fontStyle: 'italic' },
  botonCerrar: { backgroundColor: '#0F172A', color: 'white', padding: '10px 20px', borderRadius: '5px', border: 'none', cursor: 'pointer' }
};