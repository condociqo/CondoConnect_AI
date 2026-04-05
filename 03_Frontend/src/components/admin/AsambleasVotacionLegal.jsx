import React, { useState } from 'react';

export default function AsambleasVotacionLegal() {
  const [faseAsamblea, setFaseAsamblea] = useState('votacion'); // votacion, acta, firmado
  const [votos, setVotos] = useState({ aFavor: 45, enContra: 5, abstenciones: 2 });
  const [tema, setTema] = useState('Aprobación de Presupuesto Mantenimiento 2026 y Pintura de Fachadas');

  const finalizarVotacion = () => {
    setFaseAsamblea('acta');
  };

  const firmarBiometricamente = () => {
    alert("📷 Escáner Facial Activado. Validando identidad en la base de datos de AWS...");
    setTimeout(() => {
      alert("✅ Identidad Confirmada. Su firma digital encriptada ha sido estampada en el Acta de Asamblea.");
      setFaseAsamblea('firmado');
    }, 2500);
  };

  return (
    <div style={estilos.contenedorAsamblea}>
      <header style={estilos.headerAsamblea}>
        <h3 style={estilos.titulo}>🏛️ Asamblea Oficial de Propietarios y Mesa Directiva</h3>
        <div style={estilos.badgeLive}>🔴 EN CURSO (Virtual / Presencial)</div>
      </header>

      {faseAsamblea === 'votacion' && (
        <div style={estilos.panelActivo}>
          <h4 style={estilos.tema}>Tema en Votación: {tema}</h4>
          <p style={estilos.instruccion}>Marina está contabilizando los votos emitidos desde la App de Residentes.</p>

          <div style={estilos.graficaResultados}>
            <div style={estilos.barraFavor}>A Favor: {votos.aFavor}</div>
            <div style={estilos.barraContra}>En Contra: {votos.enContra}</div>
          </div>

          <button onClick={finalizarVotacion} style={estilos.botonTerminar}>
            Cerrar Votación y Generar Acta Legal
          </button>
        </div>
      )}

      {faseAsamblea === 'acta' && (
        <div style={estilos.panelActa}>
          <div style={estilos.visorPDF}>
            <h3>📄 ACTA DE ASAMBLEA (Vista Previa)</h3>
            <p><strong>Resolución:</strong> Aprobado por Mayoría.</p>
            <p>Generado automáticamente por Marina AI.</p>
            <hr/>
            <p style={{fontSize: '12px', color: '#64748B'}}>Se requiere firma legal de los Directivos / Escrutadores.</p>
          </div>

          <button onClick={firmarBiometricamente} style={estilos.botonFirmar}>
            🔐 Acreditar Identidad y Firmar Acta (Mapeo Facial)
          </button>
        </div>
      )}

      {faseAsamblea === 'firmado' && (
        <div style={estilos.panelCompletado}>
          <h2 style={estilos.textoExito}>✅ Asamblea Concluida Legalmente</h2>
          <p>El acta ha sido firmada mediante biometría y almacenada en la Bóveda Inalterable de AWS (Blockchain Ledger).</p>
          <p>Se ha enviado una copia en PDF al correo y App de todos los propietarios.</p>
        </div>
      )}
    </div>
  );
}

const estilos = {
  contenedorAsamblea: { padding: '20px', backgroundColor: '#FFFFFF', borderRadius: '10px', border: '2px solid #3B82F6', marginTop: '20px', fontFamily: 'sans-serif' },
  headerAsamblea: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #E2E8F0', paddingBottom: '15px', marginBottom: '20px' },
  titulo: { color: '#0F172A', margin: 0 },
  badgeLive: { backgroundColor: '#EF4444', color: 'white', padding: '5px 10px', borderRadius: '5px', fontSize: '12px', fontWeight: 'bold', animation: 'pulse 2s infinite' },
  panelActivo: { backgroundColor: '#F8FAFC', padding: '20px', borderRadius: '8px' },
  tema: { fontSize: '18px', color: '#1E293B', marginBottom: '10px' },
  instruccion: { color: '#64748B', fontSize: '14px', marginBottom: '20px' },
  graficaResultados: { display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' },
  barraFavor: { backgroundColor: '#10B981', color: 'white', padding: '15px', borderRadius: '5px', fontWeight: 'bold', width: '80%' }, // Simula % de votos
  barraContra: { backgroundColor: '#EF4444', color: 'white', padding: '15px', borderRadius: '5px', fontWeight: 'bold', width: '15%' }, // Simula % de votos
  botonTerminar: { backgroundColor: '#0F172A', color: 'white', border: 'none', padding: '15px', borderRadius: '8px', width: '100%', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' },
  panelActa: { textAlign: 'center' },
  visorPDF: { backgroundColor: '#F1F5F9', padding: '40px', borderRadius: '8px', border: '1px solid #CBD5E1', marginBottom: '20px', textAlign: 'left', minHeight: '200px' },
  botonFirmar: { backgroundColor: '#3B82F6', color: 'white', border: 'none', padding: '15px', borderRadius: '8px', width: '100%', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 4px 6px rgba(59, 130, 246, 0.3)' },
  panelCompletado: { textAlign: 'center', backgroundColor: '#ECFDF5', padding: '30px', borderRadius: '8px', border: '1px solid #10B981' },
  textoExito: { color: '#065F46', margin: '0 0 15px 0' }
};