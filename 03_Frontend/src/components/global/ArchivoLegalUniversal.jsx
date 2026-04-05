import React, { useState } from 'react';

export default function ArchivoLegalUniversal() {
  const [nuevaConsigna, setNuevaConsigna] = useState('');
  const [analisisMarina, setAnalisisMarina] = useState(null);

  const auditarConsigna = () => {
    // Simulamos el análisis ético/legal de Marina
    if (nuevaConsigna.toLowerCase().includes('prohibido sentarse') || nuevaConsigna.toLowerCase().includes('sin descanso')) {
      setAnalisisMarina({
        estado: 'Rechazado',
        mensaje: 'ALERTA ÉTICA: Esta consigna viola la Ley Silla y los lineamientos de la Ley Federal del Trabajo (Art. 132). Atenta contra la salud física del elemento.',
        color: '#EF4444'
      });
    } else {
      setAnalisisMarina({
        estado: 'Aprobado',
        mensaje: 'Consigna validada. Respeta los protocolos operativos y los Derechos Humanos universales.',
        color: '#10B981'
      });
    }
  };

  return (
    <div style={estilos.contenedorLegal}>
      <header style={estilos.headerLegal}>
        <h3 style={estilos.titulo}>⚖️ Archivo Legal Universal y Derechos Humanos</h3>
        <p style={estilos.subtitulo}>Protegido por Marina AI. La ley aplica igual para todos.</p>
      </header>

      <div style={estilos.gridLegal}>
        {/* Biblioteca Universal */}
        <div style={estilos.columnaBiblioteca}>
          <h4 style={estilos.tituloSeccion}>Biblioteca de Derechos y Leyes</h4>
          <ul style={estilos.listaLeyes}>
            <li style={estilos.itemLey}>📘 Declaración Universal de Derechos Humanos (ONU)</li>
            <li style={estilos.itemLey}>📗 Ley Federal del Trabajo (México)</li>
            <li style={estilos.itemLey}>📙 Ley de Propiedad en Condominio</li>
            <li style={estilos.itemLey}>📕 Protocolos de Uso de Fuerza y Legítima Defensa</li>
            <li style={estilos.itemLey}>📄 Contratos y Acuerdos de la Propiedad Actual</li>
          </ul>
        </div>

        {/* Auditoría de Consignas por Marina AI */}
        <div style={estilos.columnaAuditoria}>
          <h4 style={estilos.tituloSeccion}>Auditoría Ética de Consignas</h4>
          <p style={estilos.textoInfo}>Toda nueva orden o regla debe pasar por el filtro legal de Marina AI antes de ser publicada.</p>
          
          <textarea 
            placeholder="Redactar nueva consigna para la caseta..."
            value={nuevaConsigna}
            onChange={(e) => setNuevaConsigna(e.target.value)}
            style={estilos.textarea}
          />
          
          <button onClick={auditarConsigna} style={estilos.botonAuditar}>
            ♾️ Someter a Análisis Legal de Marina
          </button>

          {analisisMarina && (
            <div style={{...estilos.resultadoAuditoria, borderLeftColor: analisisMarina.color, backgroundColor: `${analisisMarina.color}15`}}>
              <h5 style={{color: analisisMarina.color, margin: '0 0 5px 0'}}>{analisisMarina.estado}</h5>
              <p style={{margin: 0, fontSize: '13px', color: '#1E293B'}}>{analisisMarina.mensaje}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const estilos = {
  contenedorLegal: { padding: '20px', backgroundColor: '#F8FAFC', borderRadius: '10px', border: '1px solid #CBD5E1', fontFamily: 'sans-serif', marginTop: '20px' },
  headerLegal: { borderBottom: '2px solid #E2E8F0', paddingBottom: '15px', marginBottom: '20px' },
  titulo: { color: '#0F172A', margin: 0 },
  subtitulo: { color: '#0284C7', fontSize: '13px', margin: '5px 0 0 0', fontStyle: 'italic' },
  gridLegal: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' },
  columnaBiblioteca: { backgroundColor: 'white', padding: '20px', borderRadius: '8px', border: '1px solid #E2E8F0' },
  tituloSeccion: { margin: '0 0 15px 0', color: '#1E293B' },
  listaLeyes: { listStyleType: 'none', padding: 0, margin: 0, lineHeight: '2.5' },
  itemLey: { padding: '10px', backgroundColor: '#F1F5F9', borderRadius: '5px', marginBottom: '8px', cursor: 'pointer', border: '1px solid #CBD5E1', fontSize: '14px' },
  columnaAuditoria: { backgroundColor: '#0F172A', color: 'white', padding: '20px', borderRadius: '8px', border: '2px solid #38BDF8' },
  textoInfo: { fontSize: '13px', color: '#94A3B8', marginBottom: '15px' },
  textarea: { width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #334155', backgroundColor: '#1E293B', color: 'white', minHeight: '100px', marginBottom: '15px' },
  botonAuditar: { backgroundColor: '#38BDF8', color: '#0F172A', border: 'none', padding: '12px', width: '100%', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer', marginBottom: '15px' },
  resultadoAuditoria: { padding: '15px', borderRadius: '6px', borderLeft: '5px solid' }
};