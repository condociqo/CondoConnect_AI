import React, { useState } from 'react';

export default function PanelAccesosCorporativo() {
  const [torniquetes, setTorniquetes] = useState([
    { id: 'T-01', estado: 'bloqueado', tipo: 'Empleados' },
    { id: 'T-02', estado: 'bloqueado', tipo: 'Visitantes VIP' },
    { id: 'T-03', estado: 'libre', tipo: 'Proveedores' }
  ]);

  const [elevadorAsignado, setElevadorAsignado] = useState(null);

  const liberarTorniquete = (id) => {
    const nuevosTorniquetes = torniquetes.map(t => 
      t.id === id ? { ...t, estado: t.estado === 'bloqueado' ? 'libre' : 'bloqueado' } : t
    );
    setTorniquetes(nuevosTorniquetes);
  };

  const asignarElevador = (piso) => {
    setElevadorAsignado(`Ascensor B en camino. Destino exclusivo: Piso ${piso}`);
    setTimeout(() => setElevadorAsignado(null), 5000);
  };

  return (
    <div style={estilos.contenedorCorp}>
      <h3 style={estilos.titulo}>🏢 Control de Lobby Corporativo Multiglobal</h3>
      
      <div style={estilos.seccion}>
        <h4 style={estilos.subtitulo}>Torniquetes de Acceso Principal</h4>
        <div style={estilos.gridTorniquetes}>
          {torniquetes.map(t => (
            <div key={t.id} style={t.estado === 'libre' ? estilos.tarjetaLibre : estilos.tarjetaBloqueada}>
              <h5>{t.id} - {t.tipo}</h5>
              <p>Estado: {t.estado.toUpperCase()}</p>
              <button onClick={() => liberarTorniquete(t.id)} style={estilos.botonTorniquete}>
                {t.estado === 'bloqueado' ? '🔓 Liberar Acceso' : '🔒 Bloquear'}
              </button>
            </div>
          ))}
        </div>
      </div>

      <div style={estilos.seccion}>
        <h4 style={estilos.subtitulo}>Asignación de Elevadores (Destino Inteligente)</h4>
        <p style={estilos.ayudaTexto}>Seleccione el piso autorizado para el visitante:</p>
        <div style={estilos.gridPisos}>
          {[10, 15, 24, 42, 50].map(piso => (
            <button key={piso} onClick={() => asignarElevador(piso)} style={estilos.botonPiso}>
              Piso {piso}
            </button>
          ))}
        </div>
        {elevadorAsignado && <div style={estilos.alertaElevador}>🛗 {elevadorAsignado}</div>}
      </div>
    </div>
  );
}

const estilos = {
  contenedorCorp: { padding: '20px', backgroundColor: '#0F172A', color: 'white', borderRadius: '10px', marginTop: '15px', border: '1px solid #38BDF8' },
  titulo: { color: '#38BDF8', fontSize: '20px', borderBottom: '1px solid #1E293B', paddingBottom: '10px' },
  seccion: { marginTop: '20px' },
  subtitulo: { color: '#E2E8F0', marginBottom: '10px' },
  gridTorniquetes: { display: 'flex', gap: '10px', flexWrap: 'wrap' },
  tarjetaBloqueada: { flex: 1, minWidth: '120px', padding: '15px', backgroundColor: '#1E293B', border: '2px solid #EF4444', borderRadius: '8px', textAlign: 'center' },
  tarjetaLibre: { flex: 1, minWidth: '120px', padding: '15px', backgroundColor: '#064E3B', border: '2px solid #10B981', borderRadius: '8px', textAlign: 'center' },
  botonTorniquete: { width: '100%', padding: '10px', marginTop: '10px', borderRadius: '5px', border: 'none', backgroundColor: '#CBD5E1', color: '#0F172A', fontWeight: 'bold', cursor: 'pointer' },
  ayudaTexto: { color: '#94A3B8', fontSize: '14px', marginBottom: '10px' },
  gridPisos: { display: 'flex', gap: '10px', flexWrap: 'wrap' },
  botonPiso: { backgroundColor: '#3B82F6', color: 'white', border: 'none', padding: '15px 20px', borderRadius: '8px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' },
  alertaElevador: { marginTop: '15px', padding: '15px', backgroundColor: '#DBEAFE', color: '#1E3A8A', borderRadius: '8px', fontWeight: 'bold', textAlign: 'center' }
};