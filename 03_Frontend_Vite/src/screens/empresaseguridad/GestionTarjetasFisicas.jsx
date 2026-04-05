import React, { useState } from 'react';

export default function GestionTarjetasFisicas() {
  const [inventario, setInventario] = useState(150); // Tarjetas en bodega
  const [asignaciones, setAsignaciones] = useState([
    { id: 'G-101', nombre: 'Antonio Roblero', tarjeta: '**** 5521', fecha: '2026-04-01' },
    { id: 'G-102', nombre: 'Martín Rivera', tarjeta: 'Pendiente', fecha: '-' }
  ]);

  const asignarTarjeta = (id) => {
    const serial = prompt("Escanea o ingresa el número de serie del plástico físico:");
    if (serial) {
      alert(`🛡️ Marina AI: Vinculando plástico [${serial}] con el elemento ${id}.\n\nAhora sus comisiones de logística se enviarán directamente a este plástico.`);
      setInventario(inventario - 1);
    }
  };

  return (
    <div style={estilos.contenedorTarjetas}>
      <div style={estilos.header}>
        <h3>🗃️ Inventario de Tarjetas Físicas CondoConnect</h3>
        <div style={estilos.badgeStock}>Stock en Bodega: {inventario} unidades</div>
      </div>

      <table style={estilos.tabla}>
        <thead>
          <tr style={estilos.encabezado}>
            <th>Elemento</th>
            <th>Estado de Plástico</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {asignaciones.map(a => (
            <tr key={a.id} style={estilos.fila}>
              <td>{a.nombre}</td>
              <td>
                <span style={a.tarjeta === 'Pendiente' ? estilos.statusRojo : estilos.statusVerde}>
                  {a.tarjeta}
                </span>
              </td>
              <td>
                {a.tarjeta === 'Pendiente' && (
                  <button onClick={() => asignarTarjeta(a.id)} style={estilos.botonAsignar}>
                    Entregar Plástico 💳
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const estilos = {
  contenedorTarjetas: { padding: '20px', backgroundColor: 'white', borderRadius: '12px', border: '1px solid #E2E8F0', fontFamily: 'sans-serif' },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' },
  badgeStock: { backgroundColor: '#0F172A', color: 'white', padding: '8px 15px', borderRadius: '20px', fontSize: '12px' },
  tabla: { width: '100%', borderCollapse: 'collapse' },
  encabezado: { textAlign: 'left', backgroundColor: '#F8FAFC', borderBottom: '2px solid #E2E8F0' },
  fila: { borderBottom: '1px solid #F1F5F9' },
  statusRojo: { color: '#EF4444', fontWeight: 'bold' },
  statusVerde: { color: '#10B981', fontWeight: 'bold' },
  botonAsignar: { backgroundColor: '#0284C7', color: 'white', border: 'none', padding: '8px 12px', borderRadius: '6px', cursor: 'pointer', fontSize: '12px' }
};