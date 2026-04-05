import React, { useState } from 'react';

export default function ReporteMultasEvidencia() {
  const [tipoFalta, setTipoFalta] = useState('Estacionamiento Indebido');
  const [evidenciaTomada, setEvidenciaTomada] = useState(false);
  const [enviando, setEnviando] = useState(false);

  const simularCaptura = (e) => {
    e.preventDefault();
    setEvidenciaTomada(true);
  };

  const enviarReporteAAdministracion = () => {
    setEnviando(true);
    setTimeout(() => {
      setEnviando(false);
      setEvidenciaTomada(false);
      alert("📁 Reporte enviado al Comité/Administrador. Marina ha respaldado la evidencia en AWS de forma inalterable.");
    }, 2000);
  };

  return (
    <div style={estilos.contenedorMultas}>
      <h3 style={estilos.titulo}>📝 Reporte de Incidencias e Infracciones</h3>
      <p style={estilos.notaSeguridad}>No confronte al residente. Capture la evidencia y deje que la Administración proceda con la multa.</p>

      {!evidenciaTomada ? (
        <form onSubmit={simularCaptura} style={estilos.formularioFalta}>
          <input type="text" placeholder="Depto o Residente Infractor" required style={estilos.input} />
          
          <select value={tipoFalta} onChange={(e) => setTipoFalta(e.target.value)} style={estilos.input}>
            <option value="Estacionamiento Indebido">Lugar de estacionamiento invadido</option>
            <option value="Exceso de Ruido">Exceso de ruido fuera de horario</option>
            <option value="Mascotas sin correa/heces">Mascotas (Sin correa / Heces)</option>
            <option value="Daño a Instalaciones">Daño a instalaciones o áreas comunes</option>
          </select>

          <textarea placeholder="Breve descripción (Opcional, Marina analizará la foto)" style={estilos.textarea}></textarea>
          
          <button type="submit" style={estilos.botonCapturar}>
            📸 Capturar Evidencia (Foto/Video)
          </button>
        </form>
      ) : (
        <div style={estilos.panelEvidencia}>
          <div style={estilos.visorEvidencia}>[ EVIDENCIA CAPTURADA CON FECHA Y GPS ]</div>
          <p><strong>Infracción:</strong> {tipoFalta}</p>
          <button onClick={enviarReporteAAdministracion} disabled={enviando} style={estilos.botonEnviar}>
            {enviando ? 'Subiendo a la bóveda segura...' : '🚨 Enviar Reporte a Administración'}
          </button>
          <button onClick={() => setEvidenciaTomada(false)} style={estilos.botonCancelar}>Cancelar</button>
        </div>
      )}
    </div>
  );
}

const estilos = {
  contenedorMultas: { padding: '20px', backgroundColor: '#FEF2F2', borderRadius: '10px', border: '1px solid #FCA5A5', marginTop: '15px' },
  titulo: { color: '#991B1B', margin: '0 0 5px 0' },
  notaSeguridad: { color: '#B91C1C', fontSize: '13px', marginBottom: '15px', fontStyle: 'italic' },
  formularioFalta: { display: 'flex', flexDirection: 'column', gap: '10px' },
  input: { padding: '12px', borderRadius: '6px', border: '1px solid #FCA5A5' },
  textarea: { padding: '12px', borderRadius: '6px', border: '1px solid #FCA5A5', minHeight: '80px' },
  botonCapturar: { backgroundColor: '#DC2626', color: 'white', padding: '15px', borderRadius: '8px', border: 'none', fontWeight: 'bold', cursor: 'pointer' },
  panelEvidencia: { backgroundColor: 'white', padding: '15px', borderRadius: '8px', border: '1px solid #FCA5A5', textAlign: 'center' },
  visorEvidencia: { height: '150px', backgroundColor: '#000', color: '#10B981', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '10px', borderRadius: '4px', fontFamily: 'monospace' },
  botonEnviar: { backgroundColor: '#0F172A', color: 'white', padding: '12px', width: '100%', borderRadius: '8px', border: 'none', fontWeight: 'bold', cursor: 'pointer', marginBottom: '10px' },
  botonCancelar: { backgroundColor: 'transparent', color: '#64748B', border: 'none', cursor: 'pointer', textDecoration: 'underline' }
};