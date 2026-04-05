import React, { useState } from 'react';

export default function GestionRRHHBienestar() {
  const [guardias, setGuardias] = useState([
    { id: 'G-101', nombre: 'Víctor M.', ubicacion: 'Torre Zafiro', estadoEmocional: 'Óptimo', turnosSeguidos: 1, fondosAcumulados: '$250.00' },
    { id: 'G-102', nombre: 'Juan P.', ubicacion: 'Las Palmas', estadoEmocional: 'Fatigado', turnosSeguidos: 2, fondosAcumulados: '$400.00' },
    { id: 'G-103', nombre: 'Luis G.', ubicacion: 'Descanso', estadoEmocional: 'Estable', turnosSeguidos: 0, fondosAcumulados: '$0.00' }
  ]);

  return (
    <div style={estilos.contenedorRRHH}>
      <div style={estilos.cabeceraIA}>
        <h3 style={estilos.titulo}>👥 Capital Humano y Bienestar</h3>
        <p style={estilos.notaMarina}>🧠 Marina AI: Evaluando fatiga y distribución equitativa de turnos.</p>
      </div>

      <div style={estilos.gridGuardias}>
        {guardias.map(guardia => (
          <div key={guardia.id} style={guardia.estadoEmocional === 'Fatigado' ? estilos.tarjetaAlerta : estilos.tarjetaNormal}>
            <div style={estilos.infoSuperior}>
              <h4 style={estilos.nombre}>{guardia.nombre}</h4>
              <span style={estilos.idBadge}>{guardia.id}</span>
            </div>
            
            <p style={estilos.dato}><strong>Asignación:</strong> {guardia.ubicacion}</p>
            <p style={estilos.dato}>
              <strong>Estado según Marina:</strong> 
              <span style={{ color: guardia.estadoEmocional === 'Fatigado' ? '#EF4444' : '#10B981', fontWeight: 'bold', marginLeft: '5px' }}>
                {guardia.estadoEmocional}
              </span>
            </p>
            <p style={estilos.dato}><strong>Turnos seguidos:</strong> {guardia.turnosSeguidos}</p>
            
            <div style={estilos.fondos}>
              <p style={{margin: 0, fontSize: '12px'}}>Bono Monetización Pendiente:</p>
              <p style={{margin: 0, fontWeight: 'bold', color: '#10B981'}}>{guardia.fondosAcumulados} MXN</p>
            </div>

            <div style={estilos.acciones}>
              {guardia.estadoEmocional === 'Fatigado' ? (
                <button style={estilos.botonDescanso}>⚠️ Forzar Descanso / Relevo</button>
              ) : (
                <button style={estilos.botonAsignar}>Asignar Turno Extra</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const estilos = {
  contenedorRRHH: { padding: '20px', backgroundColor: '#F8FAFC', borderRadius: '10px', marginTop: '15px', border: '1px solid #CBD5E1' },
  cabeceraIA: { marginBottom: '20px', borderBottom: '2px solid #E2E8F0', paddingBottom: '10px' },
  titulo: { color: '#0F172A', margin: '0 0 5px 0' },
  notaMarina: { color: '#3B82F6', fontSize: '14px', fontStyle: 'italic', margin: 0 },
  gridGuardias: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px' },
  tarjetaNormal: { backgroundColor: 'white', padding: '15px', borderRadius: '8px', border: '1px solid #E2E8F0', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' },
  tarjetaAlerta: { backgroundColor: '#FEF2F2', padding: '15px', borderRadius: '8px', border: '2px dashed #EF4444', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' },
  infoSuperior: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' },
  nombre: { margin: 0, color: '#1E293B', fontSize: '18px' },
  idBadge: { backgroundColor: '#E2E8F0', color: '#475569', padding: '3px 8px', borderRadius: '4px', fontSize: '12px', fontWeight: 'bold' },
  dato: { color: '#475569', fontSize: '14px', margin: '5px 0' },
  fondos: { backgroundColor: '#ECFDF5', padding: '10px', borderRadius: '5px', marginTop: '10px', border: '1px solid #A7F3D0', textAlign: 'center' },
  acciones: { marginTop: '15px' },
  botonDescanso: { backgroundColor: '#DC2626', color: 'white', border: 'none', padding: '10px', borderRadius: '5px', width: '100%', fontWeight: 'bold', cursor: 'pointer' },
  botonAsignar: { backgroundColor: '#0F172A', color: 'white', border: 'none', padding: '10px', borderRadius: '5px', width: '100%', fontWeight: 'bold', cursor: 'pointer' }
};