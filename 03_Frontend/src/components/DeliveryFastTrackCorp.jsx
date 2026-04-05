import React, { useState } from 'react';

export default function DeliveryFastTrackCorp() {
  const [escaneando, setEscaneando] = useState(false);
  const [ticketDelivery, setTicketDelivery] = useState(null);

  const procesarDeliveryPremium = () => {
    setEscaneando(true);
    // Simulación de lectura de QR de Rappi/UberEats/Mensajería
    setTimeout(() => {
      setEscaneando(false);
      setTicketDelivery({
        plataforma: 'Food App / Courier',
        empleadoDestino: 'Lic. Mariana Ríos - Piso 24',
        comisionGenerada: 2.50, // Microtransacción por Fast-Track
        lockerAsignado: 'Locker Inteligente #42'
      });
    }, 2000);
  };

  return (
    <div style={estilos.contenedorFastTrack}>
      <h3 style={estilos.titulo}>🍔📦 Recepción Fast-Track (Delivery Corporativo)</h3>
      <p style={estilos.descripcion}>Monetización por entregas prioritarias sin filas.</p>

      {!ticketDelivery ? (
        <div style={estilos.areaBotones}>
          <button onClick={procesarDeliveryPremium} style={estilos.botonEscanear}>
            Escanear QR de Repartidor (Vía Rápida)
          </button>
        </div>
      ) : (
        <div style={estilos.ticketGenerado}>
          <h4 style={estilos.textoExito}>✅ Entrega Procesada Exitosamente</h4>
          <p><strong>Destinatario:</strong> {ticketDelivery.empleadoDestino}</p>
          <p><strong>Instrucción para Repartidor:</strong> Dejar en {ticketDelivery.lockerAsignado}</p>
          
          <div style={estilos.areaComision}>
            <p><strong>Micro-comisión Fast-Track Asegurada:</strong></p>
            <div style={estilos.distribucionFondo}>
              <span>👮 Guardia (+40%)</span>
              <span>🏢 Corporativo (+40%)</span>
              <span>☁️ Sistema AWS (+20%)</span>
            </div>
            <p style={estilos.notaIA}>Marina está notificando al empleado para la recolección.</p>
          </div>

          <button onClick={() => setTicketDelivery(null)} style={estilos.botonLimpiar}>
            Siguiente Repartidor
          </button>
        </div>
      )}
    </div>
  );
}

const estilos = {
  contenedorFastTrack: { padding: '20px', backgroundColor: '#F0FDF4', borderRadius: '10px', border: '2px solid #22C55E', marginTop: '15px' },
  titulo: { color: '#166534', fontSize: '18px', margin: '0 0 5px 0' },
  descripcion: { color: '#15803D', fontSize: '14px', marginBottom: '15px' },
  areaBotones: { textAlign: 'center' },
  botonEscanear: { backgroundColor: '#22C55E', color: 'white', padding: '15px', borderRadius: '8px', border: 'none', width: '100%', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' },
  ticketGenerado: { backgroundColor: 'white', padding: '15px', borderRadius: '8px', border: '1px solid #86EFAC' },
  textoExito: { color: '#15803D', borderBottom: '1px solid #DCFCE7', paddingBottom: '10px', marginBottom: '10px' },
  areaComision: { marginTop: '15px', backgroundColor: '#F8FAFC', padding: '10px', borderRadius: '5px', fontSize: '14px' },
  distribucionFondo: { display: 'flex', justifyContent: 'space-between', color: '#0F172A', fontWeight: 'bold', marginTop: '5px', fontSize: '12px' },
  notaIA: { marginTop: '10px', fontStyle: 'italic', color: '#64748B', fontSize: '12px' },
  botonLimpiar: { backgroundColor: '#0F172A', color: 'white', padding: '12px', borderRadius: '8px', border: 'none', width: '100%', marginTop: '15px', fontWeight: 'bold', cursor: 'pointer' }
};