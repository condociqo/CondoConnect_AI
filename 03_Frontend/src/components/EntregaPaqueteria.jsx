import React, { useState } from 'react';

export default function EntregaPaqueteria() {
  const [paquetes, setPaquetes] = useState([
    { id: 'PKG-111', estado: 'Por Llegar', depto: '102-A', plataforma: 'Amazon', residente: 'Familia Ruiz' },
    { id: 'PKG-222', estado: 'En Caseta', depto: '304-B', plataforma: 'Mercado Libre', residente: 'Ing. Carlos M.' }
  ]);

  const entregarAResidente = (id) => {
    const confirmacion = window.confirm('¿Confirmas que estás entregando este paquete al residente o persona autorizada?');
    if (confirmacion) {
      setPaquetes(paquetes.filter(p => p.id !== id));
      alert('Entrega registrada. Marina enviará el comprobante de entrega al residente.');
    }
  };

  return (
    <div style={estilos.contenedorPkg}>
      <h3 style={estilos.titulo}>📦 Logística: Entregas y Pre-avisos</h3>
      
      <div style={estilos.gridColumnas}>
        {/* Columna: Paquetes Esperados (Avisados por el residente/app) */}
        <div style={estilos.columna}>
          <h4 style={estilos.subtitulo}>⏳ Próximos a Llegar</h4>
          {paquetes.filter(p => p.estado === 'Por Llegar').map(pkg => (
            <div key={pkg.id} style={estilos.tarjetaEspera}>
              <p><strong>Depto {pkg.depto}</strong> - {pkg.residente}</p>
              <p style={estilos.etiquetaPlataforma}>{pkg.plataforma}</p>
            </div>
          ))}
        </div>

        {/* Columna: Paquetes Físicos en Caseta listos para entregar */}
        <div style={estilos.columna}>
          <h4 style={estilos.subtitulo}>🏢 Inventario en Caseta</h4>
          {paquetes.filter(p => p.estado === 'En Caseta').map(pkg => (
            <div key={pkg.id} style={estilos.tarjetaInventario}>
              <p><strong>Depto {pkg.depto}</strong> - {pkg.residente}</p>
              <p style={estilos.etiquetaPlataforma}>{pkg.plataforma}</p>
              <button onClick={() => entregarAResidente(pkg.id)} style={estilos.botonEntregar}>
                🤝 Escanear y Entregar
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const estilos = {
  contenedorPkg: { padding: '20px', backgroundColor: '#FFFFFF', borderRadius: '10px', border: '1px solid #E2E8F0', marginTop: '15px' },
  titulo: { color: '#0F172A', fontSize: '18px', marginBottom: '15px' },
  gridColumnas: { display: 'flex', gap: '20px' },
  columna: { flex: 1, backgroundColor: '#F8FAFC', padding: '15px', borderRadius: '8px' },
  subtitulo: { color: '#475569', fontSize: '14px', marginBottom: '10px', borderBottom: '1px solid #CBD5E1', paddingBottom: '5px' },
  tarjetaEspera: { backgroundColor: '#FFFBEB', borderLeft: '4px solid #F59E0B', padding: '10px', marginBottom: '10px', borderRadius: '4px', fontSize: '14px' },
  tarjetaInventario: { backgroundColor: '#F0FDF4', borderLeft: '4px solid #22C55E', padding: '10px', marginBottom: '10px', borderRadius: '4px', fontSize: '14px' },
  etiquetaPlataforma: { fontSize: '12px', color: '#64748B', fontStyle: 'italic', margin: '5px 0' },
  botonEntregar: { backgroundColor: '#0F172A', color: 'white', padding: '8px', width: '100%', borderRadius: '5px', border: 'none', cursor: 'pointer', marginTop: '5px', fontWeight: 'bold' }
};