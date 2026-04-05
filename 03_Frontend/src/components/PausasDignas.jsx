import React, { useState, useEffect } from 'react';

export default function PausasDignas() {
  const [pausaActiva, setPausaActiva] = useState(false);
  const [tipoPausa, setTipoPausa] = useState(null);
  const [tiempoRestante, setTiempoRestante] = useState(0);

  // Simulación del temporizador (en un entorno real usaríamos web workers o backend)
  useEffect(() => {
    let intervalo;
    if (pausaActiva && tiempoRestante > 0) {
      intervalo = setInterval(() => {
        setTiempoRestante((prev) => prev - 1);
      }, 1000);
    } else if (tiempoRestante === 0 && pausaActiva) {
      setPausaActiva(false);
      alert("Marina: Tu tiempo de pausa ha concluido. El control manual de la caseta está activo nuevamente.");
    }
    return () => clearInterval(intervalo);
  }, [pausaActiva, tiempoRestante]);

  const iniciarPausa = (tipo, minutos) => {
    setTipoPausa(tipo);
    setTiempoRestante(minutos * 60);
    setPausaActiva(true);
    // Aquí el backend (AWS IoT) cambia el estado de la caseta a "Autopiloto Marina"
  };

  const formatearTiempo = (segundos) => {
    const m = Math.floor(segundos / 60).toString().padStart(2, '0');
    const s = (segundos % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  return (
    <div style={estilos.contenedorPausas}>
      <h3 style={estilos.titulo}>☕ Pausas Dignas y Necesidades Básicas</h3>
      
      {!pausaActiva ? (
        <div style={estilos.panelSeleccion}>
          <p style={estilos.instruccion}>Selecciona el tipo de pausa. Marina tomará el control total de los accesos vehiculares y peatonales.</p>
          <div style={estilos.gridBotones}>
            <button onClick={() => iniciarPausa('Baño', 10)} style={estilos.botonBano}>
              🚻 Ir al Baño (10 min)
            </button>
            <button onClick={() => iniciarPausa('Comida', 30)} style={estilos.botonComida}>
              🍲 Tomar Alimentos (30 min)
            </button>
            <button onClick={() => iniciarPausa('Fatiga Visual', 15)} style={estilos.botonDescanso}>
              💆‍♂️ Descanso Visual / Fatiga (15 min)
            </button>
          </div>
        </div>
      ) : (
        <div style={estilos.panelActivo}>
          <div style={estilos.indicadorMarina}>
            <span style={estilos.iconoPulso}>♾️</span>
            <h4>MARINA EN CONTROL (AUTOPILOTO)</h4>
          </div>
          
          <h2 style={estilos.temporizador}>{formatearTiempo(tiempoRestante)}</h2>
          <p style={estilos.estadoTexto}>Estado actual: <strong>Pausa por {tipoPausa}</strong></p>
          <p style={estilos.mensajeTranquilidad}>
            "Ve tranquilo. Yo me encargo de registrar a los visitantes y abrirle a los residentes. Nadie te molestará."
          </p>

          <button onClick={() => setPausaActiva(false)} style={estilos.botonReanudar}>
            Volver al Puesto Manualmente
          </button>
        </div>
      )}
    </div>
  );
}

const estilos = {
  contenedorPausas: { padding: '20px', backgroundColor: '#F0F9FF', borderRadius: '12px', border: '2px solid #38BDF8', marginTop: '20px' },
  titulo: { color: '#0284C7', margin: '0 0 15px 0', fontSize: '20px' },
  instruccion: { color: '#475569', fontSize: '14px', marginBottom: '20px' },
  gridBotones: { display: 'flex', flexDirection: 'column', gap: '15px' },
  botonBano: { backgroundColor: '#3B82F6', color: 'white', padding: '15px', borderRadius: '8px', border: 'none', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' },
  botonComida: { backgroundColor: '#F59E0B', color: 'white', padding: '15px', borderRadius: '8px', border: 'none', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' },
  botonDescanso: { backgroundColor: '#8B5CF6', color: 'white', padding: '15px', borderRadius: '8px', border: 'none', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' },
  panelActivo: { backgroundColor: '#0F172A', padding: '20px', borderRadius: '12px', textAlign: 'center', color: 'white', border: '2px solid #10B981', boxShadow: '0 0 20px rgba(16, 185, 129, 0.2)' },
  indicadorMarina: { display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', color: '#10B981', marginBottom: '20px' },
  iconoPulso: { fontSize: '24px', animation: 'pulse 1.5s infinite' },
  temporizador: { fontSize: '48px', color: '#38BDF8', margin: '10px 0', fontFamily: 'monospace' },
  estadoTexto: { fontSize: '18px', color: '#E2E8F0' },
  mensajeTranquilidad: { fontStyle: 'italic', color: '#94A3B8', marginTop: '15px', backgroundColor: 'rgba(255,255,255,0.05)', padding: '15px', borderRadius: '8px' },
  botonReanudar: { backgroundColor: '#EF4444', color: 'white', padding: '15px', width: '100%', borderRadius: '8px', border: 'none', marginTop: '20px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' }
};