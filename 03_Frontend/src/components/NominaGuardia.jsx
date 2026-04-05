import React, { useState } from 'react';

export default function NominaGuardia() {
  const [solicitando, setSolicitando] = useState(false);

  // Datos simulados de la quincena
  const nomina = {
    periodo: '01 Abr - 15 Abr',
    sueldoBase: 4500.00,
    turnosExtra: 1000.00,
    bonoMonetizacion: 350.00, // Lo ganado por paquetería Amazon/ML
    deducciones: 150.00,
    totalNeto: 5700.00,
    adelantoDisponible: 1500.00
  };

  const pedirAdelanto = () => {
    setSolicitando(true);
    setTimeout(() => {
      setSolicitando(false);
      alert("✅ Solicitud aprobada. Tu adelanto se depositará en tu tarjeta en las próximas horas.");
    }, 2000);
  };

  return (
    <div style={estilos.contenedorNomina}>
      <h3 style={estilos.titulo}>💵 Mi Nómina y Finanzas</h3>
      
      <div style={estilos.tarjetaResumen}>
        <p style={estilos.periodo}>Periodo Actual: {nomina.periodo}</p>
        <h4 style={estilos.montoTotal}>Total Estimado: ${nomina.totalNeto.toFixed(2)}</h4>
        
        <div style={estilos.desglose}>
          <div style={estilos.filaDesglose}><span>Sueldo Base:</span> <span>${nomina.sueldoBase}</span></div>
          <div style={estilos.filaDesglose}><span>Turnos Extra:</span> <span style={estilos.ingresoExtra}>+${nomina.turnosExtra}</span></div>
          <div style={estilos.filaDesglose}><span>Bono Paquetería:</span> <span style={estilos.ingresoExtra}>+${nomina.bonoMonetizacion}</span></div>
          <div style={estilos.filaDesglose}><span>Deducciones:</span> <span style={estilos.deduccion}>-${nomina.deducciones}</span></div>
        </div>
      </div>

      <div style={estilos.areaAdelanto}>
        <p><strong>Adelanto de Nómina Disponible:</strong> ${nomina.adelantoDisponible.toFixed(2)}</p>
        <p style={estilos.textoIA}>Marina sugiere: "Recuerda usar los adelantos solo para emergencias."</p>
        <button 
          onClick={pedirAdelanto} 
          disabled={solicitando}
          style={estilos.botonAdelanto}
        >
          {solicitando ? 'Procesando con RH...' : '💸 Solicitar Adelanto Ahora'}
        </button>
      </div>
    </div>
  );
}

const estilos = {
  contenedorNomina: { padding: '20px', backgroundColor: '#F8FAFC', borderRadius: '10px', border: '1px solid #CBD5E1', marginTop: '15px' },
  titulo: { color: '#0F172A', margin: '0 0 15px 0' },
  tarjetaResumen: { backgroundColor: 'white', padding: '15px', borderRadius: '8px', border: '1px solid #E2E8F0', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' },
  periodo: { color: '#64748B', fontSize: '14px', margin: 0 },
  montoTotal: { fontSize: '28px', color: '#10B981', margin: '10px 0' },
  desglose: { borderTop: '1px solid #E2E8F0', paddingTop: '10px' },
  filaDesglose: { display: 'flex', justifyContent: 'space-between', fontSize: '14px', color: '#475569', marginBottom: '5px' },
  ingresoExtra: { color: '#3B82F6', fontWeight: 'bold' },
  deduccion: { color: '#EF4444' },
  areaAdelanto: { marginTop: '20px', backgroundColor: '#EFF6FF', padding: '15px', borderRadius: '8px', border: '1px dashed #3B82F6' },
  textoIA: { fontStyle: 'italic', color: '#0369A1', fontSize: '13px' },
  botonAdelanto: { backgroundColor: '#3B82F6', color: 'white', padding: '12px', width: '100%', border: 'none', borderRadius: '8px', fontWeight: 'bold', marginTop: '10px', cursor: 'pointer' }
};