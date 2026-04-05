import React from 'react';

export default function RendimientoSaludGlobal() {
  const metricasGlobales = {
    nivelEstresPromedio: 'Moderado (35%)',
    rendimientoOperativo: '92% Eficiencia',
    elementosRiesgoBurnout: 2
  };

  const personal = [
    { nombre: 'Víctor M.', ubicacion: 'Caseta Zafiro', emocionDiaria: 'Motivado', rendimiento: 98, riesgo: 'Bajo' },
    { nombre: 'Juan P.', ubicacion: 'Patrulla Nocturna', emocionDiaria: 'Fatigado', rendimiento: 75, riesgo: 'Alto (Requiere Descanso)' }
  ];

  return (
    <div style={estilos.contenedorSalud}>
      <header style={estilos.headerSalud}>
        <h3 style={estilos.titulo}>❤️ Centro de Bienestar Humano y Rendimiento (KPIs)</h3>
        <p style={estilos.subtitulo}>El activo más importante es la persona. Monitoreo predictivo de Burnout.</p>
      </header>

      <div style={estilos.gridMetricas}>
        <div style={estilos.metricaCard}>
          <h4>Eficiencia Operativa</h4>
          <h2 style={{color: '#10B981'}}>{metricasGlobales.rendimientoOperativo}</h2>
        </div>
        <div style={estilos.metricaCard}>
          <h4>Estrés Promedio de Tropa</h4>
          <h2 style={{color: '#F59E0B'}}>{metricasGlobales.nivelEstresPromedio}</h2>
        </div>
        <div style={estilos.metricaAlerta}>
          <h4>Riesgo de Burnout (Agotamiento)</h4>
          <h2>{metricasGlobales.elementosRiesgoBurnout} Elementos</h2>
        </div>
      </div>

      <div style={estilos.tablaPanel}>
        <h4 style={estilos.tituloTabla}>Métricas Individuales de Personal</h4>
        <table style={estilos.tabla}>
          <thead>
            <tr style={estilos.filaCabecera}>
              <th style={estilos.celda}>Colaborador</th>
              <th style={estilos.celda}>Servicio</th>
              <th style={estilos.celda}>Emoción Registrada Hoy</th>
              <th style={estilos.celda}>Rendimiento (%)</th>
              <th style={estilos.celda}>Acción Sugerida por Marina</th>
            </tr>
          </thead>
          <tbody>
            {personal.map((emp, idx) => (
              <tr key={idx} style={estilos.filaDatos}>
                <td style={estilos.celda}><strong>{emp.nombre}</strong></td>
                <td style={estilos.celda}>{emp.ubicacion}</td>
                <td style={estilos.celda}>{emp.emocionDiaria}</td>
                <td style={estilos.celda}>{emp.rendimiento}%</td>
                <td style={estilos.celda}>
                  {emp.riesgo.includes('Alto') ? (
                    <button style={estilos.botonIntervenir}>⚠️ Intervenir / Mandar Relevo</button>
                  ) : (
                    <span style={estilos.textoOk}>Continuar Operación</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const estilos = {
  contenedorSalud: { padding: '20px', backgroundColor: '#F8FAFC', borderRadius: '10px', border: '1px solid #CBD5E1', marginTop: '20px', fontFamily: 'sans-serif' },
  headerSalud: { borderBottom: '1px solid #E2E8F0', paddingBottom: '15px', marginBottom: '20px' },
  titulo: { color: '#0F172A', margin: 0 },
  subtitulo: { color: '#64748B', fontSize: '13px', margin: '5px 0 0 0' },
  gridMetricas: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px', marginBottom: '20px' },
  metricaCard: { backgroundColor: 'white', padding: '20px', borderRadius: '8px', border: '1px solid #E2E8F0', textAlign: 'center' },
  metricaAlerta: { backgroundColor: '#FEF2F2', padding: '20px', borderRadius: '8px', border: '2px dashed #EF4444', color: '#991B1B', textAlign: 'center' },
  tablaPanel: { backgroundColor: 'white', padding: '15px', borderRadius: '8px', border: '1px solid #CBD5E1' },
  tituloTabla: { margin: '0 0 15px 0', color: '#1E293B' },
  tabla: { width: '100%', borderCollapse: 'collapse', fontSize: '14px' },
  filaCabecera: { backgroundColor: '#F1F5F9', textAlign: 'left' },
  filaDatos: { borderBottom: '1px solid #F1F5F9' },
  celda: { padding: '10px', color: '#334155' },
  botonIntervenir: { backgroundColor: '#EF4444', color: 'white', border: 'none', padding: '8px 12px', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer', fontSize: '12px' },
  textoOk: { color: '#10B981', fontWeight: 'bold' }
};