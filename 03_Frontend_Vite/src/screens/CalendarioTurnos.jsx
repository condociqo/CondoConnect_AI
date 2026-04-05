import React, { useState } from 'react';

export default function CalendarioTurnos() {
  const [turnosExtra, setTurnosExtra] = useState([
    { id: 'TE-01', fecha: 'Mañana, 15:00 - 23:00', puesto: 'Lobby Principal', pago: '$450.00 MXN', disponible: true },
    { id: 'TE-02', fecha: 'Domingo, 07:00 - 15:00', puesto: 'Rondinero', pago: '$500.00 MXN', disponible: true }
  ]);
  const [turnoCompletado, setTurnoCompletado] = useState(true); // Simula que acaba de terminar un extra
  const [pagoSolicitado, setPagoSolicitado] = useState(false);

  const tomarTurno = (id) => {
    const actualizados = turnosExtra.map(t => 
      t.id === id ? { ...t, disponible: false } : t
    );
    setTurnosExtra(actualizados);
    alert('¡Turno extra asignado! Marina ha actualizado tu calendario.');
  };

  const solicitarPagoInmediato = () => {
    setPagoSolicitado(true);
    // Aquí conectaríamos con Stripe Connect o STP para transferencia SPEI al instante
    setTimeout(() => {
      alert('Transferencia exitosa. El pago por tu turno extra ya está en tu cuenta.');
    }, 2000);
  };

  return (
    <div style={estilos.contenedorTurnos}>
      <h3 style={estilos.titulo}>🗓️ Mi Calendario y Turnos Inteligentes</h3>

      {/* Sección de Turnos Extra */}
      <div style={estilos.seccion}>
        <h4 style={estilos.subtitulo}>Oportunidades de Turnos Extra</h4>
        <p style={estilos.textoInfo}>Gana ingresos adicionales. El pago de estos turnos se libera el mismo día que los trabajas.</p>
        
        <div style={estilos.listaTurnos}>
          {turnosExtra.map(turno => (
            <div key={turno.id} style={turno.disponible ? estilos.tarjetaTurno : estilos.tarjetaTurnoTomado}>
              <p><strong>{turno.fecha}</strong></p>
              <p>📍 {turno.puesto}</p>
              <p style={estilos.montoPago}>💰 Pago Neto: {turno.pago}</p>
              
              {turno.disponible ? (
                <button onClick={() => tomarTurno(turno.id)} style={estilos.botonTomar}>
                  🤚 Tomar Turno
                </button>
              ) : (
                <span style={estilos.textoTomado}>✔️ Asignado a ti</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Sección de Pago Inmediato */}
      {turnoCompletado && !pagoSolicitado && (
        <div style={estilos.panelPago}>
          <h4>🎉 Turno Extra Finalizado</h4>
          <p>Has completado tu turno TE-00 (Ayer, 23:00 - 07:00). Tu dinero está listo.</p>
          <button onClick={solicitarPagoInmediato} style={estilos.botonPagar}>
            💸 Solicitar Pago Inmediato ($500.00)
          </button>
        </div>
      )}
      
      {pagoSolicitado && (
        <div style={estilos.panelPagoExito}>
          <h4>✅ Pago Procesado</h4>
          <p>El dinero ha sido enviado a tu tarjeta nómina registrada.</p>
        </div>
      )}
    </div>
  );
}

const estilos = {
  contenedorTurnos: { padding: '20px', backgroundColor: '#F8FAFC', borderRadius: '10px', border: '1px solid #E2E8F0', marginTop: '15px' },
  titulo: { color: '#0F172A', fontSize: '18px', borderBottom: '2px solid #CBD5E1', paddingBottom: '10px' },
  seccion: { marginTop: '15px' },
  subtitulo: { color: '#1E293B', fontSize: '16px' },
  textoInfo: { color: '#64748B', fontSize: '13px', marginBottom: '15px' },
  listaTurnos: { display: 'flex', gap: '15px', overflowX: 'auto', paddingBottom: '10px' },
  tarjetaTurno: { minWidth: '200px', backgroundColor: '#FFFFFF', padding: '15px', borderRadius: '8px', border: '1px solid #38BDF8', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' },
  tarjetaTurnoTomado: { minWidth: '200px', backgroundColor: '#F1F5F9', padding: '15px', borderRadius: '8px', border: '1px solid #CBD5E1', opacity: 0.7 },
  montoPago: { color: '#10B981', fontWeight: 'bold', fontSize: '15px', margin: '10px 0' },
  botonTomar: { backgroundColor: '#3B82F6', color: 'white', border: 'none', padding: '10px', borderRadius: '5px', width: '100%', cursor: 'pointer', fontWeight: 'bold' },
  textoTomado: { color: '#1E293B', fontWeight: 'bold' },
  panelPago: { marginTop: '20px', backgroundColor: '#ECFDF5', border: '2px dashed #10B981', padding: '15px', borderRadius: '8px', textAlign: 'center' },
  botonPagar: { backgroundColor: '#10B981', color: 'white', padding: '15px', width: '100%', borderRadius: '8px', border: 'none', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', marginTop: '10px' },
  panelPagoExito: { marginTop: '20px', backgroundColor: '#10B981', color: 'white', padding: '15px', borderRadius: '8px', textAlign: 'center' }
};