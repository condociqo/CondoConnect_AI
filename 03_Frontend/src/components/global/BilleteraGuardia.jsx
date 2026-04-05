import React, { useState } from 'react';

export default function BilleteraGuardia() {
  const [saldo, setSaldo] = useState(452.00); // Pesos acumulados por escaneos
  const [historial] = useState([
    { id: 1, tipo: 'Escaneo Amazon', monto: 4.00, hora: '10:15 AM' },
    { id: 2, tipo: 'Escaneo Mercado Libre', monto: 4.00, hora: '11:30 AM' },
    { id: 3, tipo: 'Bono puntualidad Marina', monto: 20.00, hora: '08:00 AM' }
  ]);

  return (
    <div style={estilos.carteraContainer}>
      <div style={estilos.tarjetaSaldo}>
        <p style={{ margin: 0, fontSize: '14px' }}>Mi Saldo CondoConnect</p>
        <h1 style={estilos.monto}>${saldo.toFixed(2)} <span style={{fontSize: '18px'}}>MXN</span></h1>
        <button style={estilos.botonCobrar}>💳 Cobrar mis ganancias</button>
      </div>

      <div style={estilos.seccionHistorial}>
        <h4 style={{ color: '#1E293B', marginBottom: '10px' }}>Ingresos por Logística (Hoy)</h4>
        {historial.map(item => (
          <div key={item.id} style={estilos.itemHistorial}>
            <div>
              <div style={{fontWeight: 'bold', fontSize: '14px'}}>{item.tipo}</div>
              <div style={{fontSize: '11px', color: '#64748B'}}>{item.hora}</div>
            </div>
            <div style={{ color: '#10B981', fontWeight: 'bold' }}>+${item.monto.toFixed(2)}</div>
          </div>
        ))}
      </div>
      
      <p style={estilos.notaMarina}>
        ♾️ Marina AI: Cada paquete escaneado correctamente es dinero seguro para ti. ¡Sigue así!
      </p>
    </div>
  );
}

const estilos = {
  carteraContainer: { padding: '20px', backgroundColor: '#F1F5F9', borderRadius: '15px', fontFamily: 'sans-serif' },
  tarjetaSaldo: { backgroundColor: '#0F172A', color: 'white', padding: '25px', borderRadius: '12px', textAlign: 'center', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' },
  monto: { fontSize: '42px', margin: '10px 0' },
  botonCobrar: { backgroundColor: '#38BDF8', color: '#0F172A', border: 'none', padding: '12px 20px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', width: '100%' },
  seccionHistorial: { marginTop: '20px', backgroundColor: 'white', borderRadius: '10px', padding: '15px' },
  itemHistorial: { display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #F1F5F9' },
  notaMarina: { fontSize: '12px', color: '#0284C7', textAlign: 'center', marginTop: '15px', fontStyle: 'italic' }
};