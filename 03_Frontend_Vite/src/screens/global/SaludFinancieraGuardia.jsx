import React from 'react';

export default function SaludFinancieraGuardia({ saldoPendienteML }) {
  return (
    <div style={estilos.tarjetaSalud}>
      <div style={estilos.icono}>🛡️</div>
      <h4>Plan de Sanación de Deuda</h4>
      <p style={estilos.texto}>
        Marina detectó que tienes un saldo pendiente con Mercado Libre de <strong>${saldoPendienteML}</strong>.
      </p>
      
      <div style={estilos.cajaSugerencia}>
        <p>¿Quieres usar el 50% de tus ganancias por escaneo para liquidar esta deuda automáticamente?</p>
        <p style={estilos.beneficio}>✓ Sin tocar tu sueldo base.<br/>✓ Limpia tu historial crediticio.<br/>✓ Recupera tu capacidad de préstamo.</p>
        
        <button style={estilos.botonAceptar}>Sí, activar abono automático</button>
        <button style={estilos.botonOmitir}>Por ahora no, gracias</button>
      </div>
    </div>
  );
}

const estilos = {
  tarjetaSalud: { padding: '20px', backgroundColor: '#F0FDFA', border: '1px solid #5EEAD4', borderRadius: '12px', textAlign: 'center' },
  icono: { fontSize: '30px', marginBottom: '10px' },
  texto: { fontSize: '14px', color: '#0F172A' },
  cajaSugerencia: { marginTop: '15px', backgroundColor: 'white', padding: '15px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' },
  beneficio: { fontSize: '12px', color: '#0D9488', textAlign: 'left', margin: '10px 0' },
  botonAceptar: { backgroundColor: '#0D9488', color: 'white', border: 'none', padding: '10px 15px', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer', width: '100%' },
  botonOmitir: { backgroundColor: 'transparent', color: '#94A3B8', border: 'none', marginTop: '10px', fontSize: '12px', cursor: 'pointer' }
};