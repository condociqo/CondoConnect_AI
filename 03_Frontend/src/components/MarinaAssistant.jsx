import React, { useState } from 'react';

// Este componente representa a Marina en la pantalla del guardia.
export default function MarinaAssistant({ nombreGuardia }) {
  const [escuchando, setEscuchando] = useState(false);
  const [mensajeMarina, setMensajeMarina] = useState(
    `Hola ${nombreGuardia}, soy Marina. Estoy aquí para apoyarte en tu turno. ¿Cómo te sientes hoy?`
  );

  // Función que simula encender el micrófono para hablar con Marina
  const activarMicrofono = () => {
    setEscuchando(true);
    setMensajeMarina("Escuchándote... (AWS Transcribe procesando)");
    
    // Aquí conectaremos AWS Transcribe y Amazon Lex en el futuro
    setTimeout(() => {
      setEscuchando(false);
      setMensajeMarina("He registrado tu respuesta en la bitácora emocional de forma privada. Recuerda que tu bienestar es primero. ¿En qué más te ayudo?");
    }, 3000);
  };

  return (
    <div style={estilos.contenedorMarina}>
      <div style={estilos.avatarVisual}>
        {/* Aquí irá la imagen de Marina que diseñamos */}
        <img src="/assets/Marina_AI_Guia_Avatar_v1.png" alt="Marina AI" style={estilos.imagen} />
      </div>
      
      <div style={estilos.consolaInteraccion}>
        <p style={estilos.textoMarina}>{mensajeMarina}</p>
        
        <button 
          onClick={activarMicrofono} 
          style={escuchando ? estilos.botonEscuchando : estilos.botonHablar}
        >
          {escuchando ? '🎙️ Marina te escucha...' : '🎙️ Hablar con Marina'}
        </button>
      </div>
    </div>
  );
}

// Estilos básicos para que se vea profesional desde el primer día
const estilos = {
  contenedorMarina: { border: '1px solid #1E3A8A', borderRadius: '10px', padding: '15px', backgroundColor: '#F0F9FF', marginBottom: '20px', textAlign: 'center' },
  avatarVisual: { width: '100px', height: '100px', borderRadius: '50%', margin: '0 auto', overflow: 'hidden', backgroundColor: '#e2e8f0' },
  imagen: { width: '100%', height: '100%', objectFit: 'cover' },
  consolaInteraccion: { marginTop: '15px' },
  textoMarina: { fontSize: '16px', color: '#1E3A8A', fontStyle: 'italic', marginBottom: '15px' },
  botonHablar: { backgroundColor: '#2563EB', color: 'white', padding: '12px 24px', border: 'none', borderRadius: '8px', fontSize: '16px', cursor: 'pointer', width: '100%' },
  botonEscuchando: { backgroundColor: '#EF4444', color: 'white', padding: '12px 24px', border: 'none', borderRadius: '8px', fontSize: '16px', cursor: 'pointer', width: '100%', animation: 'pulse 1.5s infinite' }
};