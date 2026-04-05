import React, { useState } from 'react';

export default function OnboardingMarina() {
  const [paso, setPaso] = useState(1);

  const guiones = {
    1: "¡Hola! Soy Marina AI. Seré tu compañera de turno. Mi trabajo es hacer tu labor más fácil y segura.",
    2: "Arriba a la derecha tienes tu Billetera. Cada paquete que escanees suma dinero ahí. ¡Es todo tuyo!",
    3: "Si estás en peligro, presiona el Botón SOS rojo. Yo encenderé las cámaras y llamaré a tu supervisor al instante. ¡Comencemos!"
  };

  if (paso > 3) return null; // El tour termina

  return (
    <div style={{ position: 'fixed', bottom: '20px', right: '20px', backgroundColor: '#0F172A', color: 'white', padding: '20px', borderRadius: '15px', maxWidth: '300px', boxShadow: '0 10px 25px rgba(0,0,0,0.5)', zIndex: 1000 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
        <div style={{ fontSize: '24px' }}>♾️</div>
        <h4 style={{ margin: 0, color: '#38BDF8' }}>Marina AI</h4>
      </div>
      <p style={{ fontSize: '14px', lineHeight: '1.5' }}>{guiones[paso]}</p>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button onClick={() => setPaso(paso + 1)} style={{ backgroundColor: '#38BDF8', color: '#0F172A', border: 'none', padding: '8px 15px', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}>
          {paso === 3 ? "¡Entendido!" : "Siguiente ➡️"}
        </button>
      </div>
    </div>
  );
}